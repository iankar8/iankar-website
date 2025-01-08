'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Monogram */}
          <Link href="/">
            <motion.div
              className="font-playfair font-bold text-2xl text-[#2B2B2B]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              IK
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/blog"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/recommendations"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
            >
              Recommendations
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}