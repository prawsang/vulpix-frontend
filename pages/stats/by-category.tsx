import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { byCategory } from 'api/stats'
import Container from 'components/common/Container'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'
import CTA from 'components/common/CTA'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts'
import { categoryMap } from 'constants/categoryMap'
import Card from 'components/common/Card'

interface DataType {
  categorySlug: string
  avg: number
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
            {payload[0].payload.categorySlug}
          </Heading>
          <Text size="xs" color="gray.600">
            Average Score: {payload[0].payload.avg}
          </Text>
          <Text size="xs" color="gray.600">
            Number of Applications: {payload[0].payload.count}
          </Text>
        </>
      )}
    </Card>
  ) : (
    <div>Hello</div>
  )

const ByCategory = () => {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await byCategory()
      if (res && res.data) {
        const sortedData = res.data.sort((a, b) => b.avg - a.avg)
        sortedData.forEach((e) => {
          e.categorySlug = categoryMap[e.categorySlug]
          e.avg = (Math.round(e.avg * 100) / 100).toFixed(4)
        })
        setData(sortedData)
      }
    }
    fetchData()
  }, [])

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
            <Text fontSize="12px" color="gray.600" maxWidth="800px" mt="16px !important">
              Disclaimer: The categories in this chart are from the categories that application
              developers chose in Play Store. Category names may not reflect the purpose of the
              applications.
            </Text>
          </VStack>
        </Box>
        <Box width="100%" maxWidth="100%" height="600px" position="relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              {/* @ts-ignore */}
              <Tooltip cursor={false} content={renderTooltip} />
              <Bar dataKey="avg">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <YAxis>
                <Label
                  angle={-90}
                  value="Average Vulpix Score"
                  position="insideLeft"
                  style={{ textAnchor: 'middle' }}
                />
              </YAxis>
              <XAxis
                height={150}
                dataKey="categorySlug"
                angle={-90}
                interval={0}
                textAnchor="end"
              />
            </BarChart>
          </ResponsiveContainer>
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
