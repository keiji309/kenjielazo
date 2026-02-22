'use client'

import { motion } from 'framer-motion'
import { Images } from 'lucide-react'

const galleryImages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/g-${i + 1}.jpg`,
}))

export function GallerySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="bento-card col-span-12 overflow-hidden"
    >
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Images className="h-5 w-5 text-accent" />
        Gallery
      </h3>
      <div className="relative">
        <motion.div
          className="flex gap-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...galleryImages, ...galleryImages].map((img, index) => (
            <motion.div
              key={`${img.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + (index % galleryImages.length) * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="aspect-square w-32 sm:w-40 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer"
            >
              <img
                src={img.src}
                alt={`Gallery image ${img.id}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
