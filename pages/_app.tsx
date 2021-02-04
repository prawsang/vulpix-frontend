import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider, ChakraProvider } from "@chakra-ui/react";
import theme from "style/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
