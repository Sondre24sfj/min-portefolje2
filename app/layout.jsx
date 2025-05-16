import './globals.css';

export const metadata = {
  title: 'DevPortfolio',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  );
}
