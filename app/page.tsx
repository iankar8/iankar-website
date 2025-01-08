'use server';

import Header from '@/components/Header'
import BlogContent from '@/components/BlogContent'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <main>
      <Header />
      
      <BlogContent posts={posts} />
    </main>
  )
}