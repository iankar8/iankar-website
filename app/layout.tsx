import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Kar - Blog and Recommendations on AI, Business, and Life',
  description: 'Writer, entrepreneur, and tech enthusiast sharing thoughts on AI, business, and life.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-warm-bg`}>
        {children}
      </body>
    </html>
  )
}