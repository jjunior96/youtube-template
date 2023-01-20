export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          // display: 'flex',
          // width: '100%',
          // maxWidth: '28rem',
          // backgroundColor: 'blue'
        }
      }
    >
      <>{children}</>
    </div>
  );
}
