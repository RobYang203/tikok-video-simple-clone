import React, { useState } from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import propTypes from 'prop-types';

const classes = {
  root: {
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    zIndex: 500,
  },
  filledTrackFocus: {
    height: '8px',
  },
  thumb: {
    width: '8px',
    height: '8px',
  },
};
const NOT_FOCUS_STYLE = {
  filledTrack: null,
  thumb: classes.thumb,
  colorScheme: 'blackAlpha',
};

function ProgressBar({ totalSeconds, currentSeconds, onSlide }) {
  const [focusStyle, setFocusStyle] = useState(NOT_FOCUS_STYLE);

  return (
    <Box
      sx={classes.root}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <Slider
        id="slider"
        defaultValue={0}
        value={currentSeconds}
        min={0}
        max={totalSeconds}
        colorScheme={focusStyle.colorScheme}
        onChangeStart={(e) => {
          setFocusStyle({
            colorScheme: 'red',
            filledTrack: classes.filledTrackFocus,
            thumb: null,
          });
        }}
        onChangeEnd={(e) => {
          setFocusStyle(NOT_FOCUS_STYLE);
        }}
        onChange={(value) => onSlide(value)}
      >
        <SliderTrack>
          <SliderFilledTrack sx={focusStyle.filledTrack} />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="red.500"
          color="white"
          placement="top"
          isOpen={!focusStyle.thumb}
          label={`${currentSeconds}s`}
        >
          <SliderThumb sx={focusStyle.thumb} />
        </Tooltip>
      </Slider>
    </Box>
  );
}

ProgressBar.defaultProps = {
  currentSeconds: 0,
  totalSeconds: 0,
};

ProgressBar.propTypes = {
  onSlide: propTypes.func.isRequired,
  currentSeconds: propTypes.number,
  totalSeconds: propTypes.number,
};

export default ProgressBar;
