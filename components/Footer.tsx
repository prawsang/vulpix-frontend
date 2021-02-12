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
          <Box maxWidth="270px" textAlign="right">
            <Text color="white" fontSize="12px" textDecoration="underline">
              <a
                href="https://www.cp.eng.chula.ac.th/en/"
                target="_blank"
                rel="noopener"
              >
                Department of Computer Engineering, Chulalongkorn University
              </a>
            </Text>
          </Box>
        </Flex>
      </WideContainer>
    </Box>
  );
};

export default Footer;
