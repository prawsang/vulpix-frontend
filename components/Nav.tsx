import React from "react";
import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import Link from "components/Link";

const Nav = () => {
  return (
    <Box bg="white">
      <Flex>
        <Heading as="h3" color="brand.500" textTransform="uppercase">
          VULPIX
        </Heading>
        <Spacer />
        <HStack spacing="24px">
          <Link href="/" color="brand.500">
            Browse
          </Link>
          <Link href="/" color="brand.500">
            Request Testing
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
