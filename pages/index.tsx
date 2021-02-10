import { Text, Heading, Flex, Box } from "@chakra-ui/react";
import MyContainer from "components/Container";
import DefaultLayout from "layouts/default";

const Home = () => {
  return (
    <DefaultLayout pageName="Home">
      <MyContainer>
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
      </MyContainer>
    </DefaultLayout>
  );
};

export default Home;
