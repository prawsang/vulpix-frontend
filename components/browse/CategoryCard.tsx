import { Box, Heading, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  active: boolean
  name: string
}

const CategoryCard = (props: Props) => {
  const { active, name, ...otherProps } = props

  return (
    <Box
      bg={active ? 'primary.500' : 'gray.200'}
      borderRadius="8px"
      boxShadow={active ? '0 6px 16px rgba(255,30,5,0.5)' : ''}
      padding="16px"
      color={active ? 'white' : 'gray.600'}
      textAlign="center"
      {...otherProps}
    >
      {/** TODO: Replace with application icon or category icon */}
      <Box
        width="80px"
        height="80px"
        borderRadius="50%"
        mb="16px"
        bg={active ? 'white' : 'gray.600'}
        mx="auto"
      />
      <Heading size="sm">{name}</Heading>
    </Box>
  )
}

export default CategoryCard
