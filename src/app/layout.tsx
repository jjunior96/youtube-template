'use client';

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

      <AppProvider>
        <body className={styles.body}>
          <Layout>{children}</Layout>
        </body>
      </AppProvider>
    </html>
  );
}
