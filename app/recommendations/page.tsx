'use client';

import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function Recommendations() {
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
            Recommendations
          </h1>
          
          <p className="text-xl text-[#4A4A4A]">
            Coming Soon!
          </p>
        </motion.div>
      </div>
    </main>
  )
}
