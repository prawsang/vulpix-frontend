import { Select as CSelect, SelectProps } from '@chakra-ui/react'

const Select = (props: SelectProps) => {
  return (
    <CSelect
      bg="gray.200"
      borderColor="gray.200"
      _focus={{ borderColor: 'primary.500' }}
      maxWidth="100%"
      {...props}
    />
  )
}

export default Select
