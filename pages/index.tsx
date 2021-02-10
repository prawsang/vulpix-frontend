import { Text, Heading, Flex, Box } from "@chakra-ui/react";
import DefaultLayout from "layouts/default";

const Home = () => {
  return (
    <DefaultLayout pageName="Home">
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
    </DefaultLayout>
  );
};

export default Home;
