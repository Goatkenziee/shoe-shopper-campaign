import './globals.css';

export const metadata = {
  title: 'Shoe Shopper Campaign',
  description: 'A campaign targeting shoe shoppers.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}