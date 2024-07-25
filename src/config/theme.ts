'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { DarkColor, ThemeColor } from '@/constants';
import { hexToRgb } from '@/utils';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  palette: {
    // mode: 'dark',
    primary: {
      light: '#757ce8',
      main: ThemeColor,
      dark: DarkColor,
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: hexToRgb(ThemeColor, '0.7'),
      dark: hexToRgb(DarkColor, '0.7'),
      contrastText: '#000'
    }
  }
});

export default theme;
