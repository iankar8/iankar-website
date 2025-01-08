import { motion } from 'framer-motion'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Ideas - Ian Kar',
  description: 'You found the secret page! Here are some wild startup ideas.',
}

const ideas = [
  {
    name: "AI Duck Debugger",
    description: "An AI rubber duck that actually talks back and helps debug your code. Powered by GPT-5.",
    status: "Still waiting for GPT-5... 🦆"
  },
  {
    name: "Quantum Coffee",
    description: "Coffee that exists in multiple states until observed. May or may not contain caffeine.",
    status: "Currently in superposition ☕️"
  },
  {
    name: "Web4.0",
    description: "Like Web3 but with more blockchain. So much blockchain it doesn't even make sense anymore.",
    status: "Raising Series Z funding 🚀"
  },
  {
    name: "YC but Reverse",
    description: "Instead of founders pitching VCs, VCs pitch to founders. Complete chaos ensues.",
    status: "Demo day is now pitch day 📊"
  }
]

export default function StartupIdeasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-8">
            🎉 Secret Startup Ideas 💡
          </h1>
          
          <p className="text-xl mb-12">
            Congratulations! You've found my collection of totally legitimate, definitely-going-to-work startup ideas.
          </p>

          <div className="space-y-8">
            {ideas.map((idea) => (
              <motion.div
                key={idea.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg text-left"
              >
                <h3 className="font-playfair text-xl font-bold mb-2">
                  {idea.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {idea.description}
                </p>
                <p className="text-sm font-medium">
                  Status: {idea.status}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm text-gray-500"
          >
            * Any resemblance to actual startups, living or dead, is purely coincidental 😉
          </motion.p>
        </motion.div>
      </div>
    </main>
  )
}
