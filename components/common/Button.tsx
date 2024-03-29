import { Button as CButton, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({ disabled, variant = 'primary', ...props }: Props) => {
  return (
    <CButton
      bg={disabled || variant === 'secondary' ? 'gray.300' : 'primary.500'}
      borderRadius="999px"
      color={variant === 'secondary' ? 'gray.700' : 'white'}
      boxShadow={
        disabled || variant === 'secondary' ? 'none' : '0 6px 16px rgba(255,30,5,0.5) !important'
      }
      disabled={disabled}
      textTransform="uppercase"
      fontSize="14px"
      paddingX="24px"
      paddingY="8px"
      minWidth="180px"
      _hover={{
        bg: disabled || variant === 'secondary' ? 'gray.300' : 'primary.500',
      }}
      _active={{
        bg: disabled || variant === 'secondary' ? 'gray.300' : 'primary.500',
      }}
      {...props}
    />
  )
}

export default Button
