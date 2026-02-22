'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const techCategories = [
	{
		name: 'Frontend',
		techs: ['JavaScript', 'TypeScript', 'React', 'Next.js','Tailwind CSS'],
	},
	{
		name: 'Backend',
		techs: ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL'],
	},
	{
		name: 'DevOps & Cloud',
		techs: ['AWS','GitHub Actions'],
	},
]

export function TechStackSection() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className="bento-card col-span-12 lg:col-span-6"
		>
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-xl font-bold">Tech Stack</h3>
				<Link
					href="/tech-stack"
					className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
				>
					View All <ArrowRight className="h-4 w-4" />
				</Link>
			</div>

			<div className="space-y-6">
				{techCategories.map((category, index) => (
					<motion.div
						key={category.name}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 + index * 0.1 }}
					>
						<h4 className="font-semibold mb-3">{category.name}</h4>
						<div className="flex flex-wrap gap-x-6 gap-y-2">
							{category.techs.map((tech) => (
								<span
									key={tech}
									className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
								>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
