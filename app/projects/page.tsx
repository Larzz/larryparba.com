import Link from 'next/link'
import Image from 'next/image'

import { SiteShell } from '@/components/site/site-shell'
import { featuredProjects } from '@/lib/resume-data'

export default function ProjectsPage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>
					Selected Projects
				</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					A selection of websites and platforms I helped build, maintain, or
					scale in production.
				</p>
			</section>

			<section className='mt-8 grid gap-4 sm:grid-cols-2'>
				{featuredProjects.map((project) => (
					<article
						key={project.name}
						className='overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70'
					>
						<Link href={`/projects/${project.slug}`} className='block'>
							<Image
								src={project.image}
								alt={project.imageAlt}
								width={1200}
								height={720}
								className='aspect-[5/3] w-full object-cover'
								unoptimized
								priority={project.slug === 'vijit-pillai-art' || project.slug === 'adio-luxury'}
							/>
						</Link>
						<div className='p-5'>
							<h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>{project.name}</h2>
							<p className='mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200'>
								{project.summary}
							</p>
							<ul className='mt-4 flex flex-wrap gap-2'>
								{project.technologies.slice(0, 4).map((technology) => (
									<li
										key={technology}
										className='rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'
									>
										{technology}
									</li>
								))}
							</ul>
							<div className='mt-5 flex flex-wrap items-center gap-4'>
								<Link
									href={`/projects/${project.slug}`}
									className='inline-flex text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-blue-400'
								>
									View details
								</Link>
								<Link
									href={project.url}
									target='_blank'
									rel='noreferrer'
									className='inline-flex text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-blue-400'
								>
									Visit project
								</Link>
							</div>
						</div>
					</article>
				))}
			</section>
		</SiteShell>
	)
}
