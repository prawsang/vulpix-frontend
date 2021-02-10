import { Text, Heading, Flex, Box, Container } from "@chakra-ui/react";
import WideContainer from "components/Container";
import Divider from "components/Divider";
import DefaultLayout from "layouts/default";
import Input from "components/Input";
import Button from "components/Button";
import Footer from "components/Footer";

const Home = () => {
  return (
    <DefaultLayout pageName="Home">
      <WideContainer>
        <Flex height="80vh" pt="20vh">
          <Box flex="1" pr={{ md: 8, sm: 0 }}>
            <Heading>
              Are your favorite Android apps leaking your personal data?
            </Heading>
            <Divider my="24px" />
          </Box>
          <Box flex="1" pl={{ md: 8, sm: 0 }}>
            <Heading as="h3" size="md" color="accent.500" mb="32px">
              Enter the app’s google play store URL below to search for privacy
              testing results.
            </Heading>
            <Input placeholder="Google Play Store URL" />
            <Box mt="32px" mb="48px">
              <Text mb="8px" color="gray.600">
                Can't find you application?
              </Text>
              <Text mb="16px" color="gray.700" mb="32px">
                You can request the application to be tested. This takes only a
                few minutes.
              </Text>
              <Button>Request Testing</Button>
            </Box>
          </Box>
        </Flex>
      </WideContainer>
      <Container>
        <Box paddingY="64px" mb="32px">
          <Divider mx="auto" mb="48px" />
          <Box textAlign="center">
            <Heading size="lg" color="accent.500" mb="48px">
              About VULPIX
            </Heading>
            <Text color="gray.700" textAlign="left" mb="48px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text fontWeight="600" mb="32px">
              Want to learn more about our testing methods?
            </Text>
            <Button m="auto">About Testing</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
