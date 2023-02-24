'use client';

import NextNProgress from 'nextjs-progressbar';

import { Layout } from 'components/Layout';

import { AppProvider } from 'context';

import styles from './styles.module.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body className={styles.body}>
        <AppProvider>
          {/* <NextNProgress
            color="#719c1"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          /> */}
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
