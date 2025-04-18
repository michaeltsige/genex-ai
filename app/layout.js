import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}