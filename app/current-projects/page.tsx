'use client';

import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Current Projects - Ian Kar',
  description: 'What I\'m currently working on.',
}

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            Current Projects
          </h1>
          
          <div className="text-xl text-[#4A4A4A]">
            Coming Soon!
          </div>
        </div>
      </div>
    </main>
  )
}
