import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Ian Kar',
  description: 'Thoughts and essays on AI, business, and life.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
