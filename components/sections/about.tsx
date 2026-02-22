'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bento-card col-span-12 lg:col-span-6"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-accent" /> About Me
      </h3>
      
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm an aspiring Front-End Developer and Graphic Designer specializing in modern, responsive web applications using JavaScript, Python, and PHP. I've developed systems such as a Dental Management System and an e-commerce platform, focusing on clean architecture, secure development, and performance-driven solutions.
        </p>
        <p>
          With expertise in UI/UX, SEO, and digital marketing, I create visually engaging, user-centered experiences — and I'm currently expanding my skills in cybersecurity to build more secure and resilient systems.
        </p>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {['Creative', 'Detail-oriented', 'Problem Solver', 'Team Player'].map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
