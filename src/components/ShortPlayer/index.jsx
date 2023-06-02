import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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

function ShortPlayer({ isSwipeNow, index, title, cover, play_url }) {
  const { state } = useContext(CarouselContext);
  const ref = useRef();
  const isChange = isSwipeNow || state.currentSlide !== index;

  return (
    <Slide index={index}>
      <Image
        src={cover}
        alt={title}
        sx={classes.coverImage}
        display={isChange ? 'block' : 'none'}
      />
      <ChakraPlayer
        ref={ref}
        display={!isChange ? 'block' : 'none'}
        playing={!isChange}
        loop
        url={state.currentSlide === index ? play_url : ''}
        playsinline
        sx={classes.player}
        muted={true}
        onPause={(e) => {
          ref.current.seekTo(0);
        }}
      />
    </Slide>
  );
}

ShortPlayer.propTypes = {};

export default ShortPlayer;
