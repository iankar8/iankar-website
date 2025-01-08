'use server'

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export type Post = {
  slug: string
  title: string
  date: string
  formattedDate: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const allPosts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        return getPostBySlug(slug)
      })
  )

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const date = new Date(data.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return {
    slug,
    title: data.title,
    date: data.date,
    formattedDate,
    category: data.category,
    excerpt: data.excerpt,
    content: md.render(content),
    tags: data.tags || [],
  }
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories)
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.category === category)
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set(posts.flatMap(post => post.tags))
  return Array.from(tags)
}
