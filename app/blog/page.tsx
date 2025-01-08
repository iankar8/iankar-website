'use server';

import Header from '@/components/Header'
import { getAllPosts } from '@/lib/posts'
import { BlogPostCard } from '@/components/BlogPostCard'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen">
      <Header />
      
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
    </main>
  )
}
