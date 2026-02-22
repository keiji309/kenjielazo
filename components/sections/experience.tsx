'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
	{
		title: 'Administrative Assistant | OJT',
		company: 'UE-Office of Cultural Affairs',
		period: '2026',
		description: '',
	},
	{
		title: 'Secretary Associate',
		company: 'UE-Office of Cultural Affairs',
		period: '2026',
		description: '',
	},
	{
		title: 'Founder',
		company: 'Lazora Technologies',
		period: '2025',
		description: '',
	},
	{
		title: 'Head | President',
		company: 'UE Alpha Sigma',
		period: '2023',
		description: '',
	},
	{
		title: 'BS Information Technology',
		company: 'University of the East-Manila',
		period: '2021',
		description: '',
	},
	{
		title: 'BS Information Technology - WMA',
		company: 'FEU - Institute of Technology',
		period: '2021',
		description: '',
	},
	{
		title: 'Hello World',
		company: 'Wrote my first code',
		period: '2021',
		description: '',
	},
]

export function ExperienceSection() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			className="bento-card col-span-12 lg:col-span-6 lg:row-span-2 h-full"
		>
			<h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
				<Briefcase className="h-5 w-5 text-accent" />
				Experience
			</h3>

			<div className="space-y-4">
				{experiences.map((exp, index) => (
					<motion.div
						key={exp.title + exp.company + exp.period}
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 + index * 0.1 }}
						whileHover={{
							scale: 1.03,
							boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)',
						}}
						className="relative pl-6 pb-4 border-l-2 border-accent/30 last:pb-0 bg-transparent hover:bg-muted/40 rounded-xl transition-all cursor-pointer"
					>
						<div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
						<div className="flex items-start justify-between mb-1">
							<h4 className="font-semibold text-sm">{exp.title}</h4>
							<span className="text-xs text-muted-foreground">
								{exp.period}
							</span>
						</div>
						<p className="text-accent text-sm mb-1">{exp.company}</p>
						{exp.description && (
							<p className="text-muted-foreground text-xs">
								{exp.description}
							</p>
						)}
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}