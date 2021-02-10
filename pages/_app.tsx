import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "style/theme";
import GoogleFonts from "next-google-fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
