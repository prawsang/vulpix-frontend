import Head from 'next/head';

const MyHead = ({ pageName }) => {
  return (
    <Head>
      <title>{pageName} | Vulpix</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MyHead;
