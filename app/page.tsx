'use client';

import Header from '@/components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-8">
              Hi, I'm Ian Kar
            </h1>
            
            <p className="text-xl text-[#4A4A4A] mb-12 leading-relaxed">
              I write about AI, business, and life. Currently building{' '}
              <a 
                href="https://codeium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors underline"
              >
                Codeium
              </a>
              , an AI coding assistant.
            </p>

            <div className="flex items-center space-x-8">
              <Link 
                href="/blog"
                className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors group"
              >
                <span>Read the Blog</span>
                <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Blue Gradient Shape */}
        <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full filter blur-3xl opacity-10 -z-10 transform translate-x-1/2 translate-y-1/2" />
      </div>
    </main>
  )
}