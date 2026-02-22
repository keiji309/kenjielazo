'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-border py-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} Kenjie P. Lazo. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
