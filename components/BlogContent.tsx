'use client';

import { getAllPosts, getAllCategories, type Post } from '@/lib/posts-client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from './Header'
import { useState } from 'react'
import { NewsletterForm } from './NewsletterForm'

function BlogPostCard({ post }: { post: Post }) {
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

function CategoryPill({ category, isSelected, onClick }: { 
  category: string
  isSelected: boolean
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${isSelected 
                  ? 'bg-[#2B2B2B] text-white' 
                  : 'bg-[#2B2B2B]/5 text-[#2B2B2B] hover:bg-[#2B2B2B]/10'}`}
    >
      {category}
    </button>
  )
}

export default function BlogContent() {
  const posts = getAllPosts()
  const categories = ['All', ...getAllCategories()]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <main>
      <Header />
      
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              Hi, I'm Ian Kar
            </h1>
            
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed">
              I'm a writer, entrepreneur, and tech enthusiast. I write about the intersection of AI, 
              business, and life. Here's where I share my thoughts, ideas, and favorite things.
            </p>
          </div>

          <div className="max-w-lg">
            <NewsletterForm />
          </div>
        </motion.div>
      </section>

      {/* Recent Posts Preview */}
      <section className="bg-white/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B]">
              Recent Writing
            </h2>
            
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map(category => (
                <CategoryPill
                  key={category}
                  category={category}
                  isSelected={category === selectedCategory}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-[#4A4A4A] py-12">
              No posts found in this category.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
