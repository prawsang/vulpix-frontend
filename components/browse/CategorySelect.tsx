// import { useState } from 'react'
import { Box, Grid, Heading, BoxProps } from '@chakra-ui/react'
import { getCategories } from 'api/browse'
import CategoryCard from 'components/browse/CategoryCard'
import { useEffect, useState } from 'react'
import { Category } from 'types/common'

const CategorySelect = (props: BoxProps) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories()
      if (res && res.data) setCategories(res.data)
    }
    fetchCategories()
  }, [])

  return (
    <Box {...props}>
      <Heading size="sm" color="gray.600" mb="32px" textAlign="center" textTransform="uppercase">
        Browse By Category
      </Heading>
      <Grid templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(2, 1fr)' }} gap={6}>
        {categories.map((cat) => (
          <CategoryCard
            name={cat.name}
            link={`/browse/category/${cat.slug}`}
            key={`${cat.slug}-select`}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default CategorySelect
