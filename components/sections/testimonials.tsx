'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X } from 'lucide-react'

const images = [
	{ src: '/designs/design1.jpg', alt: 'Design 1' },
	{ src: '/designs/design2.png', alt: 'Design 2' },
	{ src: '/designs/design3.png', alt: 'Design 3' },
	{ src: '/designs/design4.png', alt: 'Design 4' },
	{ src: '/designs/design5.png', alt: 'Design 5' },
]

export function TestimonialsSection() {
	const [current, setCurrent] = useState(0)
	const [preview, setPreview] = useState<null | number>(null)

	// Auto-advance carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length)
		}, 3500)
		return () => clearInterval(interval)
	}, [])

	// Keyboard navigation for modal
	useEffect(() => {
		if (preview !== null) {
			const handler = (e: KeyboardEvent) => {
				if (e.key === 'Escape') setPreview(null)
				if (e.key === 'ArrowRight') setPreview((p) => (p === null ? 0 : (p + 1) % images.length))
				if (e.key === 'ArrowLeft') setPreview((p) => (p === null ? 0 : (p - 1 + images.length) % images.length))
			}
			window.addEventListener('keydown', handler)
			return () => window.removeEventListener('keydown', handler)
		}
	}, [preview])

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.7 }}
			className="bento-card col-span-12 lg:col-span-6"
		>
			<h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
				<Palette className="h-5 w-5 text-accent" />
				Graphic Designs
			</h3>
			<div className="relative w-full flex justify-center items-center">
				<div className="w-full max-w-xs aspect-[4/5] rounded-xl overflow-hidden shadow-lg cursor-pointer group">
					<motion.img
						key={images[current].src}
						src={images[current].src}
						alt={images[current].alt}
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.98 }}
						transition={{ duration: 0.5 }}
						className="object-cover w-full h-full group-hover:opacity-90"
						onClick={() => setPreview(current)}
					/>
				</div>
				{/* Dots */}
				<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
					{images.map((_, idx) => (
						<span
							key={idx}
							className={`w-2 h-2 rounded-full inline-block transition-all duration-200 ${current === idx ? 'bg-accent' : 'bg-muted-foreground/30'}`}
						/>
					))}
				</div>
			</div>
			{/* Modal Preview */}
			<AnimatePresence>
				{preview !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
						onClick={() => setPreview(null)}
					>
						<div className="relative max-w-2xl w-full p-4 flex items-center justify-center" onClick={e => e.stopPropagation()}>
							<img
								src={images[preview].src}
								alt={images[preview].alt}
								className="w-full h-[70vh] object-contain rounded-xl shadow-2xl bg-black"
							/>
							<button
								onClick={() => setPreview(null)}
								className="absolute top-4 right-4 p-2 bg-muted/80 rounded-full hover:bg-muted"
							>
								<X className="h-6 w-6 text-foreground" />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
