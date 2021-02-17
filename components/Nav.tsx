import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Container,
} from '@chakra-ui/react';
import Link from 'components/Link';
import MobileMenu from './MobileMenu';

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
      <Container maxW="1100px">
        <Flex py="8px" alignItems="center">
          <Heading
            as="h5"
            size="lg"
            color="brand.500"
            textTransform="uppercase"
          >
            <Link href="/">VULPIX</Link>
          </Heading>
          <Spacer />
          <MobileMenu />
          <Box display={{ base: 'none', md: 'block' }}>
            <HStack spacing="48px">
              <Link href="/browse" color="gray.600">
                Browse
              </Link>
              <Link href="/request" color="gray.600">
                Request Testing
              </Link>
              <Link href="/stats" color="gray.600">
                Statistics
              </Link>
              <Link href="/about" color="gray.600">
                About
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
