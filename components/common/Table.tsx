import { ReactNode } from 'react'
import {
  Table as CTable,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  TableProps,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

interface Column {
  name: string
  key: string
  fullWidth?: boolean
  render?: (row: any, index?: number) => ReactNode
}

interface Props extends TableProps {
  columns: Column[]
  rows: any
  showFooter?: boolean
}

const TableWrapper = styled(Box)`
  max-width: 100%;
  overflow-x: scroll;
  border-radius: 8px;
`

const Table = (props: Props) => {
  const { columns, rows, showFooter = true, ...tableProps } = props
  return (
    <TableWrapper boxShadow="0 8px 24px rgba(0,0,0,0.1)" {...tableProps}>
      <CTable variant="simple" borderRadius="8px" overflow="hidden">
        <Thead bg="gray.300">
          <Tr>
            {columns.map((e) => (
              <Th key={`${e.key}-header`} width={e.fullWidth ? '100%' : 'auto'}>
                {e.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows && rows.length > 0 ? (
            rows.map((row, i) => (
              <Tr key={`${i}-table-row`}>
                {columns.map((col) => (
                  <Td key={`${row.name}${col.key}${i}`}>
                    {col.render ? col.render(row, i) : row[col.key]}
                  </Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td>
                <Text color="gray.500">Not found</Text>
              </Td>
            </Tr>
          )}
        </Tbody>
        {showFooter && (
          <Tfoot>
            {columns.map((e) => (
              <Th key={`${e.key}-footer`}>{e.name}</Th>
            ))}
          </Tfoot>
        )}
      </CTable>
    </TableWrapper>
  )
}

export default Table
