import React from "react";
import {
  Card,
  Box,
  Text,
  Center,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  CardBody,
} from "@chakra-ui/react";

function Daily({ dailyData }) {
  return (
    <Box mt={4}>
      <Center>
        <Text align="left" fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}>
          3-days Forecast
        </Text>
      </Center>
      <Center>
        <Card
          justify="space-evenly"
          h={{ base: "35vh", sm: "40vh", md: "25vh", lg: "25vh" }}
          w={{ base: "43vh", sm: "80vh", md: "100vh", lg: "120vh" }}
        >
          <CardBody>
            <Center>
              <HStack
                h={{ base: "60vh", md: "25vh", lg: "25vh" }}
                w={{ base: "80vh", md: "80vh", lg: "100vh" }}
                justify="space-evenly"
                display={{ base: "none", md: "flex" }}
                alignItems="center"
              >
                {dailyData.map((item, index) => (
                  <Box key={index} textAlign="center">
                    <Text>{item.day_title}</Text>
                    <Text>{item.day_icon}</Text>
                    <Text>{item.day_temp_c}°C</Text>
                    {/* <Text>{item.day_rain}%</Text> */}
                  </Box>
                ))}
              </HStack>
              <TableContainer
                display={{ base: "flex", md: "none", lg: "none" }}
              >
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Day</Th>
                      <Th>Condition</Th>
                      <Th>Temp</Th>
                      <Th>Rain</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dailyData.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.day_title}</Td>
                        <Td>{item.day_icon}</Td>
                        <Td>{item.day_temp_c}°C</Td>
                        <Td>{item.day_rain}%</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Center>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}

export default Daily;
