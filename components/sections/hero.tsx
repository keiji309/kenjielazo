'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Mail, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bento-card-lg col-span-12 lg:col-span-8 flex flex-col"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for work
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
          Hi, I'm <span className="gradient-text">Kenjie P. Lazo</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4">
          Front-End Developer | Graphic Designer
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Metro Manila, Philippines</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <motion.a
          href="https://calendly.com/kenjielazo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
        >
          <Calendar className="h-4 w-4" />
          Schedule a Call
        </motion.a>
        <motion.a
          href="mailto:hello@kenjielazo.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
        >
          <Mail className="h-4 w-4" />
          Send Email
        </motion.a>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
