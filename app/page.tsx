import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <section className="section py-20">
      <h1 className="text-h1 text-dark mb-6">
        Hi, I'm Ian Kar
      </h1>
      
      <p className="text-xl text-[#4A4A4A] leading-relaxed mb-8">
        I write about AI, business, and life. Currently building{' '}
        <a 
          href="https://codeium.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dark hover:text-dark/70 transition-colors underline"
        >
          Codeium
        </a>
        , an AI coding assistant.
      </p>

      <div className="flex items-center space-x-8">
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-dark hover:text-dark/70 transition-colors group"
        >
          <span>Read the Blog</span>
          <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}