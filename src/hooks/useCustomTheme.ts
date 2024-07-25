'use client';
import { useMemo } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeColor, DarkColor } from '@/constants';
import { hexToRgb } from '@/utils';

//自定义Meaterial-UI主题
const useCustomTheme = (): Theme => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //   const _theme = localStorage.getItem("theme");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          //   mode: _theme
          //     ? _theme === "dark"
          //       ? "dark"
          //       : "light"
          //     : prefersDarkMode
          //     ? "dark"
          //     : "light",
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
      }),
    []
  );

  return theme;
};

export default useCustomTheme;
