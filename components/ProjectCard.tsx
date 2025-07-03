'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

type ProjectCardProps = {
  title: string
  description: string
  tags?: string[]
  link?: string
  external?: boolean
  className?: string
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  link,
  external = false,
  className = ""
}: ProjectCardProps) {
  const cardContent = (
    <motion.div
      className={`
        group relative p-6 bg-white/60 border border-[#E5E1D8]/30 rounded-xl 
        shadow-md/5 backdrop-blur-sm transition-all duration-300
        hover:shadow-lg hover:bg-white/80 hover:border-[#E5E1D8]/50
        ${className}
      `}
      whileHover={{ 
        rotateX: 2,
        rotateY: 3,
        z: 50,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-h2 text-[#2B2B2B] group-hover:text-[#1A1A1A] transition-colors">
            {title}
          </h3>
          
          {link && (
            <motion.div
              className="flex-shrink-0 ml-3 text-[#4A4A4A] group-hover:text-[#2B2B2B]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRightIcon className="w-5 h-5" />
            </motion.div>
          )}
        </div>

        <p className="text-body text-[#4A4A4A] mb-4 leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-sm bg-[#2B2B2B]/5 text-[#2B2B2B] rounded-full border border-[#E5E1D8]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
      </div>

      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#F6F4E9]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transform: "translateZ(-1px)" }}
      />
    </motion.div>
  )

  if (link) {
    return external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 rounded-xl"
      >
        {cardContent}
      </a>
    ) : (
      <Link
        href={link}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B2B2B] focus-visible:ring-offset-2 rounded-xl"
      >
        {cardContent}
      </Link>
    )
  }

  return cardContent
} 