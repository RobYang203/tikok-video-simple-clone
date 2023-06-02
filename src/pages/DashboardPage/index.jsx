import { Box, Text, chakra } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import Div100vh, { use100vh } from 'react-div-100vh';
import {
  CarouselContext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ShortPlayer from 'components/ShortPlayer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let moveY = 0;

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
  const [isSwipe, setIsSwipe] = useState(false);
  const height = use100vh();

  return (
    <>
      <CarouselProvider
        naturalSlideHeight={height}
        naturalSlideWidth={400}
        totalSlides={data.items.length}
        orientation="vertical"
        dragEnabled={false}
      >
        <Slider
          preventVerticalScrollOnTouch={false}
          moveThreshold={0.25}
          trayProps={{
            onTouchStart: (e) => {
              moveY = e.touches[0].clientY;
            },
            onTouchMove: (e) => {
              const calcY = moveY - e.touches[0].clientY;

              if (Math.abs(calcY) >= 30 && !isSwipe) {
                setIsSwipe(true);
              }
            },
            onTransitionEnd: (e) => {
              moveY = null;
              setIsSwipe(false);
            },
          }}
        >
          {data.items.map((item, i) => {
            return (
              <ShortPlayer
                key={`ShortPlayer-${i}`}
                index={i}
                isSwipeNow={isSwipe}
                {...item}
              />
            );
          })}
        </Slider>
      </CarouselProvider>
    </>
  );
}

export default DashboardPage;
