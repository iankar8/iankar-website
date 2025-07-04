import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <section className="section py-20">
      <h1 className="text-h1 text-dark mb-6">
        Hi, I'm Ian Kar
      </h1>
      
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        Hey there! I'm Ian, based in San Francisco.
      </p>
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        This site mainly exists so that I can share my writing. I also have some stuff about what I'm working on, in case that's of interest.
      </p>
      <p className="text-xl text-dark/70 leading-relaxed mb-6">
        I write a once-a-week newsletter called <a href="https://machineearnings.com" target="_blank" rel="noopener noreferrer" className="text-dark underline hover:text-dark/70">Machine Earnings</a>, about how AI impacts the business world, and a personal newsletter that goes out twice a month.
      </p>
      <p className="text-xl text-dark/70 leading-relaxed mb-8">
        Outside of work, I love sports (basketball, football, baseball, and getting more into tennis and golf); music (rap and house), writing, and spending time with my plants and dog.
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