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
      500: '#1F28CF',
    },
    gray: {
      100: '#F7F7F7',
      200: '#F2F2F2',
      300: '#DDE3E9',
      400: '#AFB9C5',
      500: '#8B929A',
      600: '#3F4348',
      700: '#272A2E',
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
      700: '#FF9F05',
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
