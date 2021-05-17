import { Input } from '@chakra-ui/react'

const StyledInput = (props) => {
  return (
    <Input
      boxShadow="0 8px 24px rgba(0,0,0,0.1)"
      borderRadius="8px"
      bg="white"
      _focus={{
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      }}
      _placeholder={{
        color: 'gray.500',
      }}
      border="none"
      {...props}
    />
  )
}

export default StyledInput
