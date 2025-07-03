'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F6F4E9] border-t border-[#E5E1D8]/20 mt-auto">
      <div className="max-w-4xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
            >
              <motion.div
                className="font-playfair font-bold text-2xl text-[#2B2B2B]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Ian Kar
              </motion.div>
            </Link>
            <p className="text-body text-[#4A4A4A] max-w-sm">
              Writer, entrepreneur, and tech enthusiast sharing thoughts on AI, business, and life.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-h2 text-[#2B2B2B]">Navigate</h3>
            <nav className="space-y-3">
              <Link 
                href="/blog"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
              >
                Blog
              </Link>
              <Link 
                href="/recommendations"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
              >
                Recommendations
              </Link>
              <Link 
                href="/about"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-h2 text-[#2B2B2B]">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ian@iankar.com"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
                aria-label="Email Ian Kar"
              >
                ian@iankar.com
              </a>
              <a 
                href="https://twitter.com/iankar_"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
                aria-label="Follow Ian Kar on Twitter"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/iankar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-body text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
                aria-label="Connect with Ian Kar on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E5E1D8]/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-[#4A4A4A]">
              © {currentYear} Ian Kar. All rights reserved.
            </p>
            <p className="text-sm text-[#4A4A4A]">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 