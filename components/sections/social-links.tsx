'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', href: 'https://web.facebook.com/kaylewww', icon: Facebook, color: 'hover:bg-blue-600 hover:text-white' },
  { name: 'GitHub', href: 'https://github.com/keiji309', icon: Github, color: 'hover:bg-gray-800 hover:text-white' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kenjielazopr/', icon: Linkedin, color: 'hover:bg-blue-700 hover:text-white' },
]

export function SocialLinksSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bento-card col-span-12 lg:col-span-4 !py-3 h-fit"
    >
      <h3 className="text-base font-semibold mb-2">Social Links</h3>
      
      <div className="flex gap-2">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}                        
            transition={{ delay: 1.1 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 transition-colors ${link.color}`}
          >
            <link.icon className="h-4 w-4" />
            <span className="text-xs font-medium">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
