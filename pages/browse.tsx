// import { useState } from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import DefaultLayout from 'layouts/default'
import Container from 'components/common/Container'
import Input from 'components/common/Input'
import CategoryCard from 'components/browse/CategoryCard'
import CTA from 'components/common/CTA'

const Home = () => {
  return (
    <DefaultLayout pageName="Home">
      <Container mb="64px">
        <Box pt="64px" textAlign="center" maxWidth="800px" mx="auto">
          <Heading size="md" color="accent.500" textTransform="uppercase" mb="32px">
            Browse Test Results
          </Heading>
          <Input placeholder="Search" />
          {/** TODO: Add search icon */}
        </Box>
        <Box mt="64px" pb="64px">
          <Heading
            size="sm"
            color="gray.600"
            mb="32px"
            textAlign="center"
            textTransform="uppercase"
          >
            Browse By Category
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <CategoryCard name="Social Networking" active={false} />
            <CategoryCard name="Games" active />
            <CategoryCard name="Lifestyle" active={false} />
            <CategoryCard name="Photography" active={false} />
            <CategoryCard name="Finance" active={false} />
          </Grid>
          <CTA mt="64px" />
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default Home
