import Link from 'components/common/Link'
import ScoreDisplay from 'components/common/ScoreDisplay'
import { categoryMap } from 'utils/categoryMap'
import { Box, Text } from '@chakra-ui/react'

export const tableWithCategory = [
  {
    name: 'Application Name',
    key: 'name',
    render: (row) =>
      row.results[0] ? (
        <Box maxWidth="500px">
          <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
            {row.name}
          </Link>
        </Box>
      ) : (
        <Text color="gray.700">{row.name}</Text>
      ),
  },
  {
    name: 'Category',
    key: 'categorySlug',
    render: (row) => (
      <Link color="primary.500" href={`/browse/category/${row.categorySlug}`}>
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
      row.results[0] ? (
        <ScoreDisplay score={row.results[row.results.length - 1].vulpixScore} />
      ) : (
        <Text color="gray.400">No Data</Text>
      ),
  },
]

export const tableWithoutCategory = [
  {
    name: 'Application Name',
    key: 'name',
    render: (row) =>
      row.results[0] ? (
        <Box maxWidth="500px">
          <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
            {row.name}
          </Link>
        </Box>
      ) : (
        <Text color="gray.700">{row.name}</Text>
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
      row.results[0] ? (
        <ScoreDisplay score={row.results[row.results.length - 1].vulpixScore} />
      ) : (
        <Text color="gray.400">No Data</Text>
      ),
  },
]
