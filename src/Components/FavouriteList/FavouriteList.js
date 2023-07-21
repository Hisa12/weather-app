import React from "react";
import dummyFav from "./dummyFav";
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Card,
  Center,
  Link,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
function FavouriteList() {
  return (
    <>
      <Center>
        <Card w={{ base: "70vh", sm: "88vh", md: "120vh", lg: "130vh" }}>
          <TableContainer>
            <Table size={{ base: "sm", sm: "md", md: "lg", lg: "lg" }}>
              <Thead>
                <Tr>
                  <Th>Location</Th>
                  <Th>Condition</Th>
                  <Th>Min</Th>
                  <Th>Max</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dummyFav.map((item) => (
                  <Tr key={item.key}>
                    <Td fontWeight="bold">
                      {item.city},{item.country}
                    </Td>
                    <Td>{item.icon}</Td>
                    <Td>{item.minTemp}</Td>
                    <Td>{item.maxTemp}</Td>
                    <Td>
                      <Link>
                        <CloseIcon
                          w={{ base: "2", sm: "2.5", md: "3", lg: "3" }}
                          h={{ base: "2", sm: "2.5", md: "3", lg: "3" }}
                        />
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </Center>
    </>
  );
}

export default FavouriteList;
