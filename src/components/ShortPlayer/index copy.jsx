import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CarouselContext, Slide } from 'pure-react-carousel';
import { Box, Image, chakra } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const ChakraPlayer = chakra(ReactPlayer);
const styles = {
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
  },
};

function ShortPlayer({ isActive, title, cover, play_url }) {
  if (!isActive)
    return <Image src={cover} alt={title} sx={styles.coverImage} />;
  return (
    <Box sx={styles.root}>
      <ChakraPlayer
        playing
        loop
        url={play_url}
        playsinline
        sx={styles.player}
        muted={true}
      />
    </Box>
  );
}

ShortPlayer.propTypes = {};

export default ShortPlayer;
