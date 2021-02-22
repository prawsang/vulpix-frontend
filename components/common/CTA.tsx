import { Box, Text, BoxProps } from '@chakra-ui/react'
import Button from './Button'
import Link from './Link'

const CTA = (props: BoxProps) => {
  return (
    <Box textAlign="center" {...props} maxWidth="600px" mx="auto">
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
  )
}

export default CTA
