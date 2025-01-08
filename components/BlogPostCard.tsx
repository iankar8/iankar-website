'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Post } from '@/lib/blog'

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article 
        className="bg-white/50 rounded-lg p-6 hover:bg-white/70 transition-colors duration-200"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#4A4A4A]">{post.formattedDate}</span>
            <span className="text-sm font-medium px-3 py-1 bg-[#2B2B2B]/5 rounded-full">
              {post.category}
            </span>
          </div>
          <h3 className="font-playfair text-xl font-bold text-[#2B2B2B]">
            {post.title}
          </h3>
          <p className="text-[#4A4A4A] line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </motion.article>
    </Link>
  )
}
