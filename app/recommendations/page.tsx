import { motion } from 'framer-motion'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recommendations - Ian Kar',
  description: 'My favorite restaurants, movies, and more.',
}

type Recommendation = {
  name: string
  description: string
  category: 'Restaurant' | 'Movie' | 'Book' | 'Other'
  location?: string
  emoji: string
  link?: string
}

// We'll replace this with real data later
const recommendations: Record<string, Recommendation[]> = {
  'Restaurants': [
    {
      name: 'Nopa',
      description: 'Modern California cuisine in a beautiful converted bank building.',
      category: 'Restaurant',
      location: 'San Francisco',
      emoji: '🍽️',
      link: 'https://nopasf.com'
    },
    {
      name: 'Che Fico',
      description: 'Rustic Italian dishes in a stylish setting.',
      category: 'Restaurant',
      location: 'San Francisco',
      emoji: '🇮🇹',
      link: 'https://chefico.com'
    }
  ],
  'Movies': [
    {
      name: 'The Social Network',
      description: 'A masterclass in storytelling and entrepreneurship.',
      category: 'Movie',
      emoji: '🎬'
    },
    {
      name: 'Inception',
      description: 'Mind-bending narrative about dreams and reality.',
      category: 'Movie',
      emoji: '🌀'
    }
  ]
}

export default function Recommendations() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            Recommendations
          </h1>
          
          <p className="text-lg text-gray-600 mb-12">
            A curated list of my favorite places, movies, and things. Updated regularly.
          </p>

          {Object.entries(recommendations).map(([category, items]) => (
            <section key={category} className="mb-16">
              <h2 className="font-playfair text-2xl font-bold mb-8">
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
                          <p className="text-sm text-gray-600 mb-2">
                            📍 {item.location}
                          </p>
                        )}
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* Spotify Playlist */}
          <section className="mt-20">
            <h2 className="font-playfair text-2xl font-bold mb-8">
              Current Playlist 🎵
            </h2>
            <p className="text-gray-600 mb-6">
              Here's what I've been listening to lately. Hit play and join me.
            </p>
            {/* We'll add the Spotify embed here */}
            <div className="w-full h-[380px] bg-gray-100 rounded-lg"></div>
          </section>
        </motion.div>
      </div>
    </main>
  )
}
