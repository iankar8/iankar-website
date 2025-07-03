'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="section py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-h1 text-[#2B2B2B]">
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
  )
}
