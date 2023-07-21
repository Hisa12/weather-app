import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";
function PageNotFound() {
  return (
    <Box h={{ base: "80vh", md: "80vh", lg: "80vh" }} spacing={3}>
      <Center>
        <Text>Page Not Found.</Text>
      </Center>
    </Box>
  );
}

export default PageNotFound;
