import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { byCategory } from 'api/stats'
import Container from 'components/common/Container'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import CTA from 'components/common/CTA'
import { Bar } from 'react-chartjs-2'
import { categoryMap } from 'utils/categoryMap'

interface DataType {
  categorySlug: string
  avg: number
}

const backgroundColor = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)',
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)',
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)',
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
]

const ByCategory = () => {
  const [data, setData] = useState<DataType[]>([])
  const [chartData, setChartData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await byCategory()
      if (res && res.data) {
        setData(res.data)
        const sortedData = res.data.sort((a, b) => b.avg - a.avg)
        setChartData(sortedData.map((value) => value.avg))
        setLabels(sortedData.map((value) => categoryMap[value.categorySlug]))
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
    <DefaultLayout pageName="Categories With The Most Leakage">
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
              Categories With The Most Leakage
            </Heading>
          </VStack>
        </Box>
        <Box width="100%" maxWidth="100%" position="relative">
          {data && (
            <Bar
              type="bar"
              data={chartConfig}
              options={{ plugins: { legend: { display: false } } }}
            />
          )}
          <Text
            position="absolute"
            left="20px"
            top="40%"
            fontSize="12px"
            color="gray.500"
            transform="translateX(-50%) rotateZ(-90deg)"
          >
            Average VULPIX Score
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

export default ByCategory
