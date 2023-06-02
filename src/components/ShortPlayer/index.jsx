import React, { useContext, useRef } from 'react';
import { CarouselContext, Slide } from 'pure-react-carousel';
import { Image, chakra } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const ChakraPlayer = chakra(ReactPlayer);

const classes = {
  root: {
    height: '100%',
  },
  player: {
    '> video': {
      objectFit: 'cover',
    },
    width: '100% !important',
    height: `100% !important`,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

function ShortPlayer({ isActive, isSwipe, index, title, cover, play_url }) {
  const { state } = useContext(CarouselContext);
  const ref = useRef();
  const isStop = !isActive || isSwipe || state.currentSlide !== index;

  return (
    <Slide index={index}>
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
      />
    </Slide>
  );
}

ShortPlayer.propTypes = {};

export default ShortPlayer;
