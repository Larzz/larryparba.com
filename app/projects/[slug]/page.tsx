import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site/site-shell'
import { featuredProjects, getProjectBySlug } from '@/lib/resume-data'

interface ProjectPageProps {
	params: Promise<{ slug: string }>
}

export function generateStaticParams () {
	return featuredProjects.map((project) => ({
		slug: project.slug,
	}))
}

export async function generateMetadata ({ params }: ProjectPageProps) {
	const { slug } = await params
	const project = getProjectBySlug(slug)

	if (!project) {
		return {
			title: 'Project Not Found | Larry Parba',
		}
	}

	return {
		title: `${project.name} | Project Details | Larry Parba`,
		description: project.summary,
	}
}

export default async function ProjectDetailPage ({ params }: ProjectPageProps) {
	const { slug } = await params
	const project = getProjectBySlug(slug)

	if (!project) {
		notFound()
	}

	return (
		<SiteShell>
			<Link
				href='/projects'
				className='text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-blue-400'
			>
				Back to projects
			</Link>

			<section className='mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start'>
				<div>
					<p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400'>
						Project details
					</p>
					<h1 className='mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl'>
						{project.name}
					</h1>
					<p className='mt-4 max-w-3xl text-base leading-8 text-zinc-700 dark:text-zinc-200'>
						{project.description}
					</p>
					<div className='mt-6 flex flex-wrap gap-2'>
						{project.technologies.map((technology) => (
							<span
								key={technology}
								className='rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300'
							>
								{technology}
							</span>
						))}
					</div>
				</div>

				<div className='overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70'>
					<Image
						src={project.image}
						alt={project.imageAlt}
						width={1200}
						height={720}
						className='aspect-[5/3] w-full object-cover'
						unoptimized
						priority
					/>
				</div>
			</section>

			<section className='mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)]'>
				<div className='rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70'>
					<h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
						Responsibilities & Contributions
					</h2>
					<ul className='mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200'>
						{project.responsibilities?.map((responsibility) => (
							<li key={responsibility} className='flex gap-3'>
								<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400' />
								<span>{responsibility}</span>
							</li>
						))}
					</ul>
				</div>

				<aside className='rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70'>
					<h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
						Key Features
					</h2>
					<ul className='mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200'>
						{project.keyFeatures?.map((feature) => (
							<li key={feature} className='flex gap-3'>
								<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500' />
								<span>{feature}</span>
							</li>
						))}
					</ul>
					<Link
						href={project.url}
						target='_blank'
						rel='noreferrer'
						className='mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500'
					>
						Visit live project
					</Link>
				</aside>
			</section>
		</SiteShell>
	)
}
