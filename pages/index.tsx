import { Text, Heading, Flex, Box, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import Divider from 'components/common/Divider'
import Button from 'components/common/Button'
import HomeTable from 'components/home/Table'
import SearchBar from 'components/common/SearchBar'
import ColorBackground from 'components/common/ColorBackground'
import { useEffect, useState } from 'react'
import { byScore } from 'api/stats'
import Link from 'next/link'

const Home = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await byScore(undefined, '5')
      if (res && res.data) {
        setData(res.data)
      }
    }
    fetchData()
  }, [])

  return (
    <DefaultLayout
      pageName="Home"
      menuColor="white"
      logoColor={{ base: 'white', lg: 'primary.500' }}
    >
      <ColorBackground image="/images/home-bg.svg" width="60%" side="right" />
      <Container mb="64px">
        <Flex
          pt="64px"
          flexDirection={{
            lg: 'row',
            base: 'column-reverse',
          }}
        >
          <Box flex="1" pr={{ lg: 8, base: 0 }}>
            <Box width={{ lg: '80%', base: '100%' }}>
              <Heading>Are your favorite Android apps leaking your personal data?</Heading>
              <Divider mt="24px" mb="36px" />
              <Heading as="h3" size="md" color="accent.500" mb="32px">
                Enter the app’s name below to search on our site for privacy testing results.
              </Heading>
            </Box>
            <Box position="relative">
              <SearchBar />
            </Box>
            <Box
              mt="32px"
              mb="48px"
              textAlign={{
                lg: 'left',
                base: 'center',
              }}
              width={{ lg: '80%', base: '100%' }}
            >
              <Text mb="8px" color="gray.600">
                Can&apos;t find you application?
              </Text>
              <Text color="gray.700" mb="32px">
                You can request the application to be tested. This takes only a few minutes.
              </Text>
              <Link href="/request">
                <Button>Request Testing</Button>
              </Link>
            </Box>
          </Box>
          <Box flex="1" width="100%" pl={{ lg: 8, base: 0 }}>
            <Image
              src="/images/home-img.svg"
              alt=""
              layout="responsive"
              width={1000}
              height={1000}
            />
          </Box>
        </Flex>
      </Container>
      <Container maxWidth="900px">
        <VStack spacing="32px">
          <Heading as="h3" size="sm" color="gray.500" textTransform="uppercase" textAlign="center">
            Statistics
          </Heading>
          <Heading size="lg" color="accent.500" textAlign="center" marginTop="16px !important">
            Most Leaking Applications on VULPIX
          </Heading>
          <HomeTable data={data} />
        </VStack>
        <Link href="/stats">
          <Box textAlign="center">
            <Button my="64px">See All Statistics</Button>
          </Box>
        </Link>
      </Container>
      <Container>
        <Box paddingY="64px" mb="32px">
          <Flex
            flexDirection={{
              md: 'row',
              base: 'column',
            }}
            alignItems="center"
          >
            <Box flex="1" pr={{ md: 16, base: 0 }} width={{ base: '70%', md: '100%' }}>
              <Image src="/images/about.svg" alt="" width={100} height={100} layout="responsive" />
            </Box>
            <Box
              flex="1"
              pl={{ md: 16, base: 0 }}
              my={6}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Heading size="lg" color="accent.500" mb="48px">
                About VULPIX
              </Heading>
              <Text color="gray.700" textAlign="left" mb="48px">
                VULPIX is an automated testing tool for Android applications to detect personal
                information leakage from using the applications. After testing, a score called
                VULPIX score is calculated to determine how safe the application is when it comes to
                keeping your personal information private. Currently, there are several testing
                methods related to VULPIX, and here we are using VULPIX II dynamic and static
                testing to ensure greater accuracy and convenience.
              </Text>
              <Text fontWeight="600" mb="32px">
                Want to learn more about our testing methods?
              </Text>
              <Link href="/about">
                <Button m="auto">About Testing</Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Home
