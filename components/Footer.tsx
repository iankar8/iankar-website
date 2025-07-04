'use client';

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream border-t border-dark/10 mt-auto">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="text-2xl font-bold text-dark hover:text-dark/90 transition-colors"
            >
              Ian Kar
            </Link>
            <p className="text-dark/70 max-w-sm">
              Writer, entrepreneur, and tech enthusiast sharing thoughts on AI, business, and life.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dark">Navigate</h3>
            <nav className="space-y-3">
              <Link 
                href="/blog"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/recommendations"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                Recommendations
              </Link>
              <Link 
                href="/about"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dark">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ian@iankar.com"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                ian@iankar.com
              </a>
              <a 
                href="https://twitter.com/iankar_"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/iankar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark/70 hover:text-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-dark/70">
              © {currentYear} Ian Kar. All rights reserved.
            </p>
            <p className="text-sm text-dark/70">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 