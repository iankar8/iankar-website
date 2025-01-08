'use client';

export type Post = {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
}

let cachedPosts: Post[] = []

export function setPosts(posts: Post[]) {
  cachedPosts = posts
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch('/api/posts')
  const posts = await response.json()
  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await fetch(`/api/posts/${slug}`)
  if (!response.ok) return null
  const post = await response.json()
  return post
}
