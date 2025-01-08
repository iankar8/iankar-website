'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function NotFound() {
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
            Post Not Found
          </h1>
          
          <p className="text-xl text-[#4A4A4A] mb-8">
            Sorry, the blog post you're looking for doesn't exist.
          </p>

          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
          >
            <span>← Back to Blog</span>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
