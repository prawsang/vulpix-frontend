import { ReactNode } from 'react'
import { Table as CTable, Thead, Tbody, Tfoot, Tr, Th, Td, Box, TableProps } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface Column {
  name: string
  key: string
  render?: (any) => ReactNode
}

interface Props extends TableProps {
  columns: Column[]
  rows: any
}

const TableWrapper = styled(Box)`
  max-width: 100%;
  overflow-x: scroll;
  border-radius: 8px;
`

const Table = (props: Props) => {
  const { columns, rows, ...tableProps } = props
  return (
    <TableWrapper boxShadow="0 8px 24px rgba(0,0,0,0.1)">
      <CTable variant="simple" borderRadius="8px" overflow="hidden" {...tableProps}>
        <Thead bg="gray.300">
          <Tr>
            {columns.map((e) => (
              <Th key={`${e.key}-header`}>{e.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={`${i}-table-row`}>
              {/* {columns.map((col) => {
                col.render ? col.render(row) : <Td>{col.key && row[col.key]}</Td>
              })} */}
              {columns.map((col) => (
                <Td key={`${row.name}${col.key}${i}`}>
                  {col.render ? col.render(row) : row[col.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {columns.map((e) => (
            <Th key={`${e.key}-footer`}>{e.name}</Th>
          ))}
        </Tfoot>
      </CTable>
    </TableWrapper>
  )
}

export default Table
