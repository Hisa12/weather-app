import { Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="cyan.400"
      minHeight="15vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Stack spacing={2}>
        <Text fontSize="sm">Made by Hisa Sato</Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
