import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <section className="section py-20">
      <h1 className="text-h1 text-dark mb-6">
        Writer and Builder
      </h1>
      
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        Thinking in public.
      </p>
      
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        I've spent most of my career working in the intersection of tech, finance, and media. I've worked as a hedge fund analyst for an MBS fund; a reporter and journalist at publications like Newsweek and Quartz; a product manager at companies like Acorns; and the founder of a media company called Fintech Today.
      </p>
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        Now I spend my time writing, looking after my two dogs, and building things in AI. My day job is consulting for Tier 1 banks on AI product strategy. I also write a daily newsletter called "Field Notes" on Substack where I share my random thoughts across work and life. And I host a YouTube show around fintech for Benzinga.
      </p>
      <p className="text-xl text-dark/70 leading-relaxed mb-8">
        Outside of work, I love sports (basketball, football, baseball, and getting more into tennis and golf); music (rap and house), writing, and spending time with my plants and dog.
      </p>

      <div className="flex items-center space-x-8">
        <a 
          href="https://iankar.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-dark hover:text-dark/70 transition-colors group"
        >
          <span>Read Field Notes</span>
          <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}