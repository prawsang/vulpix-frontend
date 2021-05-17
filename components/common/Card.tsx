import { Box } from '@chakra-ui/react'

const Card = ({ children, ...props }) => (
  <Box boxShadow="0 8px 24px #00000033" borderRadius="8px" padding="8px" {...props}>
    {children}
  </Box>
)

export default Card
