import { Text, Heading, Flex, Box, Spacer } from '@chakra-ui/react'
import WideContainer from 'components/common/Container'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box borderTopStyle="solid" borderTopColor="gray.300" borderTopWidth="2px">
      <WideContainer>
        <Flex py="16px" alignItems="center">
          <Link href="/">
            <Heading size="md" color="primary.500" textTransform="uppercase">
              VULPIX
            </Heading>
          </Link>
          <Spacer />
          <Box maxWidth="270px" textAlign="right">
            <Text color="primary.500" fontSize="12px" textDecoration="underline">
              <a href="https://www.cp.eng.chula.ac.th/en/" target="_blank" rel="noreferrer">
                Department of Computer Engineering, Chulalongkorn University
              </a>
            </Text>
          </Box>
        </Flex>
      </WideContainer>
    </Box>
  )
}

export default Footer
