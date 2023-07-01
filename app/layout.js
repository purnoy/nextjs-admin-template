import './globals.css'


export const metadata = {
  title: 'Admin Template',
  description: 'Admin Templaate Project By Purnoy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
