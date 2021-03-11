// import { useState } from 'react'
import { Box, Grid, Heading, BoxProps } from '@chakra-ui/react'
import CategoryCard from 'components/browse/CategoryCard'

const Home = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Heading size="sm" color="gray.600" mb="32px" textAlign="center" textTransform="uppercase">
        Browse By Category
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <CategoryCard name="Social Networking" link="/browse/category/social-networking" />
        <CategoryCard name="Games" link="/browse/category/games" />
        <CategoryCard name="Lifestyle" link="/browse/category/lifestyle" />
        <CategoryCard name="Photography" link="/browse/category/photography" />
        <CategoryCard name="Finance" link="/browse/category/finance" />
      </Grid>
    </Box>
  )
}

export default Home
