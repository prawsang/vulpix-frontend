import Nav from 'components/Nav';
import Head from 'components/Head';
import Footer from 'components/Footer';
import Main from 'components/Main';

const DefaultLayout = ({ pageName, children }) => {
  return (
    <>
      <Head pageName={pageName} />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
