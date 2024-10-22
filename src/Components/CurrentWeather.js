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
          boxSize={{ base: "12vh", md: "15vh", lg: "15vh" }}
          objectFit="cover"
        />
      </>
    );
  };
  return (
    <Stack>
      <Flex justify="center">
        <Center
          h={{ base: "18vh", md: "20vh", lg: "28vh" }}
          w={{ base: "20vh", md: "20vh", lg: "28vh" }}
        >
          <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
            {currentTemp}
          </Text>
          <Text fontSize={{ base: "18px", md: "25px", lg: "30px" }}>°C</Text>
        </Center>
        <Center
          h={{ base: "23vh", md: "26vh", lg: "30vh" }}
          w={{ base: "8vh", md: "8vh", lg: "10vh" }}
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
          h={{ base: "18vh", md: "20vh", lg: "30vh" }}
          w={{ base: "30vh", md: "25vh", lg: "30vh" }}
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
