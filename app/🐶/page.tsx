import { motion } from 'framer-motion'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Nessie - Ian Kar',
  description: 'You found the secret page! Meet my dog Nessie.',
}

export default function NessiePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            🎉 You Found Nessie! 🐶
          </h1>
          
          <p className="text-xl mb-12">
            Congratulations! You've discovered the secret page. Meet Nessie, my adorable companion.
          </p>

          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-lg mb-4">
                Nessie's favorite things:
              </p>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center space-x-2">
                  <span>🦴</span>
                  <span>Long walks in the park</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🎾</span>
                  <span>Playing fetch (endlessly)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🛋️</span>
                  <span>Cozy naps on the couch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🥜</span>
                  <span>Peanut butter treats</span>
                </li>
              </ul>
            </div>

            {/* Placeholder for Nessie's photo */}
            <div className="aspect-square max-w-md mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Nessie's photo coming soon!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
