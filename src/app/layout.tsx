import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNavigation from '@/components/BottomNav';
import TopNav from '@/components/TopNav';
import { ThemeProvider } from '@mui/material/styles';
// import useCustomTheme from '@/hooks/useCustomTheme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '@/config/theme';
import dynamic from 'next/dynamic';
// import DarkModeProvider from '@/context/DarkModeContext';
const DarkModeProvider = dynamic(() => import('@/context/DarkModeContext'), {
  ssr: false
  // suspense: true, // 可选参数
  // loading: () => <p>Loading...</p>  // 可选参数
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '多吃米饭的足迹',
  description: '多吃米饭的前端技术分享'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const _theme = useCustomTheme();
  // console.log('_theme', _theme);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* 模式切换 */}
            <DarkModeProvider>
              <div className="dark:bg-dark-color">{children}</div>
              <div className="w-full flex-none fixed top-0 left-0 z-10">
                <TopNav />
              </div>
              <BottomNavigation />
            </DarkModeProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
