import Head from 'next/head'

const MyHead = ({ pageName }) => {
  return (
    <Head>
      <title>{pageName} | VULPIX II</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MyHead
