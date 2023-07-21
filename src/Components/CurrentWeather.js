import React from "react";
import { Box, Center, Stack, Text, Flex, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function CurrentWeather({
  currentTemp,
  currentIcon,
  currentCondition,
  currentRain,
  currentWind,
  currentHumidity,
}) {
  const iconURL = (p) => {
    const url = `https:${p}`;

    return (
      <>
        <Image
          src={url}
          boxSize={{ base: "16vh", md: "18vh", lg: "20vh" }}
          objectFit="cover"
        />
      </>
    );
  };
  return (
    <Stack>
      <Flex justify="center">
        <Center
          h={{ base: "18vh", md: "20vh", lg: "34vh" }}
          w={{ base: "18vh", md: "25vh", lg: "30vh" }}
        >
          <Text fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}>
            {currentTemp}
          </Text>
          <Text fontSize={{ base: "20px", md: "30px", lg: "40px" }}>°C</Text>
        </Center>
        <Center
          h={{ base: "23vh", md: "26vh", lg: "36vh" }}
          w={{ base: "13vh", md: "16vh", lg: "20vh" }}
        >
          <Box>
            <Box mb={0}>{iconURL(currentIcon)}</Box>

            <Box>
              <Text
                align={"center"}
                fontSize={{ base: "18px", md: "20px", lg: "22px" }}
              >
                {currentCondition}
              </Text>
            </Box>
          </Box>
        </Center>
      </Flex>
      <Flex justify="center">
        <Stack
          alignItems="center"
          h={{ base: "18vh", md: "20vh", lg: "20vh" }}
          w={{ base: "40vh", md: "50vh", lg: "60vh" }}
        >
          <Flex>
            <Box mr="1">
              <FontAwesomeIcon icon={faTemperatureHalf} />
            </Box>
            <Box>
              <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
                Perception: {currentRain}mm
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box mr="1">
              <FontAwesomeIcon icon={faWind} />
            </Box>
            <Box>
              <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
                Wind: {currentWind}kph
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box mr="1">
              <FontAwesomeIcon icon={faDroplet} />
            </Box>
            <Box>
              <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
                Humidity: {currentHumidity}%
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default CurrentWeather;
