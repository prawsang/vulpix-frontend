import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  value: number
  colorScheme: string
}

const Progress = (props: Props) => {
  const { value, colorScheme, ...otherProps } = props
  return (
    <Box {...otherProps}>
      <Box width="100%" height="10px" bg="gray.300">
        <Box width={`${value}%`} height="10px" bg={colorScheme} />
      </Box>
    </Box>
  )
}

export default Progress
