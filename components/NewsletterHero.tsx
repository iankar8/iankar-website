'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type NewsletterHeroProps = {
  title?: string
  description?: string
  className?: string
  newsletter?: 'personal' | 'machine-earnings'
}

const fadeSlideUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.1 } // 100ms as specified
}

export default function NewsletterHero({
  title = "Stay Updated",
  description = "Get my latest posts and thoughts directly in your inbox.",
  className = "",
  newsletter = 'personal'
}: NewsletterHeroProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          newsletter 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-8 bg-cream/60 border border-dark/10 rounded-xl ${className}`}
    >
      <motion.h3 
        className="text-h2 text-dark mb-4"
        {...fadeSlideUp}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-body text-dark/70 mb-6"
        {...fadeSlideUp}
        transition={{ ...fadeSlideUp.transition, delay: 0.05 }}
      >
        {description}
      </motion.p>
      
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            {...fadeSlideUp}
            className="text-green-700 bg-green-50 p-4 rounded-lg border border-green-200"
          >
            <p className="font-medium">Thanks for subscribing!</p>
            <p className="text-sm text-green-600">Please check your email to confirm.</p>
          </motion.div>
        ) : (
          <motion.form
            {...fadeSlideUp}
            transition={{ ...fadeSlideUp.transition, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              className="flex-1 bg-white/80 border-dark/10 focus:border-dark focus:ring-dark/20"
              required
            />
            <Button
              type="submit"
              disabled={status === 'loading' || !email}
              className="bg-dark hover:bg-dark/90 text-white px-6 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      
      {status === 'error' && (
        <motion.div
          {...fadeSlideUp}
          className="mt-3 p-3 text-red-700 bg-red-50 rounded-lg border border-red-200"
        >
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}
    </motion.div>
  )
} 