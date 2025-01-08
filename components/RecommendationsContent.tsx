'use client';

import { useState } from 'react'

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

export default function RecommendationsContent() {
  const [activeTab, setActiveTab] = useState<'restaurants' | 'media'>('restaurants')

  const restaurants: Restaurant[] = [
    {
      name: 'Example Restaurant',
      location: 'San Francisco',
      cuisine: 'Italian',
      notes: 'Great pasta and wine selection.',
    },
    // Add more restaurants
  ]

  const media: Media[] = [
    {
      title: 'Example Show',
      type: 'TV',
      genre: 'Drama',
      notes: 'Incredible character development.',
    },
    // Add more media
  ]

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('restaurants')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'restaurants'
              ? 'bg-[#2B2B2B] text-white'
              : 'bg-[#2B2B2B]/5 text-[#2B2B2B] hover:bg-[#2B2B2B]/10'
          }`}
        >
          Restaurants
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'media'
              ? 'bg-[#2B2B2B] text-white'
              : 'bg-[#2B2B2B]/5 text-[#2B2B2B] hover:bg-[#2B2B2B]/10'
          }`}
        >
          TV & Movies
        </button>
      </div>
      
      {/* Content */}
      <div className="space-y-8">
        {activeTab === 'restaurants' ? (
          <div className="grid gap-6">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.name}
                className="p-6 bg-white/50 rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#2B2B2B]">
                    {restaurant.name}
                  </h2>
                  <span className="text-sm text-[#4A4A4A]">
                    {restaurant.location}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-sm bg-[#2B2B2B]/5 rounded-full">
                  {restaurant.cuisine}
                </span>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {restaurant.notes}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6">
            {media.map((item) => (
              <div 
                key={item.title}
                className="p-6 bg-white/50 rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#2B2B2B]">
                    {item.title}
                  </h2>
                  <span className="text-sm text-[#4A4A4A]">
                    {item.type}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-sm bg-[#2B2B2B]/5 rounded-full">
                  {item.genre}
                </span>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
