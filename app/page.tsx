import Header from '@/components/Header'
import BlogContent from '@/components/BlogContent'
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3)
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-8">
            Hi, I'm Ian Kar
          </h1>
          
          <p className="text-xl text-[#4A4A4A] mb-12 leading-relaxed">
            I write about AI, business, and life. Currently building{' '}
            <a 
              href="https://codeium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors underline"
            >
              Codeium
            </a>
            , an AI coding assistant.
          </p>

          <div className="flex items-center space-x-8">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
            >
              <span>Read the Blog</span>
              <ArrowLongRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl font-bold mb-12">
              Recent Posts
            </h2>
            
            <BlogContent posts={recentPosts} />
            
            <div className="mt-12">
              <Link 
                href="/blog"
                className="inline-flex items-center space-x-2 text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors"
              >
                <span>View All Posts</span>
                <ArrowLongRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}