'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and its new App Router...',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: 'getting-started-nextjs-14',
    tags: ['Next.js', 'React', 'Tutorial'],
  },
  {
    title: 'Mastering Tailwind CSS',
    excerpt: 'Tips and tricks for writing clean, maintainable styles with Tailwind CSS...',
    date: 'March 10, 2024',
    readTime: '8 min read',
    slug: 'mastering-tailwind-css',
    tags: ['CSS', 'Tailwind', 'Design'],
  },
  {
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to making your web applications accessible to everyone...',
    date: 'March 5, 2024',
    readTime: '10 min read',
    slug: 'building-accessible-web-apps',
    tags: ['Accessibility', 'Web Dev', 'Best Practices'],
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <BookOpen className="h-10 w-10 text-accent" />
          Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, tutorials, and insights about web development and design.
        </p>
      </motion.div>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground text-sm mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-muted text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline"
              >
                Read more <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.article>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bento-card text-center py-16"
        >
          <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">
            Blog posts are on the way. Stay tuned for updates!
          </p>
        </motion.div>
      )}
    </div>
  )
}
