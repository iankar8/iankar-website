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
              Hi, I'm Ian Kar—a writer, entrepreneur, and tech enthusiast based in Silicon Valley.
              I spend my time exploring and writing about the intersections of technology, 
              business, and culture.
            </p>
            
            <p>
              My journey in tech and entrepreneurship has given me a unique perspective 
              on how technology shapes our world. Through my writing, I aim to share these 
              insights and spark meaningful conversations about where we're headed.
            </p>

            <p>
              When I'm not writing or building, you might find me exploring new restaurants,
              catching up on films, or curating my latest playlist. I believe in the power
              of good food, great stories, and the perfect soundtrack.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-playfair text-2xl font-bold mb-4">Connect</h2>
            <p>
              The best way to keep up with my thoughts and work is through my blog posts
              and newsletter. You can also find me sharing quick thoughts and interesting
              finds on Twitter.
            </p>
          </div>
        </motion.div>
      </article>
    </main>
  )
}
