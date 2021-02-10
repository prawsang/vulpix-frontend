import { useState } from "react";
import Head from "components/Head";
import {
  Container,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Input,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head pageName="Home" />
      <Container>
        <Flex>
          <Box flex="1">
            <Heading>
              Are your favorite Android apps leaking your personal data?
            </Heading>
          </Box>
          <Box flex="1">
            <Text color="brand.500">Hello world</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
