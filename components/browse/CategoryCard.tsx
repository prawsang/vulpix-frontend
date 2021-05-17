import { Box, Heading, BoxProps } from '@chakra-ui/react'
import Link from 'components/common/Link'

interface Props extends BoxProps {
  name: string
  link: string
}

const CategoryCard = (props: Props) => {
  const { name, link, ...otherProps } = props

  return (
    <Link href={link}>
      <Box
        bg="gray.200"
        borderRadius="8px"
        padding="16px"
        color="gray.600"
        textAlign="center"
        cursor="pointer"
        transition="all 0.2s ease-in-out"
        height="100%"
        _hover={{
          background: 'primary.500',
          boxShadow: '0 6px 16px rgba(255,30,5,0.5)',
          color: 'white',
        }}
        {...otherProps}
      >
        <Heading size="sm">{name}</Heading>
      </Box>
    </Link>
  )
}

export default CategoryCard
