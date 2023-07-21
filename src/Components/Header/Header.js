import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Image, Flex, chakra, Box } from "@chakra-ui/react";
import Footer from "../Footer";
import VerticalMenu from "./VerticalMenu";
import HorizontalMenu from "./HorizontalMenu";
import logo from "../../Asset/logo.png";
function Header() {
  return (
    <Box>
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <Link to="/">
            <Image src={logo} alt="logo" boxSize="50px" />
          </Link>

          <HorizontalMenu />
          <VerticalMenu />
        </Flex>
      </chakra.header>
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Header;
