import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { string } from "prop-types";
import useInjectionThemeToStyles from "hooks/useInjectionThemeToStyles";

const titleStyle = {
  mb: 17,
};

const makeStyles = ({ colors }) => ({
  subTitleUnderLine: {
    border: `1.5px solid ${colors.primary[500]}`,
    h: 0,
    w: 30,
  },
});

function BulkHeader({ name }) {
  const styles = useInjectionThemeToStyles(makeStyles);

  return (
    <Box>
      <Text sx={titleStyle} textStyle="title">
        Bulk Message System
      </Text>
      <VStack>
        <Text textStyle="body1">{name}</Text>
        <Box sx={styles.subTitleUnderLine} />
      </VStack>
    </Box>
  );
}

BulkHeader.propTypes = {
  name: string.isRequired,
};

export default BulkHeader;
