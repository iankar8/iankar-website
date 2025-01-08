import { motion } from 'framer-motion'

type SpotifyPlaylistProps = {
  playlistId: string
  title?: string
  description?: string
}

export default function SpotifyPlaylist({ 
  playlistId,
  title = "Current Playlist",
  description = "Here's what I've been listening to lately. Hit play and join me."
}: SpotifyPlaylistProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="font-playfair text-2xl font-bold mb-2">
              {title} 🎵
            </h2>
          )}
          {description && (
            <p className="text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="relative w-full" style={{ paddingBottom: '380px' }}>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </motion.section>
  )
}
