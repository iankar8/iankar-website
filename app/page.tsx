import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Ik3dMarqueeUnit } from '@ik/ui'

export default function Home() {
  return (
    <section className="section py-20">
      <Ik3dMarqueeUnit className="mb-8" data-testid="ikui-marquee">
        <span>Welcome to my site</span>
      </Ik3dMarqueeUnit>
      <h1 className="text-h1 text-dark mb-6">
        Hi, I'm Ian Kar
      </h1>
      
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
        <Link 
          href="/writing"
          className="inline-flex items-center space-x-2 text-dark hover:text-dark/70 transition-colors group"
        >
          <span>Read the Blog</span>
          <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}