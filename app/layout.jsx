import '../styles/globals.css'

export const metadata = {
  title: 'Sondre Akerholt | Portfolio',
  description: 'Junior Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
