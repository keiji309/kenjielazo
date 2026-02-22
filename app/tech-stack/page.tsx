'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import Image from 'next/image'

const techStack = {
  'Frontend': [
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Sass', icon: 'sass' },
  ],
  'Backend': [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'PHP', icon: 'php' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'Express.js', icon: 'express' },
  
  ],
  'Database': [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Supabase', icon: 'supabase' },
  ],
  'DevOps & Cloud': [
    { name: 'AWS', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
    { name: 'GitHub Actions', icon: 'githubactions' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'Linux', icon: 'linux' },

  ],
  'Tools & Design': [
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Adobe XD', icon: 'xd' },
    { name: 'Photoshop', icon: 'photoshop' },
    { name: 'Illustrator', icon: 'illustrator' },
    { name: 'Notion', icon: 'notion' },
  ],
}

export default function TechStackPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code2 className="h-10 w-10 text-accent" />
          Tech Stack
        </h1>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="space-y-8">
        {Object.entries(techStack).map(([category, techs], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bento-card"
          >
            <h2 className="text-xl font-semibold mb-6 text-accent">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.1 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.icon}`}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
