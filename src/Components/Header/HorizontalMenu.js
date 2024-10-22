import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function HorizontalMenu() {
  return (
    <>
      <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        <Link to="/">
          <Button variant="nav">
            <FontAwesomeIcon icon={faHouse} />
          </Button>
        </Link>
      </HStack>
    </>
  );
}

export default HorizontalMenu;
