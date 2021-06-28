import { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Nav from 'components/Nav'
import Head from 'components/Head'
import Footer from 'components/Footer'
import Main from 'components/Main'

interface Props {
  pageName: string
  children: ReactNode
  logoColor?: any
  menuColor?: any
}

const DefaultLayout = ({ pageName, children, logoColor, menuColor }: Props) => {
  return (
    <Flex minHeight="100vh" direction="column" overflow="hidden" position="relative">
      <Head pageName={pageName} />
      <Nav logoColor={logoColor} menuColor={menuColor} />
      <Main>{children}</Main>
      <Box flexGrow={1} />
      <Footer />
    </Flex>
  )
}

export default DefaultLayout
