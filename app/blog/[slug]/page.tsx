'use server';

import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#4A4A4A] hover:text-[#2B2B2B] transition-colors"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to home
          </Link>

          <header className="space-y-4">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-[#4A4A4A]">
              <time dateTime={post.date}>{post.formattedDate}</time>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-[#2B2B2B]/5 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div 
            className="prose prose-lg prose-stone max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  )
}
