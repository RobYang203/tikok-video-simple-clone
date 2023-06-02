import React, { useState } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import ShortPlayer from 'components/ShortPlayer';
import { Spinner, TabPanel } from '@chakra-ui/react';

let swipeStartY = 0;

const classes = {
  root: {
    outline: '0px',
    outlineOffset: 0,
    padding: 0,
  },
  loading: {
    display: 'flex',
    width: window.innerWidth,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function VideoListPanel({ isActive, list, vh }) {
  const [isSwipe, setIsSwipe] = useState(false);

  if (list === null)
    return (
      <TabPanel sx={{ ...classes.root, ...classes.loading }}>
        <Spinner size="xl" color="red.500" />
      </TabPanel>
    );
  return (
    <CarouselProvider
      naturalSlideHeight={vh - 50}
      naturalSlideWidth={window.innerWidth}
      totalSlides={(list || []).length}
      orientation="vertical"
      dragEnabled={false}
    >
      <TabPanel sx={classes.root}>
        <Slider
          preventVerticalScrollOnTouch={false}
          moveThreshold={0.25}
          trayProps={{
            onTouchStart: (e) => {
              swipeStartY = e.touches[0].clientY;
            },
            onTouchMove: (e) => {
              const calcY = swipeStartY - e.touches[0].clientY;

              if (Math.abs(calcY) >= 30 && !isSwipe) {
                setIsSwipe(true);
              }
            },
            onTransitionEnd: (e) => {
              swipeStartY = null;
              setIsSwipe(false);
            },
          }}
        >
          {list.map((item, i) => {
            return (
              <ShortPlayer
                key={`ShortPlayer-${i}`}
                index={i}
                isActive={isActive}
                isSwipe={isSwipe}
                {...item}
              />
            );
          })}
        </Slider>
      </TabPanel>
    </CarouselProvider>
  );
}

VideoListPanel.propTypes = {};

export default VideoListPanel;
