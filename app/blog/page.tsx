'use server';

import { getAllPosts } from '@/lib/posts'
import { BlogPostCard } from '@/components/BlogPostCard'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="section py-20">
      <h1 className="text-h1 text-dark">
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
  )
}
