import { chakra } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import ShortPlayer from 'components/ShortPlayer';
import Slider from 'react-slick';
import useStyles from 'hooks/useStyles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChakraSlider = chakra(Slider);

const makeStyles = ({ otherVariables: { height } }) => {
  return {
    root: {
      '& .slick-slide > div': {
        height,
      },
    },
  };
};

const data = {
  items: [
    {
      title: 'Audi_A4_S4',
      cover: 'http://localhost:3000/images/Audi_A4_S4.png',
      play_url: 'http://localhost:3000/media/Audi_A4_S4.m3u8',
    },
    {
      title: 'Bugatti_Chiron',
      cover: 'http://localhost:3000/images/Bugatti_Chiron.png',
      play_url: 'http://localhost:3000/media/Bugatti_Chiron.m3u8',
    },
    {
      title: 'Range_Rover_Sport_L322',
      cover: 'http://localhost:3000/images/Range_Rover_Sport_L322.png',
      play_url: 'http://localhost:3000/media/Range_Rover_Sport_L322.m3u8',
    },
  ],
};

function DashboardPage() {
  const ref = useRef();
  const [isSwipe , setIsSwipe] = useState(false);

  console.log('🚀 ~ file: index.jsx:24 ~ DashboardPage ~ ref:', ref);
  const classes = useStyles(makeStyles);

  return (
    <>
      <ChakraSlider
        ref={ref}
        sx={classes.root}
        vertical
        verticalSwiping
        swipeToSlide
        infinite={false}
        onTouchStart={(e) => {
          console.log('🚀 ~ file: index.jsx:24 ~ onTouchStart ~ (e:', e);
        }}
        beforeChange={(e) => {
          console.log('🚀 ~ file: index.jsx:24 ~ beforeChange ~ (e:', e);
        }}
        afterChange={(e) => {
          console.log('🚀 ~ file: index.jsx:35 ~ afterChange ~ e:', e);
        }}
        onSwipe={(e) => {
          console.log('🚀 ~ file: index.jsx:33 ~ onSwipe ~ e:', e);
        }}
        swipeEvent={(e) => {
          console.log('🚀 ~ file: index.jsx:33 ~ swipeEvent ~ e:', e);
        }}
      >
        {data.items.map((item, i) => {
          return <ShortPlayer key={`ShortPlayer-${i}`} {...item} />;
        })}
      </ChakraSlider>
    </>
  );
}

export default DashboardPage;
