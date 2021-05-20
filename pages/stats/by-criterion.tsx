import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { byCriterion } from 'api/stats'
import Container from 'components/common/Container'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import CTA from 'components/common/CTA'
import { Bar } from 'react-chartjs-2'
import { criterionMap } from 'types/common'

interface DataType {
  categorySlug: string
  avg: number
}

const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)',
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)',
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)',
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
]

const ByCriterion = () => {
  const [data, setData] = useState<DataType[]>([])
  const [chartData, setChartData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await byCriterion()
      if (res && res.data) {
        setData(res.data)

        const tempSort = [] as any[]
        const tempChartData = [] as number[]
        const tempLabels = [] as string[]

        Object.keys(res.data).forEach((criterion) => {
          tempSort.push([res.data[criterion], criterionMap[criterion]])
        })
        tempSort.sort((a, b) => b[0] - a[0])

        tempSort.forEach((e) => {
          tempChartData.push(e[0])
          tempLabels.push(e[1])
        })

        setChartData(tempChartData)
        setLabels(tempLabels)
      }
    }
    fetchData()
  }, [])

  const chartConfig = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor,
      },
    ],
  }

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
          {data && (
            <Bar
              type="bar"
              data={chartConfig}
              options={{
                plugins: { legend: { display: false } },
              }}
            />
          )}
          <Text
            position="absolute"
            left="-20px"
            top="40%"
            fontSize="12px"
            color="gray.500"
            transform="translateX(-50%) rotateZ(-90deg)"
          >
            Number of Times Leakage was Detected During Testing
          </Text>
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
