import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from 'context';

import { GlobalStyles, theme } from 'styles';

function App({ Component, pageProps }: AppProps) {
  console.log('app.tsx');

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>App Name</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App Name" />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
