import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/posts'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Ian Kar',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} - Ian Kar`,
    description: post.excerpt,
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
