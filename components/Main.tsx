import { Box } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Box minHeight="calc(100vh - 157px)" maxWidth="100vw">
      {children}
    </Box>
  )
}

export default Main
