export const metadata = {
  title: 'Grupo Essential',
  description: 'Essential Marketing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>
        {children}
      </body>
    </html>
  );
}
