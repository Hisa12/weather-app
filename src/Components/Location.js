import React, { useState } from "react";
import { Box, Text, Flex, Center, Tooltip, Button } from "@chakra-ui/react";
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
function Location({ city_name, country_name, local_time }) {
  // const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Box>
      <Flex>
        <Box>
          <Text
            align="center"
            ml={5}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            {city_name}, {country_name}
          </Text>
        </Box>
        <Center ml={4}>
          {/* <Tooltip hasArrow label="Add to Favourite" bg="black">
            <Button
              size={{ base: "sm", md: "sm", lg: "md" }}
              fontSize={{ base: "17px", md: "20px", lg: "25px" }}
              onClick={() => setIsFavourite(!isFavourite)}
            >
              {isFavourite ? <HeartFilled /> : <HeartOutlined />}
            </Button>
          </Tooltip> */}
        </Center>
      </Flex>

      <Text align="center" fontSize={{ base: "20px", md: "23px", lg: "28px" }}>
        {local_time}
      </Text>
    </Box>
  );
}

export default Location;
