import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
