'use client';

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="section py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-h1 text-[#2B2B2B]">
          Something Went Wrong
        </h1>
        
        <p className="text-xl text-[#4A4A4A] mb-8">
          Sorry, there was an error loading this page.
        </p>

        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
