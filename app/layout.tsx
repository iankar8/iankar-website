import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="min-h-screen bg-white">
          <div className="fixed inset-0 bg-[#F4F0DB] opacity-30 -z-10" />
          {children}
        </div>
      </body>
    </html>
  )
}