import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recommendations - Ian Kar',
  description: 'My favorite restaurants, TV shows, and movies.',
}

export default function Recommendations() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            Recommendations
          </h1>
          
          <div className="text-xl text-[#4A4A4A]">
            Coming Soon!
          </div>
        </div>
      </div>
    </main>
  )
}
