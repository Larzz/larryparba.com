import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { featuredProjects } from '@/lib/resume-data'

export default function ProjectsPage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900'>
					Selected Projects
				</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700'>
					A selection of websites and platforms I helped build, maintain, or
					scale in production.
				</p>
			</section>

			<section className='mt-8 grid gap-4 sm:grid-cols-2'>
				{featuredProjects.map((project) => (
					<article
						key={project.name}
						className='rounded-xl border border-zinc-200 bg-white p-5 shadow-sm'
					>
						<h2 className='text-lg font-semibold text-zinc-900'>{project.name}</h2>
						<p className='mt-2 text-sm leading-6 text-zinc-700'>
							{project.description}
						</p>
						<Link
							href={project.url}
							target='_blank'
							rel='noreferrer'
							className='mt-4 inline-flex text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500'
						>
							Visit project
						</Link>
					</article>
				))}
			</section>
		</SiteShell>
	)
}
