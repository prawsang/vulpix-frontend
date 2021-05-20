import { Box, Text } from '@chakra-ui/react'
import Table from 'components/common/Table'
import Link from 'components/common/Link'
import ScoreDisplay from 'components/common/ScoreDisplay'
import { categoryMap } from 'utils/categoryMap'

const tableWithCategory = [
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
    name: 'Category',
    key: 'categorySlug',
    render: (row) => (
      <Link color="primary.500" href={`/stats/by-score/${row.categorySlug}`}>
        <Text whiteSpace="nowrap">{categoryMap[row.categorySlug]}</Text>
      </Link>
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

const HomeTable = ({ data }) => {
  return <Table width="100%" columns={tableWithCategory} rows={data} />
}

export default HomeTable
