import React from "react";
import { useState } from "react";
import { Input, Button, Flex, Text, Box } from "@chakra-ui/react";

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  const [error, setError] = useState("");

  return (
    <Box>
      <Flex>
        <Box>
          <Input
            w={{ base: "30vh", md: "60vh" }}
            type="text"
            placeholder="Enter City name"
            size={{ base: "sm", md: "md" }}
            value={innerSearch}
            onChange={(e) => {
              if (!/^[A-Za-z]+$/.test(e.target.value)) {
                setError("Error: Accept only letters.");
              } else {
                setError(null);
              }
              setInnerSearch(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            isDisabled={!/^[A-Za-z]+$/.test(innerSearch)}
            size={{ base: "sm", md: "md" }}
            colorScheme="cyan"
            variant="solid"
            onClick={() => props.onSubmit(innerSearch)}
          >
            Search
          </Button>
        </Box>
      </Flex>
      <Box>{error != null ? <Text color={"red"}>{error}</Text> : null}</Box>
    </Box>
  );
}
