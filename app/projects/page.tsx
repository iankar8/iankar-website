import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects - Ian Kar',
  description: 'My projects and open source work from GitHub and beyond',
}

// Mock data for now - you can replace this with actual GitHub API integration
const projects = [
  {
    title: 'iankar-website',
    description: 'Personal website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design system with 8pt spacing and accessibility-first approach.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/iankar/iankar-website',
    external: true
  },
  {
    title: 'Field Notes Newsletter',
    description: 'Daily newsletter sharing thoughts on the future of superintelligence, work, and life. Built on Substack with growing subscriber base.',
    tags: ['Newsletter', 'Substack', 'Content', 'AI'],
    link: 'https://iankar.substack.com/',
    external: true
  },
  {
    title: 'Fintech Today',
    description: 'Media company focused on fintech news and analysis. Built and scaled from concept to established publication.',
    tags: ['Media', 'Fintech', 'Startup', 'Content'],
    external: false
  },
  {
    title: 'AI Consulting Projects',
    description: 'Various AI product strategy consulting projects for Tier 1 banks, including product roadmaps, implementation strategies, and risk assessments.',
    tags: ['AI', 'Consulting', 'Banking', 'Product Strategy'],
    external: false
  }
]

export default function ProjectsPage() {
  return (
    <section className="section py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-h1 text-dark mb-6">
          Projects
        </h1>
        
        <p className="text-xl text-dark/70 leading-relaxed mb-12 max-w-3xl">
          Here's a collection of my work across tech, media, and AI. From open source projects to business ventures, 
          these represent different phases of my career and current interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              external={project.external}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-dark/60 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/iankar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-dark hover:text-dark/70 transition-colors group"
          >
            <span>View my GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 