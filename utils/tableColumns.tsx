import Link from 'components/common/Link'
import ScoreDisplay from 'components/common/ScoreDisplay'
import { categoryMap } from 'utils/categoryMap'
import { Text } from '@chakra-ui/react'

export const tableWithCategory = [
  {
    name: 'Application Name',
    key: 'name',
    render: (row) => (
      <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
        {row.name}
      </Link>
    ),
  },
  {
    name: 'Category',
    key: 'categorySlug',
    render: (row) => (
      <Link color="primary.500" href={`/browse/category/${row.categorySlug}`}>
        {categoryMap[row.categorySlug]}
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
    render: (row) => (
      <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
        {row.name}
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

export const tableWithOrder = [
  {
    name: '',
    key: 'name',
    render: (row, i) => <Text fontWeight="bold">{i}</Text>,
  },
  {
    name: 'Application Name',
    key: 'name',
    render: (row) => (
      <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
        {row.name}
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

export const tableWithOrderAndCategory = [
  {
    name: '',
    key: 'name',
    render: (row, i) => <Text fontWeight="bold">{i}</Text>,
  },
  {
    name: 'Application Name',
    key: 'name',
    render: (row) => (
      <Link color="primary.500" href={`/browse/application/${row.identifier}`}>
        {row.name}
      </Link>
    ),
  },
  {
    name: 'Category',
    key: 'categorySlug',
    render: (row) => (
      <Link color="primary.500" href={`/browse/category/${row.categorySlug}`}>
        {categoryMap[row.categorySlug]}
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
