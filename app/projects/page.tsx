'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, Filter, X } from 'lucide-react'

const allProjects = [
	{
		title: 'Lazora Technologies',
		description: 'A modern website built with Next.js and Tailwind CSS.',
		image: '/projects/on-process.png',
		tags: ['Next.js', 'React', 'Tailwind'],
		category: 'Web App',
	},
	{
		title: 'KDLMN',
		description: 'E-commerce platform with advanced features and animations.',
		image: '/projects/on-process.png',
		tags: ['Vue.js', 'Node.js', 'MongoDB'],
		category: 'E-commerce',
	},
	{
		title: 'Scholarship Management System',
		description:
			'The system is designed to streamline the management of scholarship applications, student records, and approval processes.',
		image: '/projects/on-process.png',
		tags: ['MySQL', 'C++'],
		category: 'Dashboard',
	},
]

const categories = ['All', 'Web App', 'E-commerce', 'Dashboard']

export default function ProjectsPage() {
	const [activeCategory, setActiveCategory] = useState('All')
	const [preview, setPreview] = useState<null | number>(null)

	const filteredProjects =
		activeCategory === 'All'
			? allProjects
			: allProjects.filter((p) => p.category === activeCategory)

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-8"
			>
				<h1 className="text-4xl font-bold mb-4">Projects</h1>
				<p className="text-muted-foreground text-lg">
					A collection of projects I&apos;ve worked on. From web applications to
					design systems.
				</p>
			</motion.div>

			{/* Filter Tabs */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex items-center gap-2 mb-8 overflow-x-auto pb-2"
			>
				<Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => setActiveCategory(category)}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
							activeCategory === category
								? 'bg-foreground text-background'
								: 'bg-muted hover:bg-muted/80'
						}`}
					>
						{category}
					</button>
				))}
			</motion.div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredProjects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 + index * 0.05 }}
						className="bento-card group overflow-hidden cursor-pointer"
						onClick={() => setPreview(index)}
					>
						<div className="relative h-48 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-accent/20 to-purple-500/20">
							<div className="absolute inset-0 flex items-center justify-center">
								<FolderGit2 className="h-16 w-16 text-muted-foreground/30" />
							</div>
						</div>
						<div className="flex items-start justify-between mb-2">
							<h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
								{project.title}
							</h3>
						</div>
						<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="px-2 py-1 rounded-md bg-muted text-xs font-medium"
								>
									{tag}
								</span>
							))}
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
								src={allProjects[preview].image}
								alt={allProjects[preview].title}
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
