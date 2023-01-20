import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={montserrat.className}
        style={{
          width: '100%'
          // backgroundColor: 'gray'
        }}
      >
        {children}
      </body>
    </html>
  );
}
