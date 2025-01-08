'use client';

export type Post = {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
}

let cachedPosts: Post[] = []
let cachedCategories: string[] = []

export function setPosts(posts: Post[]) {
  cachedPosts = posts
}

export function setCategories(categories: string[]) {
  cachedCategories = categories
}

export async function getAllPosts(): Promise<Post[]> {
  return cachedPosts
}

export function getAllCategories(): string[] {
  return cachedCategories
}

export function getPostsByCategory(category: string): Post[] {
  return cachedPosts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): Post[] {
  return cachedPosts.filter(post => post.tags.includes(tag))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await fetch(`/api/posts/${slug}`)
  if (!response.ok) return null
  const post = await response.json()
  return post
}
