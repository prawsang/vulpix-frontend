import { useState } from 'react'
import { isEmpty } from 'lodash'
import DefaultLayout from 'layouts/default'
import qs from 'qs'
import { Box, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react'
import Container from 'components/common/Container'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import { sendTestingRequest } from 'api/testing'
import ColorBackground from 'components/common/ColorBackground'
import Image from 'next/image'
import { emailRegex, urlRegex } from 'utils/regex'

const addhttp = (url) => {
  if (!/^(?:f|ht)tps?:\/\//.test(url)) {
    url = `http://${url}`
  }
  return url
}

const Request = () => {
  const [appUrl, setAppUrl] = useState('')
  const [error, setError] = useState(false)
  const [urlError, setUrlError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [email, setEmail] = useState('')

  const [step, setStep] = useState(0)

  const onAppUrlChange = (e) => {
    setAppUrl(e.target.value)
  }

  const onNext = () => {
    if (isEmpty(appUrl) || !appUrl.match(urlRegex)) {
      setUrlError(true)
    } else {
      setStep(step + 1)
      setUrlError(false)
    }
  }
  const onPrev = () => {
    setStep(step - 1)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onRequestClick = async () => {
    if (!isEmpty(email) && !email.match(emailRegex)) {
      setEmailError(true)
      setError(false)
    } else {
      setEmailError(false)
      const url = new URL(addhttp(appUrl))
      const q = qs.parse(url.search.substring(1))
      const res = await sendTestingRequest(q['id'], email)
      if (res && res.data) {
        setStep(step + 1)
        setError(false)
      } else {
        setError(true)
      }
    }
  }

  return (
    <DefaultLayout pageName="Request Testing" logoColor={{ base: 'gray.700', lg: 'primary.500' }}>
      <ColorBackground image="/images/request-bg.svg" side="right" width="60%" />
      <Container mb="64px">
        <Flex
          pt="64px"
          flexDirection={{
            md: 'row',
            base: 'column-reverse',
          }}
        >
          <Box flex="50%">
            <Box pt="64px" textAlign={{ base: 'center', md: 'left' }} maxWidth="800px" mx="auto">
              <Heading size="lg" color="accent.500" textTransform="uppercase" mb="16px">
                Request Testing
              </Heading>
              <Heading
                size="md"
                color={{ base: 'gray.400', md: 'gray.600', lg: 'gray.400' }}
                fontWeight="normal"
                mb="32px"
              >
                You can request the application to be tested on our servers. This takes only a few
                minutes.
              </Heading>
              {step === 0 && (
                <>
                  <Heading size="sm" fontWeight="normal" color="gray.700" mb="16px">
                    Play Store URL
                  </Heading>
                  <Input
                    value={appUrl}
                    onChange={onAppUrlChange}
                    placeholder="Enter app’s URL on Play Store (e.g. https://play.google.com/store/apps/details?id=…)"
                    width={{ base: '100%', lg: '200%' }}
                    zIndex={500}
                  />
                  <Box mt="48px">
                    <Button onClick={onNext}>Next</Button>
                  </Box>
                </>
              )}
              {step === 1 && (
                <>
                  <Heading size="sm" fontWeight="normal" color="gray.700" mb="16px">
                    Your Email (Optional)
                  </Heading>
                  <Input
                    value={email}
                    onChange={onEmailChange}
                    placeholder="Your email"
                    width="100%"
                    zIndex={500}
                  />
                  <Box mt="48px">
                    <ButtonGroup>
                      <Button variant="secondary" onClick={onPrev}>
                        Back
                      </Button>
                      <Button onClick={onRequestClick}>Request Testing</Button>
                    </ButtonGroup>
                  </Box>
                </>
              )}
              {step === 2 && (
                <>
                  <Heading size="sm" color="gray.700" mb="16px">
                    The testing request has been sent.
                  </Heading>
                  <Text color="gray.600">
                    The testing request has been sent. Please wait for the response. Thank you.
                  </Text>
                </>
              )}
              {error && (
                <Box mt="16px">
                  <Text color="error.500">
                    There is an error in your request. Please try again later.
                  </Text>
                </Box>
              )}
              {urlError && (
                <Box mt="16px">
                  <Text color="error.500">Please enter a valid URL.</Text>
                </Box>
              )}
              {emailError && (
                <Box mt="16px">
                  <Text color="error.500">Please enter a valid email address.</Text>
                </Box>
              )}
            </Box>
          </Box>
          <Box
            flex="50%"
            marginLeft="auto"
            marginRight="auto"
            width={{ md: '100%', base: '60%' }}
            pl={{ md: 8, base: 0 }}
          >
            <Image
              src="/images/request-img.svg"
              alt=""
              layout="responsive"
              width={1000}
              height={1000}
            />
          </Box>
        </Flex>
      </Container>
    </DefaultLayout>
  )
}

export default Request
