import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import Link from 'components/common/Link'
import Container from 'components/common/Container'
import MobileMenu from './MobileMenu'

const Nav = ({
  logoColor = 'primary.500',
  menuColor = 'gray.500',
}: {
  logoColor?: any
  menuColor?: any
}) => {
  return (
    <Box top="0" width="100vw" zIndex="999">
      <Container maxW="1100px">
        <Flex py="8px" alignItems="center">
          <Heading as="h5" size="lg" color={logoColor} textTransform="uppercase">
            <Link href="/">VULPIX II</Link>
          </Heading>
          <Spacer />
          <MobileMenu iconColor={menuColor} />
          <Box display={{ base: 'none', md: 'block' }}>
            <HStack spacing="48px">
              <Link href="/browse" color={{ base: 'gray.500', md: menuColor }}>
                Browse
              </Link>
              <Link href="/request" color={{ base: 'gray.500', md: menuColor }}>
                Request Testing
              </Link>
              <Link href="/stats" color={{ base: 'gray.500', md: menuColor }}>
                Statistics
              </Link>
              <Link href="/about" color={{ base: 'gray.500', md: menuColor }}>
                About
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
