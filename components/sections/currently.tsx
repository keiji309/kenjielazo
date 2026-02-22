'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export function CurrentlySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="bento-card col-span-12 lg:col-span-4 !py-3 h-fit"
    >
      <h3 className="text-base font-semibold mb-2">Contact Me</h3>
      
      <div className="flex gap-2">
        <a
          href="mailto:lazokenjiepr@gmail.com"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <Mail className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium">lazokenjiepr@gmail.com</span>
        </a>
        
        <a
          href="tel:+639602721676"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <Phone className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium">(63) 9602721676</span>
        </a>
      </div>
    </motion.div>
  )
}
