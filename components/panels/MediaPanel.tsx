'use client';

import { motion } from 'framer-motion'

type Media = {
  title: string
  type: 'TV' | 'Movie'
  genre: string
  notes: string
}

type MediaPanelProps = {
  media: Media[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const getTypeIcon = (type: 'TV' | 'Movie') => {
  return type === 'TV' ? '📺' : '🎬'
}

export default function MediaPanel({ media }: MediaPanelProps) {
  return (
    <motion.div 
      className="grid gap-6"
      initial="hidden"
      animate="visible"
    >
      {media.map((item, index) => (
        <motion.div 
          key={item.title}
          custom={index}
          variants={cardVariants}
          className="p-6 bg-white/60 border border-[#E5E1D8]/30 rounded-xl space-y-4 hover:bg-white/80 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-h2 text-[#2B2B2B]">
              {item.title}
            </h3>
            <span className="text-sm text-[#4A4A4A] bg-[#F6F4E9]/60 px-3 py-1 rounded-full flex items-center gap-1">
              {getTypeIcon(item.type)} {item.type}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="inline-block px-3 py-1 text-sm bg-[#2B2B2B]/5 text-[#2B2B2B] rounded-full border border-[#E5E1D8]/30">
              {item.genre}
            </span>
          </div>
          
          <p className="text-body text-[#4A4A4A] leading-relaxed">
            {item.notes}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
} 