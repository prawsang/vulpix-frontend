// import { useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CategorySelect from 'components/browse/CategorySelect'
import CTA from 'components/common/CTA'
import Table from 'components/common/Table'
import { useRouter } from 'next/router'
import SearchBar from 'components/browse/SearchBar'

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
    categoryName: 'Social Networking',
    categoryLink: '/browse/category/social-networking',
    vulpixScore: 50,
  },
  {
    id: '2',
    applicationName: 'Application 3',
    applicationLink: '/browse/app/application-3',
    categoryName: 'Social Networking',
    categoryLink: '/browse/category/social-networking',
    vulpixScore: 90,
  },
]

const Browse = () => {
  const router = useRouter()
  const query = router.query.query as string

  return (
    <DefaultLayout pageName="Browse">
      <Container mb="64px">
        <Box pt="64px" pb="64px" textAlign="center" maxWidth="800px" mx="auto">
          <Heading size="md" color="accent.500" textTransform="uppercase" mb="32px">
            Browse Test Results
          </Heading>
          <SearchBar />
        </Box>
        <Heading color="accent.500" size="md" mb="32px">
          Search Results for &apos;{query}&apos;
        </Heading>
        <Table primary="application" showOrder={false} data={mockData} />
        <Box maxWidth="800px" marginX="auto">
          <CategorySelect pt="96px" pb="64px" />
          <CTA mt="64px" />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Browse
