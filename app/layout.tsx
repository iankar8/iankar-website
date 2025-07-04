import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = GeistSans

export const metadata: Metadata = {
  title: 'Ian Kar - Blog and Recommendations on AI, Business, and Life',
  description: 'Writer, entrepreneur, and tech enthusiast sharing thoughts on AI, business, and life.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-cream text-dark antialiased min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}