'use server';

import postsData from '../data/posts.json'

export type Post = {
  slug: string
  title: string
  date: string
  formattedDate: string
  excerpt: string
  category: string
  tags: string[]
  content: string
  lastModified: string
}

export function getAllPosts(): Post[] {
  return postsData.posts
}

export function getPostBySlug(slug: string): Post {
  const post = postsData.posts.find(post => post.slug === slug)
  if (!post) throw new Error(`Post not found: ${slug}`)
  return post
}

export function getAllCategories(): string[] {
  const categories = new Set(postsData.posts.map(post => post.category))
  return Array.from(categories)
}

export function getPostsByCategory(category: string): Post[] {
  return postsData.posts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): Post[] {
  return postsData.posts.filter(post => post.tags.includes(tag))
}
