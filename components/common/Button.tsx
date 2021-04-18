import { Button as CButton, ButtonProps } from '@chakra-ui/react'

const Button = (props: ButtonProps) => {
  return (
    <CButton
      bg={props.disabled ? 'gray.500' : 'primary.500'}
      borderRadius="999px"
      color="white"
      boxShadow={props.disabled ? 'none' : '0 6px 16px rgba(255,30,5,0.5)'}
      textTransform="uppercase"
      fontSize="14px"
      paddingX="24px"
      paddingY="8px"
      minWidth="180px"
      _hover={{
        bg: props.disabled ? 'gray.500' : 'primary.500',
      }}
      {...props}
    />
  )
}

export default Button
