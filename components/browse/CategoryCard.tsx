import { Box, Heading, BoxProps } from '@chakra-ui/react'
import Link from 'components/common/Link'
import styled from '@emotion/styled'

interface Props extends BoxProps {
  name: string
  link: string
}

const CategoryIcon = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 16px;
`

const StyledBox = styled(Box)`
  :hover {
    ${CategoryIcon} {
      background-color: white;
    }
  }
`

const CategoryCard = (props: Props) => {
  const { name, link, ...otherProps } = props

  return (
    <Link href={link}>
      <StyledBox
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
        {/** TODO: Replace with application icon or category icon */}
        <CategoryIcon bg="gray.600" transition="all 0.2s ease-in-out" />
        <Heading size="sm">{name}</Heading>
      </StyledBox>
    </Link>
  )
}

export default CategoryCard
