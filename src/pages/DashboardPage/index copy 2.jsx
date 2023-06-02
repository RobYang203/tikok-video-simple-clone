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

const ChakraCarousel = chakra(Carousel);
const ChakraPlayer = chakra(ReactPlayer);

const onChange = (e) => {
  console.log('🚀 ~ file: index.jsx:8 ~ e:', e);
};
const renderItem = (item, op) => {
  console.log('🚀 ~ file: index.jsx:39 ~ DashboardPage ~ op:', op);
  return item;
};

let moveY = 0;

function DashboardPage() {
  const ref = useRef();
  const [isSwipe, setIsSwipe] = useState(false);
  console.log("🚀 ~ file: index.jsx:33 ~ DashboardPage ~ isSwipe:", isSwipe)

  console.log('🚀 ~ file: index.jsx:25 ~ DashboardPage ~ ref:', ref);
  const height = use100vh();
  const style = {
    '> video': {
      objectFit: 'cover',
    },
    width: '100% !important',
    height: `100% !important`,
  };
  const style2 = {
    height,
  };

  return (
    <>
      <CarouselProvider
        ref={ref}
        naturalSlideHeight={height}
        naturalSlideWidth={400}
        totalSlides={2}
        orientation="vertical"
        dragEnabled={false}
      >
        <Slider
          preventVerticalScrollOnTouch={false}
          moveThreshold={0.3}
          trayProps={{
            onTouchStart:(e)=>{
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
          <ShortPlayer />
          <Slide index={1}>
            <ChakraPlayer
              playing
              loop
              url="http://192.168.0.2:3000/media/Toyota_Camry_XV70.m3u8"
              playsinline
              sx={style}
              muted={true}
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      {/* <ChakraCarousel
        autoPlay={false}
        showIndicators={false}
        showStatus={false}
        swipeable
        emulateTouch
        axis="vertical"
        showArrows={false}
        onChange={onChange}
        swipeScrollTolerance={250}
        sx={style2}
        stopOnHover
      >
        <Box bg="#0022ff" width="100%" h={height}>
          <ChakraPlayer
            ref={ref}
            playing
            loop
            url="http://192.168.0.2:3000/media/Volkswagen_Golf_7.m3u8"
            playsinline
            sx={style}
            muted={true}
          />
        </Box>
        <Box bg="#cc22ff" width="100%" h={height}>
          <ChakraPlayer
            ref={ref}
            playing
            loop
            url="http://192.168.0.2:3000/media/Volkswagen_Golf_7.m3u8"
            playsinline
            sx={style}
            muted={true}
          />
        </Box>
        <Box bg="#ccccff" width="100%" h={height}>
          <ChakraPlayer
            ref={ref}
            playing
            loop
            url="http://192.168.0.2:3000/media/Volkswagen_Golf_7.m3u8"
            playsinline
            sx={style}
            muted={true}
          />
        </Box>
      </ChakraCarousel> */}
    </>
  );
}

export default DashboardPage;
