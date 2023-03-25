import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc2c0',
    },
    secondary: {
      main: '#b4ada9',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#e6e6e6',
    },
    red: {
      50: red[50],
      100: red[100],
      200: red[200],
      300: red[300],
      400: red[400],
      600: red[600],
      700: red[700],
      800: red[800],
      900: red[900],
      A100: red.A100,
      A200: red.A200,
      A400: red.A400,
      A700: red.A700,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
