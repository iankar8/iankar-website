import Header from '@/components/Header'
import BlogContent from '@/components/BlogContent'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <main className="min-h-screen">
      <Header />
      
      <BlogContent posts={posts} />
    </main>
  )
}