import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const classes = {
  root: {
    right: 0,
    left: 0,
    bottom: 0,
    h: 50,
    bg: '#000000',
    color: '#fff',
    justifyContent: 'space-around',
    position: 'fixed',
  },
  button: {
    flexShrink: 1,
    flexBasis: 1,
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: '50px'
  },
};

function NavigationBar() {
  return (
    <Flex sx={classes.root}>
      <Text sx={classes.button} to="/" as={Link}>
        Home
      </Text>
      <Text sx={classes.button} to="/discover" as={Link}>
        Discover
      </Text>
    </Flex>
  );
}

export default NavigationBar;
