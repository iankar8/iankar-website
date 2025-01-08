import { motion } from 'framer-motion'

export default function PageLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-warm-bg/80 backdrop-blur-sm z-50"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-16 h-16"
      >
        {/* Animated IK monogram */}
        <div className="absolute inset-0 flex items-center justify-center font-playfair font-bold text-2xl">
          IK
        </div>
        {/* Circular progress */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset="283"
            className="animate-dash"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}
