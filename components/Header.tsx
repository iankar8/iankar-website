'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Monogram */}
          <Link href="/">
            <motion.div
              className="font-playfair font-bold text-2xl text-dark"
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
              className="text-dark/80 hover:text-dark transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/recommendations"
              className="text-dark/80 hover:text-dark transition-colors"
            >
              Recommendations
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}