import { Box, Heading, BoxProps, Flex, Icon } from '@chakra-ui/react'
import Link from 'components/common/Link'
import { FaChevronRight } from 'react-icons/fa'

interface Props extends BoxProps {
  name: string
  link: string
}

const StatListItem = (props: Props) => {
  const { name, link, ...otherProps } = props

  return (
    <Link href={link}>
      <Box
        bg="gray.200"
        borderRadius="8px"
        padding="16px"
        color="gray.600"
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
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="sm" mr="16px">
            {name}
          </Heading>
          <Icon as={FaChevronRight} boxSize="16px" />
        </Flex>
      </Box>
    </Link>
  )
}

export default StatListItem
