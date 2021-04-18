import { useState, useEffect } from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CategorySelect from 'components/browse/CategorySelect'
import CTA from 'components/common/CTA'
import Table from 'components/common/Table'
import { useRouter } from 'next/router'
import { categoryMap } from 'utils/categoryMap'
import SearchBar from 'components/common/SearchBar'
import Pagination from 'components/common/Pagination'
import { getAppsInCategory } from 'api/browse'
import { tableWithoutCategory } from 'utils/tableColumns'

const Browse = () => {
  const router = useRouter()
  const query = router.query
  const category = query.category as string
  const page = query.page as string

  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  // fetch in client
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAppsInCategory({ slug: category, page: page ? page.toString() : '1' })
      if (res && res.data) {
        setData(res.data.data)
        setTotalPages(res.data.totalPages)
      }
    }
    if (router.isReady) {
      fetchData()
    }
  }, [router.isReady])

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
          {category && categoryMap[category]}
        </Heading>
        <Table columns={tableWithoutCategory} rows={data} />
        <Flex justifyContent="center" width="100%" paddingTop="64px">
          <Pagination currentPage={page ? parseInt(page, 10) : 1} totalPages={totalPages} />
        </Flex>
        <Box maxWidth="800px" marginX="auto">
          <CategorySelect pt="96px" pb="64px" />
          <CTA mt="64px" />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Browse
