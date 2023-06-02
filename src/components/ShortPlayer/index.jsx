import React, { useContext, useRef, useState } from 'react';
import { CarouselContext, Slide } from 'pure-react-carousel';
import { Box, Image, chakra } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import ProgressBar from 'components/ProgressBar';

const ChakraPlayer = chakra(ReactPlayer);
const ChakraSlide = chakra(Slide);

const classes = {
  root: {
    height: '100%',
    '& .carousel__slide-focus-ring': {
      outlineColor: 'rgb(255 255 255 / 0%)',
      outlineStyle: 'none'
    },
  },
  player: {
    width: '100% !important',
    height: `100% !important`,
  },
  coverImageBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fit',
  },
};

function ShortPlayer({ isActive, isSwipe, index, title, cover, play_url }) {
  const { state } = useContext(CarouselContext);
  const ref = useRef();
  const [currentSeconds, setCurrentSeconds] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  const isStop =
    !loaded || !isActive || isSwipe || state.currentSlide !== index;
  console.log('🚀 ~ file: index.jsx:41 ~ ShortPlayer ~ isStop:', isStop);

  const handleProgressBarSlide = (seekSeconds) => {
    ref.current.seekTo(seekSeconds);
    setCurrentSeconds(seekSeconds);
  };

  return (
    <ChakraSlide sx={classes.root} index={index}>
      <Image
        src={cover}
        alt={title}
        display={isStop ? 'block' : 'none'}
        sx={classes.coverImage}
      />

      <ChakraPlayer
        ref={ref}
        style={
          { dispaly: !isStop ? 'block' : 'none' }}
        playing={!isStop}
        loop
        url={state.currentSlide === index ? play_url : ''}
        playsinline
        sx={classes.player}
        muted={true}
        onReady={(e) => {
          setLoaded(true);
        }}
        onPause={(e) => {
          if (isSwipe) ref.current.seekTo(0);
        }}
        onProgress={(e) => {
          setCurrentSeconds(e.playedSeconds);
        }}
      />
      <ProgressBar
        totalSeconds={ref.current?.getDuration()}
        currentSeconds={currentSeconds}
        onSlide={handleProgressBarSlide}
        isActive={!isStop}
      />
    </ChakraSlide>
  );
}

ShortPlayer.propTypes = {};

export default ShortPlayer;
