import { ReactNode } from 'react'
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
    <>
      <Head pageName={pageName} />
      <Nav logoColor={logoColor} menuColor={menuColor} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default DefaultLayout
