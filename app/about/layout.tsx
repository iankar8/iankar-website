import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Ian Kar',
  description: 'Writer, entrepreneur, and tech enthusiast sharing thoughts on AI, business, and life.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
