import { Box, Heading } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import CategorySelect from 'components/browse/CategorySelect'
import CTA from 'components/common/CTA'
import SearchBar from 'components/common/SearchBar'

const Browse = () => {
  return (
    <DefaultLayout pageName="Browse">
      <Container maxWidth="800px" mb="64px">
        <Box pt="64px" textAlign="center" maxWidth="800px" mx="auto">
          <Heading size="md" color="accent.500" textTransform="uppercase" mb="32px">
            Browse Test Results
          </Heading>
        </Box>
        <SearchBar />
        <CategorySelect mt="64px" pb="64px" />
        <CTA mt="64px" />
      </Container>
    </DefaultLayout>
  )
}

export default Browse
