'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function FloatingCTA() {
  return (
    <motion.a
      href="mailto:hello@kenjielazo.com"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium text-sm hidden sm:inline">Chat with Kenjie</span>
    </motion.a>
  )
}
