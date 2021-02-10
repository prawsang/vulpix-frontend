import Nav from "components/Nav";
import Head from "components/Head";

const DefaultLayout = ({ pageName, children }) => {
  return (
    <>
      <Head pageName={pageName} />
      <Nav />
      {children}
    </>
  );
};

export default DefaultLayout;
