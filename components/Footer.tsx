import { Text, Heading, Flex, Box, Spacer } from "@chakra-ui/react";
import WideContainer from "components/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bg="accent.500">
      <WideContainer>
        <Flex py="16px" alignItems="center">
          <Link href="/">
            <Heading size="md" color="white" textTransform="uppercase">
              VULPIX
            </Heading>
          </Link>
          <Spacer />
          <Link href="/">
            <Box maxWidth="270px" textAlign={{ sm: "center", md: "right" }}>
              <Text color="white" fontSize="12px" textDecoration="underline">
                Department of Computer Engineering, Chulalongkorn University
              </Text>
            </Box>
          </Link>
        </Flex>
      </WideContainer>
    </Box>
  );
};

export default Footer;
