import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { byCriterion } from 'api/stats'
import Container from 'components/common/Container'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import CTA from 'components/common/CTA'
import { criterionMap } from 'constants/criterionMap'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts'
import Card from 'components/common/Card'

interface DataType {
  criterion: string
  count: number
}

const COLORS = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)',
]

const renderTooltip = ({ payload }) =>
  payload ? (
    <Card bg="white">
      {payload.length > 0 && (
        <>
          <Heading size="sm" color="gray.700">
            {payload[0].payload.criterion}
          </Heading>
          <Text size="xs" color="gray.600">
            Count: {payload[0].payload.count} Times
          </Text>
        </>
      )}
    </Card>
  ) : (
    <div />
  )

const ByCriterion = () => {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await byCriterion()
      if (res && res.data) {
        const out = [] as any[]
        Object.keys(res.data).forEach((criterion) => {
          out.push({
            criterion,
            count: res.data[criterion],
          })
        })
        const sortedData = out.sort((a, b) => b.count - a.count)
        sortedData.forEach((e) => {
          e.criterion = criterionMap[e.criterion]
        })
        setData(sortedData)
      }
    }
    fetchData()
  }, [])

  return (
    <DefaultLayout pageName="Most Leaked Information Criterion">
      <Container mb="64px">
        <Box pt="64px" pb="64px" textAlign="center" maxWidth="800px" mx="auto">
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
              Most Leaked Information Criterion
            </Heading>
          </VStack>
        </Box>
        <Box width="100%" maxWidth="100%" position="relative">
          <Box width="100%" maxWidth="100%" height="600px" position="relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                {/* @ts-ignore */}
                <Tooltip cursor={false} content={renderTooltip} />
                <Bar dataKey="count">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
                <YAxis>
                  <Label
                    angle={-90}
                    value="Number of Times Leakage was Detected During Testing"
                    position="insideLeft"
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>
                <XAxis height={200} dataKey="criterion" angle={-90} interval={0} textAnchor="end" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        <Box mb="64px" />
        <Box maxWidth="800px" marginX="auto">
          <CTA />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default ByCriterion
