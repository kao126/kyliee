'use client';

import 'swiper/swiper-bundle.css';
import '../styles/globals.css';
// components
import { Header } from 'src/components/common/header';
import { Footer } from 'src/components/common/footer';
import { Providers } from 'src/components/common/providers';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/theme';
import createEmotionCache from 'src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

import * as React from 'react';

// export const metadata = {
//   description: 'Generated by create next app',
//   viewport: 'width=device-width, initial-scale=1',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function RootLayout({ emotionCache = clientSideEmotionCache, children }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang='ja'>
          <body>
            <Providers>
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
          </body>
        </html>
      </ThemeProvider>
    </CacheProvider>
  );
}