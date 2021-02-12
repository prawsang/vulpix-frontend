import DefaultLayout from "layouts/default";
import {
  Box,
  Heading,
  InputRightElement,
  Icon,
  Flex,
  Text,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import Select from "components/Select";
import Container from "components/Container";
import Input from "components/Input";
import Link from "components/Link";

const Request = () => {
  return (
    <DefaultLayout pageName="Request Testing">
      <Container mb="64px" maxWidth="800px">
        <Box textAlign="center">
          <Heading as="h1" size="md" textTransform="uppercase" mt="32">
            Request Testing
          </Heading>
          <InputGroup my="32px">
            <Input placeholder="Enter app’s URL on Play Store (e.g. https://play.google.com/store/apps/details?id=…)" />
            <InputRightElement>
              <Icon as={MdSearch} boxSize={6} />
            </InputRightElement>
          </InputGroup>
          <Heading as="h3" size="sm" textTransform="uppercase">
            Details
          </Heading>
          <Flex
            my="32px"
            textAlign={{ base: "center", md: "left" }}
            alignItems="flex-end"
            display={{ base: "block", md: "flex" }}
          >
            <Flex justifyContent={{ base: "center", md: "flex-start" }}>
              <Box mr="16px">
                <Text color="gray.500" mb="8px">
                  Testing Method
                </Text>
                <Select>
                  <option>Static Testing</option>
                </Select>
              </Box>
              <Box>
                <Text color="gray.500" mb="8px">
                  Android Version
                </Text>
                <Select>
                  <option>7.0.1</option>
                </Select>
              </Box>
            </Flex>
            <Spacer />
            <Box pt="32px">
              <Link
                href="/"
                textDecoration="underline"
                color="brand.500"
                display="block"
              >
                Learn more about testing methods
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default Request;
