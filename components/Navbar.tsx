'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
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
    <header className="sticky top-0 z-50 bg-[#F6F4E9]/95 backdrop-blur-md border-b border-[#E5E1D8]/20 min-h-[56px]">
      <nav className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center h-14">
          {/* Logo/Monogram */}
          <Link 
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F4E9] rounded-sm"
          >
            <motion.div
              className="font-playfair font-bold text-2xl text-[#2B2B2B]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              IK
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/blog"
              className={`
                relative py-2 px-1 text-[#2B2B2B] transition-colors duration-200
                hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 
                focus-visible:ring-offset-[#F6F4E9] rounded-sm
                ${isActive('/blog') ? 'text-[#1A1A1A]' : ''}
              `}
            >
              <span className="relative">
                Blog
                {/* Active/Hover underline */}
                <motion.div
                  className={`
                    absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2B2B2B] rounded-full
                    ${isActive('/blog') ? 'opacity-100' : 'opacity-0'}
                  `}
                  initial={false}
                  animate={{ 
                    opacity: isActive('/blog') ? 1 : 0,
                    scaleX: isActive('/blog') ? 1 : 0.8 
                  }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </Link>
            
            <Link 
              href="/recommendations"
              className={`
                relative py-2 px-1 text-[#2B2B2B] transition-colors duration-200
                hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 
                focus-visible:ring-offset-[#F6F4E9] rounded-sm
                ${isActive('/recommendations') ? 'text-[#1A1A1A]' : ''}
              `}
            >
              <span className="relative">
                Recommendations
                {/* Active/Hover underline */}
                <motion.div
                  className={`
                    absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2B2B2B] rounded-full
                    ${isActive('/recommendations') ? 'opacity-100' : 'opacity-0'}
                  `}
                  initial={false}
                  animate={{ 
                    opacity: isActive('/recommendations') ? 1 : 0,
                    scaleX: isActive('/recommendations') ? 1 : 0.8 
                  }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </Link>

            <Link 
              href="/about"
              className={`
                relative py-2 px-1 text-[#2B2B2B] transition-colors duration-200
                hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 
                focus-visible:ring-offset-[#F6F4E9] rounded-sm
                ${isActive('/about') ? 'text-[#1A1A1A]' : ''}
              `}
            >
              <span className="relative">
                About
                {/* Active/Hover underline */}
                <motion.div
                  className={`
                    absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2B2B2B] rounded-full
                    ${isActive('/about') ? 'opacity-100' : 'opacity-0'}
                  `}
                  initial={false}
                  animate={{ 
                    opacity: isActive('/about') ? 1 : 0,
                    scaleX: isActive('/about') ? 1 : 0.8 
                  }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 