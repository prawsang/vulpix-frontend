import { extendTheme } from '@chakra-ui/react'
import headingStyle from './heading'

const customTheme = {
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  colors: {
    primary: {
      500: '#FF8205',
      700: 'rgba(255,30,5,0.5)',
    },
    accent: {
      500: '#1224A8',
    },
    gray: {
      200: '#F7F7F7',
      300: '#F2F2F2',
      400: '#B1B1B1',
      500: '#ADADAD',
      600: '#707070',
      700: '#292929',
    },
    success: {
      500: '#50C934',
    },
    error: {
      500: '#EB4B4B',
    },
    warning: {
      400: '#F7DF29',
      500: '#EDCB11',
    },
  },
}

const theme = extendTheme({
  ...customTheme,
  components: {
    ...headingStyle,
  },
})
export default theme
