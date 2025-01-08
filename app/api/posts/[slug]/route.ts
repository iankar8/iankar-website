import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/posts'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return new NextResponse('Post not found', { status: 404 })
  }
  
  return NextResponse.json(post)
}
