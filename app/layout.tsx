import './globals.css';

export const metadata = {
  title: 'Shoe Shopper Campaign',
  description: 'Find the best deals on shoes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}