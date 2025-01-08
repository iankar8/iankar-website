'use client';

import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            About Me
          </h1>
          
          <div className="space-y-6 text-lg">
            <p>
              Hi! I'm Ian Kar, a writer and entrepreneur based in San Francisco. I'm currently building{' '}
              <a 
                href="https://codeium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors underline"
              >
                Codeium
              </a>
              , an AI coding assistant that helps developers write better code faster.
            </p>
            
            <p>
              Previously, I was a fintech reporter at Business Insider where I covered the intersection
              of finance and technology. My work has been featured in publications like TechCrunch,
              Forbes, and The Wall Street Journal.
            </p>

            <p>
              I'm passionate about the future of technology, particularly in areas like artificial
              intelligence, developer tools, and fintech. Through my writing, I aim to explore these
              topics and their impact on business and society.
            </p>

            <p>
              When I'm not working, you can find me exploring San Francisco's food scene, reading
              (mostly non-fiction and essays), or planning my next travel adventure.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-playfair text-2xl font-bold mb-4">
              Get in Touch
            </h2>
            <p>
              The best way to keep up with my thoughts and work is through my blog posts
              and newsletter. You can also find me on{' '}
              <a 
                href="https://twitter.com/iankar_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors underline"
              >
                Twitter
              </a>
              {' '}where I share quick thoughts and interesting finds.
            </p>
          </div>
        </motion.div>
      </article>
    </main>
  )
}
