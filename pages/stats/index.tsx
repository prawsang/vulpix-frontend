import { Box, Flex, Heading } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CTA from 'components/common/CTA'
import ColorBackground from 'components/common/ColorBackground'
import Image from 'next/image'
import StatListItem from 'components/stats/StatsListItem'

const Statistics = () => {
  return (
    <DefaultLayout pageName="Statistics" logoColor="gray.700">
      <ColorBackground
        image="/images/stats-bg.svg"
        side="left"
        width="60%"
        top="translateY(-20%)"
      />
      <Container mb="32px">
        <Flex
          pt="64px"
          flexDirection={{
            md: 'row',
            base: 'column',
          }}
        >
          <Box flex="50%" marginLeft="auto" width="60%" marginRight="auto" pr={{ md: 8, base: 0 }}>
            <Image
              src="/images/stats-img.svg"
              alt=""
              layout="responsive"
              width={1000}
              height={1000}
            />
          </Box>
          <Box flex="50%" pl={{ md: 8, base: 0 }}>
            <Box pt="64px" textAlign={{ base: 'center', md: 'right' }} maxWidth="800px" mx="auto">
              <Heading size="lg" color="accent.500" textTransform="uppercase" mb="16px">
                Statistics
              </Heading>
              <Heading
                size="md"
                color="gray.500"
                fontWeight="normal"
                mb="64px"
                maxWidth="400px"
                ml="auto"
                mr={{ base: 'auto', md: 'initial' }}
              >
                Browse statistical data collected from our testing
              </Heading>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Container mb="64px">
        <Heading color="gray.500" textTransform="uppercase" size="sm" textAlign="center" mb="32px">
          Available Statistics
        </Heading>
        <StatListItem
          name="Most Leaked Information Criterion"
          link="/stats/by-criterion"
          mb="16px"
          width="100%"
        />
        <StatListItem
          name="100 Most Leaking Applications on VULPIX"
          link="/stats/by-score"
          mb="16px"
          width="100%"
        />
        <StatListItem
          name="100 Most Leaking Applications by Category"
          link="/stats/by-score-category"
          mb="16px"
          width="100%"
        />
        <StatListItem
          name="Categories With The Most Leakage"
          link="/stats/by-category"
          mb="16px"
          width="100%"
        />
        <StatListItem
          name="100 Most Viewed on VULPIX"
          link="/stats/by-views"
          mb="16px"
          width="100%"
        />
      </Container>
      <Container maxWidth="800px" mb="64px">
        <CTA />
      </Container>
    </DefaultLayout>
  )
}

export default Statistics
