'use client';

import type { Post } from '@/lib/posts'
import Link from 'next/link'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

interface BlogContentProps {
  posts: Post[]
}

function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div 
        className="p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#2B2B2B] group-hover:text-[#000000]">
              {post.title}
            </h2>
            <span className="text-sm text-[#4A4A4A]">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </span>
          </div>
          
          <p className="text-[#4A4A4A] leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-2 text-[#2B2B2B]">
            <span>Read more</span>
            <ArrowLongRightIcon className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function BlogContent({ posts }: BlogContentProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div>
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
          Blog
        </h1>
        
        <div className="space-y-16">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
