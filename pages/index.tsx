import { Text, Heading, Flex, Box, VStack } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import Divider from 'components/common/Divider'
import Button from 'components/common/Button'
import Select from 'components/common/Select'
import HomeTable from 'components/home/Table'
import { useState } from 'react'
import { StatTypes } from 'types/stats'
import SearchBar from 'components/common/SearchBar'

const statsMode = [
  {
    name: StatTypes.mostSearched,
    label: 'Most Searched on Vulpix',
  },
  {
    name: StatTypes.mostLeakCat,
    label: 'Most Leaking Application Categories',
  },
]

const mockData = [
  {
    id: '0',
    applicationName: 'Application 1',
    applicationLink: '/browse/app/application-1',
    categoryName: 'Social Networking',
    categoryLink: '/browse/category/social-networking',
    vulpixScore: 20,
  },
  {
    id: '1',
    applicationName: 'Application 2',
    applicationLink: '/browse/app/application-2',
    categoryName: 'Games',
    categoryLink: '/browse/category/games',
    vulpixScore: 50,
  },
  {
    id: '2',
    applicationName: 'Application 3',
    applicationLink: '/browse/app/application-3',
    categoryName: 'Lifestyle',
    categoryLink: '/browse/category/lifestyle',
    vulpixScore: 90,
  },
]

const Home = () => {
  const [selectedStats, setSelectedStats] = useState(StatTypes.mostSearched)
  const onStatModeChange = (e) => {
    setSelectedStats(e.target.value)
  }

  return (
    <DefaultLayout pageName="Home">
      <Container mb="64px">
        <Flex
          minHeight="90vh"
          pt="20vh"
          flexDirection={{
            md: 'row',
            base: 'column',
          }}
        >
          <Box flex="1" pr={{ md: 8, base: 0 }}>
            <Heading>Are your favorite Android apps leaking your personal data?</Heading>
            <Divider mt="24px" mb="36px" />
          </Box>
          <Box flex="1" pl={{ md: 8, base: 0 }}>
            <Heading as="h3" size="md" color="accent.500" mb="32px">
              Enter the app’s name below to search on our site for privacy testing results.
            </Heading>
            <Box position="relative">
              <SearchBar />
            </Box>
            <Box
              mt="32px"
              mb="48px"
              textAlign={{
                md: 'left',
                base: 'center',
              }}
            >
              <Text mb="8px" color="gray.600">
                Can&apos;t find you application?
              </Text>
              <Text color="gray.700" mb="32px">
                You can request the application to be tested. This takes only a few minutes.
              </Text>
              <Button>Request Testing</Button>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth="800px">
        <VStack spacing="32px">
          <Heading
            as="h3"
            size="md"
            color="accent.500"
            textTransform="uppercase"
            textAlign="center"
          >
            Statistics
          </Heading>
          <Box textAlign="center" maxWidth="100%">
            <Select
              placeholder="Select Option"
              variant="filled"
              width="500px"
              maxWidth="100%"
              value={selectedStats}
              onChange={onStatModeChange}
            >
              {statsMode.map((e) => (
                <option value={e.name} key={e.name}>
                  {e.label}
                </option>
              ))}
            </Select>
          </Box>
          <HomeTable data={mockData} />
        </VStack>
        <Box textAlign="center">
          <Button my="64px">See More</Button>
        </Box>
      </Container>
      <Container maxWidth="600px">
        <Box paddingY="64px" mb="32px">
          <Divider mx="auto" mb="48px" />
          <Box textAlign="center">
            <Heading size="lg" color="accent.500" mb="48px">
              About VULPIX
            </Heading>
            <Text color="gray.700" textAlign="left" mb="48px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
            <Text fontWeight="600" mb="32px">
              Want to learn more about our testing methods?
            </Text>
            <Button m="auto">About Testing</Button>
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Home
