'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export function QuickInfoSection() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const manilaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now)
      setTime(manilaTime)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="bento-card col-span-12 lg:col-span-4 !py-3 h-fit"
    >
      <h3 className="text-base font-semibold mb-2">Quick Info</h3>
      
      <div className="flex gap-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium">{time || '...'} PHT</span>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium">Metro Manila, PH</span>
        </div>
      </div>
    </motion.div>
  )
}
