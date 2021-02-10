import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    brand: {
      500: "#FF8205",
      700: "rgba(255,30,5,0.5)",
    },
    accent: {
      500: "#1224A8",
    },
    gray: {
      200: "#F2F2F2",
      300: "#F7F7F7",
      400: "#B1B1B1",
      500: "#ADADAD",
      700: "#292929",
    },
    success: {
      500: "#50C934",
    },
    error: {
      500: "#EB4B4B",
    },
    warning: {
      400: "#F7DF29",
      500: "#EDCB11",
    },
    shadow: {
      500: "rgba(0,0,0,0.13)",
    },
  },
};

const theme = extendTheme(customTheme);
export default theme;
