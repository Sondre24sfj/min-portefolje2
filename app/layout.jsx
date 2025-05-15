// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Sondre Akerholt | Portfolio',
  description: 'Junior Frontend Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}
