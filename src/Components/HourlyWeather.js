import React from "react";
import {
  Box,
  Center,
  Text,
  HStack,
  TableContainer,
  Tr,
  Td,
  Th,
  Tbody,
  Table,
  Thead,
} from "@chakra-ui/react";

function HourlyWeather(props) {
  const hourlyData = props.hourlyObj;

  return (
    <div>
      <Box>
        <Center>
          <HStack
            h={{ base: "10vh", md: "12vh", lg: "15vh" }}
            w={{ base: "100vh", md: "90vh", lg: "100vh" }}
            justify="space-evenly"
            display={{ base: "none", md: "flex" }}
          >
            {hourlyData.map((item, index) => (
              <Box key={index} textAlign="center">
                <Text>{item.hour_title} </Text>
                <Text>{item.hour_icon}</Text>
                <Text>{item.hour_temp_c}°C</Text>
              </Box>
            ))}
          </HStack>
          <TableContainer display={{ base: "flex", md: "none", lg: "none" }}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Time</Th>
                  <Th>Condition</Th>
                  <Th>Temp</Th>
                  <Th>Rain</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hourlyData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.hour_title}</Td>
                    <Td>{item.hour_icon}</Td>
                    <Td>{item.hour_temp_c}°C</Td>
                    <Td>{item.hour_rain}%</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Box>
    </div>
  );
}

export default HourlyWeather;
