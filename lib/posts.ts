import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  date: string
  content: string
  excerpt: string
  tags?: string[]
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    // Get excerpt from content (first paragraph)
    const excerpt = content.split('\n\n')[0].replace(/[#\n]/g, '')

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      excerpt,
      tags: data.tags || [],
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const excerpt = content.split('\n\n')[0].replace(/[#\n]/g, '')

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      excerpt,
    }
  } catch (error) {
    return null
  }
}
