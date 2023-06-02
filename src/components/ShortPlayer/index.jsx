import React, { useContext, useRef, useState } from 'react';
import { CarouselContext, Slide } from 'pure-react-carousel';
import { Image, chakra } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import ProgressBar from 'components/ProgressBar';

const ChakraPlayer = chakra(ReactPlayer);
const ChakraSlide = chakra(Slide);

const classes = {
  root: {
    height: '100%',
    '& .carousel__slide-focus-ring': {
      outline: '0px',
    },
  },
  player: {
    width: '100% !important',
    height: `100% !important`,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
};

function ShortPlayer({ isActive, isSwipe, index, title, cover, play_url }) {
  const { state } = useContext(CarouselContext);
  const ref = useRef();
  const [currentSeconds, setCurrentSeconds] = useState(undefined);

  const isStop = !isActive || isSwipe || state.currentSlide !== index;

  const handleProgressBarSlide = (seekSeconds) => { 
    ref.current.seekTo(seekSeconds);
    setCurrentSeconds(seekSeconds);
   }

  return (
    <ChakraSlide sx={classes.root} index={index}>
      <Image
        src={cover}
        alt={title}
        sx={classes.coverImage}
        display={isStop ? 'block' : 'none'}
      />
      <ChakraPlayer
        ref={ref}
        display={!isStop ? 'block' : 'none'}
        playing={!isStop}
        loop
        url={state.currentSlide === index ? play_url : ''}
        playsinline
        sx={classes.player}
        muted={true}
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
      />
    </ChakraSlide>
  );
}

ShortPlayer.propTypes = {};

export default ShortPlayer;
