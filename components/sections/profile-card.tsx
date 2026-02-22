'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ProfileCard() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bento-card col-span-12 lg:col-span-4 flex flex-col items-center justify-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="relative w-64 h-64 mb-0 rounded-2xl overflow-hidden border-4 border-accent/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
        {mounted && (
          <Image
            src={theme === 'dark' ? '/profile-dark.png' : '/profile.png'}
            alt="Kenjie P. Lazo"
            fill
            className="object-cover"
            priority
          />
        )}
      </motion.div>
    </motion.div>
  )
}
