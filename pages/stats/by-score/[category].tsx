import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { byScore } from 'api/stats'
import Container from 'components/common/Container'
import Link from 'components/common/Link'
import StatCategoryList from 'components/stats/StatCategoryList'
import Table from 'components/common/Table'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import ScoreDisplay from 'components/common/ScoreDisplay'
import { useRouter } from 'next/router'
import { categoryMap } from 'utils/categoryMap'
import CTA from 'components/common/CTA'

interface DataType {
  identifier: string
  name: string
  devName: string
  categorySlug: string
  views: string
  vulpixScore: string
  applicationId: string
}

const tableWithoutCategory = [
  {
    name: 'Application Name',
    key: 'name',
    render: (row) => (
      <Box maxWidth="500px">
        <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
          {row.name}
        </Link>
      </Box>
    ),
  },
  {
    name: 'Developer',
    key: 'devName',
  },
  {
    name: 'Vulpix Score',
    key: 'vulpixScore',
    render: (row) =>
      row.vulpixScore ? (
        <ScoreDisplay score={row.vulpixScore} />
      ) : (
        <Text color="gray.400">No Data</Text>
      ),
  },
]

const ByScore = () => {
  const [data, setData] = useState<DataType[]>([])
  const router = useRouter()
  const category = router.query.category as string

  useEffect(() => {
    const fetchData = async () => {
      const res = await byScore(category)
      if (res && res.data) {
        setData(res.data)
      }
    }
    fetchData()
  }, [category])

  return (
    <DefaultLayout pageName="100 Most Leaking Applications">
      <Container mb="64px">
        <Box pt="64px" pb="48px" textAlign="center" maxWidth="800px" mx="auto">
          <VStack spacing="32px">
            <Heading
              as="h3"
              size="sm"
              color="gray.500"
              textTransform="uppercase"
              textAlign="center"
            >
              Statistics
            </Heading>
            <Heading size="lg" color="accent.500" textAlign="center" marginTop="16px !important">
              Most Leaking Applications on VULPIX
            </Heading>
          </VStack>
          <Heading
            mt="48px"
            as="h3"
            size="md"
            color="gray.600"
            textTransform="uppercase"
            textAlign="center"
          >
            {categoryMap[category]}
          </Heading>
        </Box>
        <Table columns={tableWithoutCategory} rows={data} />
        <Box mb="96px" />
        <Box maxWidth="800px" marginX="auto">
          <StatCategoryList mb="64px" />
          <CTA />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default ByScore
