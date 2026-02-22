'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X } from 'lucide-react'
import Link from 'next/link'

const certifications = [
	{
		name: 'Cybersecurity',
		issuer: 'Certiport',
		year: '2025',
		image: '/certs/cybersecurity.jpg',
	},
	{
		name: 'Programming Skills Evaluation',
		issuer: 'University of the East-Manila',
		year: '2025',
		image: '/certs/programming-skills.jpg',
	},
]

export function CertificationsSection() {
	const [preview, setPreview] = useState<null | number>(null)

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			className="bento-card col-span-12 lg:col-span-6 h-full"
		>
			<div className="flex items-center justify-between mb-2">
				<h3 className="text-lg font-semibold flex items-center gap-2">
					<Award className="h-5 w-5 text-accent" />
					Certifications
				</h3>
				<span className="text-sm text-muted-foreground cursor-not-allowed opacity-60 select-none">
					View all
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
				{certifications.map((cert, index) => (
					<div
						key={cert.name}
						className="flex flex-col items-center justify-between p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors group h-full"
					>
						<div className="relative w-full h-60 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
							<img
								src={cert.image}
								alt={cert.name}
								className="object-contain w-full h-full"
							/>
						</div>
						<h4 className="font-medium text-lg text-center group-hover:text-accent transition-colors mb-1">
							{cert.name}
						</h4>
						<p className="text-muted-foreground text-base text-center mb-2">
							{cert.issuer} • {cert.year}
						</p>
						<button
							onClick={() => setPreview(index)}
							className="mt-auto px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
						>
							Preview Certificate
						</button>
					</div>
				))}
			</div>
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
								src={certifications[preview].image}
								alt={certifications[preview].name}
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
