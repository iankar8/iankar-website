'use server';

import Header from '@/components/Header'
import { getAllPosts } from '@/lib/blog'
import { BlogPostCard } from '@/components/BlogPostCard'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              Hi, I'm Ian Kar
            </h1>
            
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed space-y-4">
              <span className="block">Hey there! I'm Ian, based in San Francisco.</span>

              <span className="block">This site mainly exists so that I can share my writing. I also put stuff I'm currently working on, in case you're curious about that.</span>

              <span className="block">Outside of work, I love sports (basketball, football, baseball, and getting more into tennis and golf); music (rap and house), writing, and spending time with my plants and dog.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-white/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-8">
            Recent Writing
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}