import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  imageUrl?: string
  size?: string
}

const ApplicationIcon = (props: Props) => {
  const { imageUrl, size = '64px' } = props
  return (
    <Box
      bg="gray.400"
      borderRadius="12.5%"
      bgImage={`url('${imageUrl}')`}
      width={size}
      height={size}
      {...props}
    />
  )
}

export default ApplicationIcon
