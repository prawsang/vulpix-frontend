import { Table as CTable, Thead, Tbody, Tfoot, Tr, Th, Td, Box, TableProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import ApplicationIcon from 'components/common/ApplicationIcon'
import ScoreDisplay from './ScoreDisplay'

const TableWrapper = styled(Box)`
  max-width: 100%;
  overflow-x: scroll;
  border-radius: 8px;
`

const Table = (props: TableProps) => {
  return (
    <TableWrapper boxShadow="0 8px 24px rgba(0,0,0,0.1)">
      <CTable variant="simple" borderRadius="8px" overflow="hidden" {...props}>
        <Thead bg="gray.300">
          <Tr>
            <Th />
            <Th />
            <Th>Application Name</Th>
            <Th>Category</Th>
            <Th>VULPIX Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>
              <ApplicationIcon />
            </Td>
            <Td color="primary.500">My Application 1</Td>
            <Td color="primary.500">Social Networking</Td>
            <Td color="gry.200">
              <ScoreDisplay score={20} />
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>
              <ApplicationIcon />
            </Td>
            <Td color="primary.500">My Application 2</Td>
            <Td color="primary.500">Games</Td>
            <Td color="gry.200">
              <ScoreDisplay score={50} />
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>
              <ApplicationIcon />
            </Td>
            <Td color="primary.500">My Application 3</Td>
            <Td color="primary.500">Lifestyle</Td>
            <Td color="gry.200">
              <ScoreDisplay score={90} />
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th />
            <Th />
            <Th>Application Name</Th>
            <Th>Category</Th>
            <Th>VULPIX Score</Th>
          </Tr>
        </Tfoot>
      </CTable>
    </TableWrapper>
  )
}

export default Table
