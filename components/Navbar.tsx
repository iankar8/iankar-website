'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-dark/10">
      <nav className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="block border-2 border-dark text-dark font-semibold text-lg px-4 py-1 hover:bg-dark hover:text-cream transition-colors"
          >
            IK
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a
              href="https://iankar.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative capitalize hover:text-dark transition-colors text-dark/80"
            >
              Field Notes Newsletter
            </a>
            <Link
              href="/consulting"
              className={`relative capitalize hover:text-dark transition-colors ${
                isActive('/consulting') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              Consulting
              {isActive('/consulting') && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline"
                />
              )}
            </Link>
            <Link
              href="/projects"
              className={`relative capitalize hover:text-dark transition-colors ${
                isActive('/projects') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              Projects
              {isActive('/projects') && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline"
                />
              )}
            </Link>
            <Link
              href="/recommendations"
              className={`relative capitalize hover:text-dark transition-colors ${
                isActive('/recommendations') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              Rec's
              {isActive('/recommendations') && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline"
                />
              )}
            </Link>
            <Link
              href="/writing"
              className={`relative capitalize hover:text-dark transition-colors ${
                isActive('/writing') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              Writing
              {isActive('/writing') && (
                <motion.span layoutId="nav-underline" className="nav-underline" />
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 