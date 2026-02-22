'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, Calendar, X } from 'lucide-react'

const certifications = [
	{
		name: 'Cybersecurity',
		issuer: 'Certiport',
		date: 'November 2025',
		credentialId: 'CoLe-DkqB',
		image: '/certs/cybersecurity.jpg',
		description:
			'Successfully completed the certification requirements for Cybersecurity.',
	},
	{
		name: 'Programming Skills Evaluation',
		issuer: 'University of the East-Manila',
		date: 'November 2025',
		credentialId: 'PSE-UE-2025',
		image: '/certs/programming-skills.jpg',
		description:
			'Passed the Programming Skills Evaluation in compliance with the requirements of the Thesis/Capstone Project.',
	},
]

export default function CertificationsPage() {
	const [preview, setPreview] = useState<null | number>(null)

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-8"
			>
				<h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
					<Award className="h-10 w-10 text-accent" />
					Certifications
				</h1>
				<p className="text-muted-foreground text-lg">
					Professional certifications and credentials I&apos;ve earned
					throughout my career.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{certifications.map((cert, index) => (
					<motion.div
						key={cert.name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="bento-card group cursor-pointer"
						onClick={() => setPreview(index)}
					>
						<div className="flex items-start justify-between mb-3">
							<div className="p-3 rounded-xl bg-accent/10">
								<Award className="h-6 w-6 text-accent" />
							</div>
							<ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>

						<h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
							{cert.name}
						</h3>

						<p className="text-accent font-medium text-sm mb-2">
							{cert.issuer}
						</p>

						<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
							{cert.description}
						</p>

						<div className="flex items-center justify-between text-xs text-muted-foreground">
							<div className="flex items-center gap-1">
								<Calendar className="h-3 w-3" />
								{cert.date}
							</div>
							<span>ID: {cert.credentialId}</span>
						</div>
					</motion.div>
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
						<div
							className="relative max-w-2xl w-full p-4 flex items-center justify-center"
							onClick={(e) => e.stopPropagation()}
						>
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
		</div>
	)
}
