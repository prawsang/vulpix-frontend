import React from "react";
import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import Link from "components/Link";
import MyContainer from "./Container";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  return (
    <Box
      bg="white"
      position="fixed"
      top="0"
      width="100vw"
      zIndex="999"
      boxShadow="0 6px 16px rgba(0,0,0,0.1)"
    >
      <MyContainer>
        <Flex py="8px" alignItems="center">
          <Heading
            as="h5"
            size="lg"
            color="brand.500"
            textTransform="uppercase"
          >
            VULPIX
          </Heading>
          <Spacer />
          <MobileMenu />
          <Box display={{ base: "none", md: "block" }}>
            <HStack spacing="48px">
              <Link href="/browse" color="gray.600">
                Browse
              </Link>
              <Link href="/" color="gray.600">
                Request Testing
              </Link>
              <Link href="/" color="gray.600">
                Statistics
              </Link>
              <Link href="/" color="gray.600">
                About
              </Link>
            </HStack>
          </Box>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Nav;
