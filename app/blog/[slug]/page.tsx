'use server';

import { getPostBySlug, getAllPosts, type Post } from '@/lib/posts'
import Header from '@/components/Header'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: Post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const content = md.render(post.content)

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <time className="text-[#4A4A4A]">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </header>

        <div 
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  )
}
