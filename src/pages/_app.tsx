import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import ErrorBoundary from 'src/components/ErrorBoundary';
import ErrorFallback from 'src/components/ErrorFallback';

import { AppProvider } from 'src/context';

import { GlobalStyles, theme } from 'src/styles';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  await import('../mocks');
}

function App({ Component, pageProps }: AppProps) {
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </AppProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
