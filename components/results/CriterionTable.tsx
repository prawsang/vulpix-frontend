import { useEffect, useState } from 'react'
import Table from 'components/common/Table'
import { criterionMap } from 'constants/criterionMap'
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'

const leakageCheck = (result) => {
  let output = false
  const rows = [] as any[]
  Object.keys(result).forEach((criterion) => {
    if (result[criterion] === true) {
      output = true
      rows.push({
        name: criterion,
        result: true,
      })
    } else {
      rows.push({
        name: criterion,
        result: false,
      })
    }
  })
  return {
    output,
    tableRows: rows,
  }
}

const columns = [
  {
    name: 'Criterion',
    key: 'name',
    fullWidth: true,
    render: (row) => <Text color="gray.700">{criterionMap[row.name]}</Text>,
  },
  {
    name: 'Detected',
    key: 'result',
    render: (row) =>
      row.result === false ? (
        <Text color="gray.400" size="md">
          -
        </Text>
      ) : (
        <Flex alignItems="center">
          <Icon as={FaExclamationCircle} color="error.500" boxSize="16px" />
          <Heading color="error.500" size="sm" pl="12px">
            Detected
          </Heading>
        </Flex>
      ),
  },
]

const CriterionTable = ({ name, results, ...props }) => {
  const [detected, setDetected] = useState(false)
  const [rows, setRows] = useState<any[]>([])

  useEffect(() => {
    const { output, tableRows } = leakageCheck(results)
    setDetected(output)
    setRows(tableRows)
  }, [])

  return (
    <Box {...props}>
      <Flex alignItems="center" mb="16px">
        <Heading size="md" fontWeight="normal" color="gray.600" mr="16px">
          {name}
        </Heading>
        {detected ? (
          <Flex alignItems="center">
            <Icon as={FaExclamationCircle} boxSize="24px" color="error.500" />
            <Heading color="error.500" size="md" pl="8px">
              Detected
            </Heading>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Icon as={FaCheckCircle} boxSize="24px" color="success.500" />
            <Heading color="success.500" size="md" pl="8px">
              Not Detected During Testing
            </Heading>
          </Flex>
        )}
      </Flex>
      <Table columns={columns} rows={rows} showFooter={false} />
    </Box>
  )
}

export default CriterionTable
