import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'DevPortfolio',
  description: 'Portfolio av Sondre Akerholt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Bakgrunnsvideo */}
        {/* <video autoPlay muted loop className="video-background">
          <source src="/code-blue-4.mp4" type="video/mp4" />
        </video> */}
        {/* Gradient-filter */}
        <div className="gradient-overlay"></div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
