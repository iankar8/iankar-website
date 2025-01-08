import { getPostBySlug, getAllPosts, type Post } from '@/lib/posts'
import Header from '@/components/Header'
import { notFound } from 'next/navigation'

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

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-12">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-[#4A4A4A]">
            <time dateTime={post.date} className="text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-[#F5F5F5] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div 
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}
