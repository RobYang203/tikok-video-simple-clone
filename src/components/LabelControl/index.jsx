import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { string, func, object } from "prop-types";

const styles = {
  root: {
    textAlign: "left",
    w: "100%",
  },
  title: {
    mb: "10px",
  },
};

function LabelControl({ title, sx, render }) {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Text sx={styles.title} textStyle="caption2">
        {title}
      </Text>
      {render()}
    </Box>
  );
}

LabelControl.defaultProps = {
  sx: {},
};

LabelControl.propTypes = {
  title: string.isRequired,
  render: func.isRequired,
  sx: object,
};

export default LabelControl;
