import { Box, Button, Text, VStack } from "@chakra-ui/react";
import BulkHeader from "components/BulkHeader";
import React from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <Box>
      <BulkHeader name="Dashboard" />

      <Text as="div" textStyle="subTitle1" marginTop="55px" marginBottom="55px">
        Get started to send out message
      </Text>
      <VStack>
        <Button as={Link} colorScheme="cyan" to="/information/create">
          <Text color='primary' textStyle="caption2">Start</Text>
        </Button>
        <Button as={Link} colorScheme="primary" variant="outline" to="/history">
          <Text textStyle="caption2">Message History</Text>
        </Button>
      </VStack>
    </Box>
  );
}

export default DashboardPage;
