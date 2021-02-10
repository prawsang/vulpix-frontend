import React from "react";
import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import Link from "components/Link";
import MyContainer from "./Container";

const Nav = () => {
  return (
    <Box bg="white">
      <MyContainer>
        <Flex py="8px">
          <Heading
            as="h5"
            size="lg"
            color="brand.500"
            textTransform="uppercase"
          >
            VULPIX
          </Heading>
          <Spacer />
          <HStack spacing="48px">
            <Link href="/" color="gray.600">
              Browse
            </Link>
            <Link href="/" color="gray.600">
              Request Testing
            </Link>
            <Link href="/" color="gray.600">
              Stats
            </Link>
            <Link href="/" color="gray.600">
              About Testing
            </Link>
          </HStack>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Nav;
