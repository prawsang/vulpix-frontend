import { useState } from 'react'
import DefaultLayout from 'layouts/default'
import qs from 'qs'
import {
  Box,
  Heading,
  // InputRightElement,
  // Icon,
  // Flex,
  Text,
  // InputGroup,
  // Spacer,
} from '@chakra-ui/react'
// import { MdSearch } from 'react-icons/md'
// import Select from 'components/common/Select'
import Container from 'components/common/Container'
import Input from 'components/common/Input'
// import Link from 'components/common/Link'
import Button from 'components/common/Button'
import { sendTestingRequest } from 'api/testing'

const Request = () => {
  const [appUrl, setAppUrl] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const onAppUrlChange = (e) => {
    setAppUrl(e.target.value)
  }

  const onRequestClick = async () => {
    const url = new URL(appUrl)
    const q = qs.parse(url.search.substring(1))
    const res = await sendTestingRequest(q['id'])
    if (res && res.data) {
      setSent(true)
      setError(false)
    } else {
      setError(true)
      setSent(false)
    }
  }

  return (
    <DefaultLayout pageName="Request Testing">
      <Container mb="64px" maxWidth="800px">
        <Box textAlign="center">
          <Heading color="accent.500" as="h1" size="md" textTransform="uppercase" mt="32">
            Request Testing
          </Heading>
          <Box mt="32px">
            <Input
              value={appUrl}
              onChange={onAppUrlChange}
              placeholder="Enter app’s URL on Play Store (e.g. https://play.google.com/store/apps/details?id=…)"
            />
          </Box>
          {/* <Heading as="h3" size="sm" textTransform="uppercase">
            Details
          </Heading>
          <Flex
            my="32px"
            textAlign={{ base: 'center', md: 'left' }}
            alignItems="flex-end"
            display={{ base: 'block', md: 'flex' }}
          >
            <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
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
              <Text textDecoration="underline">
                <Link href="/about" color="primary.500">
                  Learn more about testing methods
                </Link>
              </Text>
            </Box>
          </Flex> */}
          <Box textAlign="center" mt="64px">
            <Button onClick={onRequestClick}>Request Testing</Button>
          </Box>
          {sent && (
            <Box textAlign="center" mt="32px" maxWidth="400px" marginX="auto">
              <Text color="gray.600">
                The testing request has been sent. Please wait for the response. Thank you.
              </Text>
            </Box>
          )}
          {error && (
            <Box textAlign="center" mt="32px" maxWidth="400px" marginX="auto">
              <Text color="error.500">
                There is an error in your request. Please try again later.
              </Text>
            </Box>
          )}
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Request
