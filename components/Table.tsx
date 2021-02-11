import {
  Table as CTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import ApplicationIcon from "./ApplicationIcon";

const Table = (props) => {
  return (
    <CTable
      variant="simple"
      boxShadow="0 8px 24px rgba(0,0,0,0.1)"
      borderRadius="8px"
      overflow="hidden"
      {...props}
    >
      <Thead bg="gray.200">
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
          <Td color="brand.500">My Application 1</Td>
          <Td color="brand.500">Social Networking</Td>
          <Td color="gry.200">50</Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>
            <ApplicationIcon />
          </Td>
          <Td color="brand.500">My Application 1</Td>
          <Td color="brand.500">Social Networking</Td>
          <Td color="gry.200">50</Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>
            <ApplicationIcon />
          </Td>
          <Td color="brand.500">My Application 1</Td>
          <Td color="brand.500">Social Networking</Td>
          <Td color="gry.200">50</Td>
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
  );
};

export default Table;
