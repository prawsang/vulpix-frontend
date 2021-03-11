import {
  Table as CTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  TableProps,
  Text,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import ApplicationIcon from 'components/common/ApplicationIcon'
import Link from 'components/common/Link'
import ScoreDisplay from './ScoreDisplay'

type Row = {
  id: string
  order?: number
  categoryName?: string
  categoryLink?: string
  applicationName?: string
  applicationLink?: string
  name?: string
  vulpixScore?: number
  value?: string
}

interface Props extends TableProps {
  showCategory?: boolean
  showOrder?: boolean
  showIcon?: boolean
  showScore?: boolean // With Score Meter
  valueName?: string // for  things other than Vulpix Score
  primary: 'application' | 'category' | 'other'
  data: Row[]
}

const TableWrapper = styled(Box)`
  max-width: 100%;
  overflow-x: scroll;
  border-radius: 8px;
`

const getPrimaryColumnName = (primary) => {
  switch (primary) {
    case 'application':
      return 'Application Name'
    case 'category':
      return 'Category'
    default:
      return 'Name'
  }
}

const getPrimaryLinkKey = (primary) => {
  switch (primary) {
    case 'application':
      return 'applicationLink'
    case 'category':
      return 'categoryLink'
    default:
      return null
  }
}

const Table = (props: Props) => {
  const {
    showOrder = true,
    showCategory = true,
    showIcon = true,
    showScore = true,
    valueName,
    primary = 'other',
    data,
    ...tableProps
  } = props

  const primaryLinkKey = getPrimaryLinkKey(primary)

  return (
    <TableWrapper boxShadow="0 8px 24px rgba(0,0,0,0.1)">
      <CTable variant="simple" borderRadius="8px" overflow="hidden" {...tableProps}>
        <Thead bg="gray.300">
          <Tr>
            {showOrder && <Th />}
            {showIcon && <Th />}
            <Th whiteSpace="nowrap">{getPrimaryColumnName(primary)}</Th>
            {showCategory && <Th whiteSpace="nowrap">Category</Th>}
            <Th whiteSpace="nowrap">{valueName || 'Vulpix Score'}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, i) => (
            <Tr key={`${row.id}-table`}>
              {showOrder && <Td>{i + 1}</Td>}
              {showIcon && (
                <Td>
                  <ApplicationIcon />
                </Td>
              )}
              <Td width="100%">
                {primaryLinkKey ? (
                  <Link href={row[primaryLinkKey] || '/'} color="primary.500">
                    {primary === 'application' && row.applicationName}
                    {primary === 'category' && row.categoryName}
                  </Link>
                ) : (
                  <Text color="gray.200">{primary === 'other' && row.name}</Text>
                )}
              </Td>
              {showCategory && (
                <Td whiteSpace="nowrap">
                  <Link href={row.categoryLink || '/'} color="primary.500">
                    {row.categoryName}
                  </Link>
                </Td>
              )}
              <Td color="gray.200">
                {showScore ? (
                  <ScoreDisplay score={row.vulpixScore || 0} />
                ) : (
                  <Text>{row.value}</Text>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            {showOrder && <Th />}
            {showIcon && <Th />}
            <Th>{getPrimaryColumnName(primary)}</Th>
            {showCategory && <Th>Category</Th>}
            <Th>{valueName || 'Vulpix Score'}</Th>
          </Tr>
        </Tfoot>
      </CTable>
    </TableWrapper>
  )
}

export default Table
