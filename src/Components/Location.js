import React, { useState } from "react";
import { Box, Text, Flex, Center, Tooltip, Button } from "@chakra-ui/react";
function Location({ city_name, country_name, local_time }) {
  return (
    <Box>
      <Flex>
        <Box>
          <Text
            align="center"
            ml={5}
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
          >
            {city_name}, {country_name}
          </Text>
        </Box>
        <Center ml={4}></Center>
      </Flex>

      <Text align="center" fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
        {local_time}
      </Text>
    </Box>
  );
}

export default Location;
