import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Flex,
} from "@chakra-ui/react";

import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// const favourite = "Favourite";

function VerticalMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Link ref={btnRef} onClick={onOpen}>
        <HamburgerIcon w={6} h={6} color="black" />
      </Link>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody mt="50px">
            <VStack alignItems="left">
              <Link to="/">
                <Button variant="nav">
                  <FontAwesomeIcon icon={faHouse} />
                </Button>
              </Link>

              {/* <Link to="/favourite">
                <Button>{favourite}</Button>
              </Link> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default VerticalMenu;
