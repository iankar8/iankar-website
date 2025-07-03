'use client';

import { useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

type Restaurant = {
  name: string
  location: string
  cuisine: string
  notes: string
}

type Media = {
  title: string
  type: 'TV' | 'Movie'
  genre: string
  notes: string
}

// Lazy load panel components for better performance
const RestaurantsPanel = lazy(() => import('./panels/RestaurantsPanel'))
const MediaPanel = lazy(() => import('./panels/MediaPanel'))

const fadeSlideUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}

const LoadingSpinner = () => (
  <motion.div 
    {...fadeSlideUp}
    className="flex items-center justify-center py-12"
  >
    <div className="w-6 h-6 border-2 border-[#2B2B2B]/20 border-t-[#2B2B2B] rounded-full animate-spin" />
  </motion.div>
)

export default function RecommendationsContent() {
  const [activeTab, setActiveTab] = useState('restaurants')

  const restaurants: Restaurant[] = [
    {
      name: 'Nopa',
      location: 'San Francisco',
      cuisine: 'California',
      notes: 'Modern California cuisine in a beautiful converted bank building. Great for late-night dining with excellent cocktails.',
    },
    {
      name: 'Che Fico',
      location: 'San Francisco',
      cuisine: 'Italian',
      notes: 'Rustic Italian dishes in a stylish setting. The pizza and pasta are incredible, especially the agnolotti.',
    },
    {
      name: 'State Bird Provisions',
      location: 'San Francisco',
      cuisine: 'American',
      notes: 'Innovative dim sum-style dining with creative small plates. The quail and sourdough pancakes are must-tries.',
    }
  ]

  const media: Media[] = [
    {
      title: 'The Bear',
      type: 'TV',
      genre: 'Drama',
      notes: 'Incredible character development and authentic portrayal of kitchen culture. Jeremy Allen White is phenomenal.',
    },
    {
      title: 'Succession',
      type: 'TV',
      genre: 'Drama',
      notes: 'Sharp writing and complex family dynamics. Brian Cox and Jeremy Strong deliver masterful performances.',
    },
    {
      title: 'Dune: Part Two',
      type: 'Movie',
      genre: 'Sci-Fi',
      notes: 'Visually stunning adaptation that improves on the already excellent first film. Timothée Chalamet shines.',
    }
  ]

  return (
    <div className="space-y-8">
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        {/* Segmented Control */}
        <TabsList className="grid w-full max-w-sm grid-cols-2 bg-[#F6F4E9]/80 border border-[#E5E1D8]/30 p-1">
          <TabsTrigger 
            value="restaurants"
            className="data-[state=active]:bg-white data-[state=active]:text-[#2B2B2B] data-[state=active]:shadow-sm transition-all duration-200"
            aria-pressed={activeTab === 'restaurants'}
          >
            <motion.span
              initial={false}
              animate={{ scale: activeTab === 'restaurants' ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              Restaurants
            </motion.span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="media"
            className="data-[state=active]:bg-white data-[state=active]:text-[#2B2B2B] data-[state=active]:shadow-sm transition-all duration-200"
            aria-pressed={activeTab === 'media'}
          >
            <motion.span
              initial={false}
              animate={{ scale: activeTab === 'media' ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              TV & Movies
            </motion.span>
          </TabsTrigger>
        </TabsList>

        {/* Content Panels */}
        <div className="mt-8">
          <TabsContent value="restaurants" className="space-y-0">
            <Suspense fallback={<LoadingSpinner />}>
              <RestaurantsPanel restaurants={restaurants} />
            </Suspense>
          </TabsContent>

          <TabsContent value="media" className="space-y-0">
            <Suspense fallback={<LoadingSpinner />}>
              <MediaPanel media={media} />
            </Suspense>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
