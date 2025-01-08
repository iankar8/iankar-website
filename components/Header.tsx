'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const linkVariants = {
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
}

export default function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Monogram */}
          <Link href="/">
            <motion.div
              className="font-playfair font-bold text-2xl text-[#2B2B2B]"
              whileHover={linkVariants.hover}
            >
              IK
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/blog">
              <motion.span 
                className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
                whileHover={linkVariants.hover}
              >
                Blog
              </motion.span>
            </Link>
            <Link href="/recommendations">
              <motion.span 
                className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
                whileHover={linkVariants.hover}
              >
                Recommendations
              </motion.span>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}