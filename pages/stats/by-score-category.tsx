import { Box } from '@chakra-ui/react'
import Container from 'components/common/Container'
import CTA from 'components/common/CTA'
import StatCategoryList from 'components/stats/StatCategoryList'
import DefaultLayout from 'layouts/default'

const ByScoreCategory = () => {
  return (
    <DefaultLayout pageName="100 Most Leaking Applications by Category">
      <Container mb="84px">
        <Box maxWidth="800px" marginX="auto" mt="64px">
          <StatCategoryList heading="Choose a Category to Browse" mb="64px" />
          <CTA />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default ByScoreCategory
