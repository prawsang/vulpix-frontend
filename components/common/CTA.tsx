import { Box, Text, BoxProps, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Button from './Button'
import Link from './Link'

const CTA = (props: BoxProps) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" {...props}>
      <Box
        flex="1"
        pr={{ base: 0, md: 8 }}
        width={{ base: '60%', md: '100%' }}
        mx="auto"
        pb={{ base: '32px', md: 0 }}
      >
        <Image src="/images/cta-img.svg" width={0} height={0} layout="responsive" />
      </Box>
      <Box
        pl={{ base: 0, md: 8 }}
        flex="1"
        textAlign={{ base: 'center', md: 'left' }}
        maxWidth="600px"
        mx="auto"
      >
        <Text color="gray.500" mb="8px" display="block">
          Can&apos;t find your application?
        </Text>
        <Text color="gray.700" mb="32px">
          You can request the application to be tested. This takes only a few minutes.
        </Text>
        <Link href="/request">
          <Button mx="auto">Request Testing</Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default CTA
