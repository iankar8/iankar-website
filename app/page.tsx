'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <motion.section 
      className="section py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-h1 text-[#2B2B2B]">
        Hi, I'm Ian Kar
      </h1>
      
      <p className="text-xl text-[#4A4A4A] leading-relaxed">
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
    </motion.section>
  )
}