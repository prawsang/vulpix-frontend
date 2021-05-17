import { Box } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Box minHeight="calc(100vh - 157px)" maxWidth="100vw" overflowX="hidden">
      {children}
    </Box>
  )
}

export default Main
