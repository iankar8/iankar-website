'use client';

import { motion } from 'framer-motion'
import Header from '@/components/Header'

type Recommendation = {
  name: string
  description: string
  category: 'Restaurant' | 'Book' | 'Article' | 'Podcast'
  location?: string
  emoji: string
  link?: string
}

const recommendations: Record<string, Recommendation[]> = {
  'Restaurants': [
    {
      name: 'Nopa',
      description: 'Modern California cuisine in a beautiful converted bank building. Great for late-night dining.',
      category: 'Restaurant',
      location: 'San Francisco',
      emoji: '🍽️',
      link: 'https://nopasf.com'
    },
    {
      name: 'Che Fico',
      description: 'Rustic Italian dishes in a stylish setting. The pizza and pasta are incredible.',
      category: 'Restaurant',
      location: 'San Francisco',
      emoji: '🇮🇹',
      link: 'https://chefico.com'
    }
  ],
  'Books': [
    {
      name: 'Zero to One',
      description: 'Peter Thiel\'s insights on startups and innovation. A must-read for entrepreneurs.',
      category: 'Book',
      emoji: '📚',
      link: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296'
    },
    {
      name: 'The Hard Thing About Hard Things',
      description: 'Ben Horowitz\'s honest take on the challenges of building a business.',
      category: 'Book',
      emoji: '📖',
      link: 'https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205'
    }
  ],
  'Articles': [
    {
      name: 'Why AI Will Save the World',
      description: 'Marc Andreessen\'s optimistic perspective on AI\'s potential.',
      category: 'Article',
      emoji: '📱',
      link: 'https://a16z.com/why-ai-will-save-the-world/'
    },
    {
      name: 'The Rise of Developer Productivity Engineering',
      description: 'A deep dive into how companies are optimizing developer workflows.',
      category: 'Article',
      emoji: '💻',
      link: 'https://future.com/the-rise-of-developer-productivity-engineering-devpe/'
    }
  ]
}

export default function Recommendations() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="section py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 text-[#2B2B2B]">
            Recommendations
          </h1>
          
          <p className="text-body text-[#4A4A4A]">
            A curated list of my favorite places, books, and articles. Updated regularly.
          </p>

          {Object.entries(recommendations).map(([category, items]) => (
            <section key={category} className="space-y-8">
              <h2 className="text-h2 text-[#2B2B2B]">
                {category}
              </h2>
              
              <div className="space-y-8">
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {item.link ? (
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.name}
                            </a>
                          ) : (
                            item.name
                          )}
                        </h3>
                        {item.location && (
                          <p className="text-sm text-[#4A4A4A] mb-2">
                            📍 {item.location}
                          </p>
                        )}
                        <p className="text-[#4A4A4A]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
