'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, ExternalLink, ArrowRight, X, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
	{
		title: 'Lazora Technologies',
		description: 'A modern website built with Next.js and Tailwind CSS.',
		fullDescription:
			'A comprehensive website featuring real-time data synchronization, and a beautiful responsive design. Built with modern technologies for optimal performance.',
		image: '/projects/on-process.png',
		link: '#',
		tags: ['Next.js', 'React', 'Tailwind'],
	},
	{
		title: 'KDLMN',
		description: 'E-commerce platform with advanced features and animations.',
		fullDescription:
			'Full-featured e-commerce solution with shopping cart, payment integration, inventory management, and an admin dashboard. Includes smooth animations and transitions.',
		image: '/projects/on-process.png',
		link: '#',
		tags: ['Vue.js', 'Node.js', 'MongoDB'],
	},
	{
		title: 'Scholarship Management System',
		description:
			'The system is designed to streamline the management of scholarship applications, student records, and approval processes.',
		fullDescription:
			'The Scholarship Management System is a macOS desktop application developed to automate and simplify the process of managing scholarship programs within an institution.',
		image: '/projects/on-process.png',
		link: '#',
		tags: ['MySQL', 'C++'],
	},
]

type Project = typeof projects[0]

export function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="bento-card col-span-12"
			>
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-lg font-semibold flex items-center gap-2">
						<FolderGit2 className="h-5 w-5 text-accent" />
						Featured Projects
					</h3>
					<Link
						href="/projects"
						className="text-sm text-accent hover:underline flex items-center gap-1"
					>
						View all <ArrowRight className="h-3 w-3" />
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 + index * 0.1 }}
							whileHover={{
								scale: 1.05,
								y: -8,
								boxShadow:
									'0 12px 32px 0 rgba(59,130,246,0.15)',
								borderColor: '#3b82f6',
							}}
							className="rounded-xl overflow-hidden bg-muted/50 cursor-pointer group transition-all border border-transparent"
							onClick={() => setSelectedProject(project)}
						>
							<div className="relative h-40">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4">
								<h4 className="font-semibold">{project.title}</h4>
								<p className="text-muted-foreground text-sm mt-1 line-clamp-1">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1 mt-3">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-0.5 rounded-md bg-muted text-xs"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Full Modal for More Info */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							initial={{ scale: 0.9, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 20 }}
							onClick={(e) => e.stopPropagation()}
							className="relative w-full max-w-2xl bg-card rounded-2xl overflow-hidden shadow-2xl"
						>
							<button
								onClick={() => setSelectedProject(null)}
								className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
							>
								<X className="h-5 w-5" />
							</button>
							<div className="relative h-64">
								<Image
									src={selectedProject.image}
									alt={selectedProject.title}
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card to-transparent">
									<h2 className="text-3xl font-bold">
										{selectedProject.title}
									</h2>
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-6">
									<motion.a
										href={selectedProject.link}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-medium"
									>
										<Play className="h-5 w-5 fill-current" />
										Live Preview
									</motion.a>
									<motion.a
										href={selectedProject.link}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="flex items-center gap-2 px-6 py-3 bg-muted rounded-md font-medium"
									>
										<ExternalLink className="h-5 w-5" />
										View Project
									</motion.a>
								</div>
								<p className="text-muted-foreground mb-4">
									{selectedProject.fullDescription}
								</p>
								<div className="flex flex-wrap gap-2">
									{selectedProject.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
