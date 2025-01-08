import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recommendations - Ian Kar',
  description: 'My favorite books, articles, podcasts, and more.',
}

export default function RecommendationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
