'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
            <Link
              href="/about"
              className={`capitalize hover:text-dark transition-colors ${
                isActive('/about') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              about me
            </Link>
            <Link
              href="/projects"
              className="capitalize text-dark/80 hover:text-dark transition-colors"
            >
              projects
            </Link>
            <Link
              href="/recommendations"
              className={`capitalize hover:text-dark transition-colors ${
                isActive('/recommendations') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              rec's
            </Link>
            <Link
              href="/blog"
              className={`capitalize hover:text-dark transition-colors ${
                isActive('/blog') ? 'text-dark' : 'text-dark/80'
              }`}
            >
              blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 