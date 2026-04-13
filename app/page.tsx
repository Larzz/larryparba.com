import Link from 'next/link'

import { SectionCard } from '@/components/site/section-card'
import { SiteShell } from '@/components/site/site-shell'
import { coreCompetencies, experience, profile } from '@/lib/resume-data'

export default function Page () {
	return (
		<SiteShell>
			<section className='space-y-6 border-b border-zinc-200 pb-10'>
				<div className='h-1 w-20 rounded-full bg-rose-300' />
				<p className='text-sm font-medium uppercase tracking-wide text-zinc-500'>
					Web Application Developer
				</p>
				<h1 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
					{profile.name}
				</h1>
				<p className='text-base leading-7 text-zinc-600'>{profile.title}</p>
				<p className='max-w-3xl text-base leading-7 text-zinc-700'>
					{profile.summary}
				</p>
				<div className='flex flex-wrap gap-4 text-sm'>
					<Link
						href={profile.github}
						target='_blank'
						rel='noreferrer'
						className='text-zinc-600 transition-colors hover:text-zinc-900'
					>
						GitHub
					</Link>
					<Link
						href={`mailto:${profile.email}`}
						className='text-zinc-600 transition-colors hover:text-zinc-900'
					>
						{profile.email}
					</Link>
				</div>
			</section>

			<section className='mt-10 grid gap-6 md:grid-cols-2'>
				<SectionCard title='Core Competencies'>
					<ul className='space-y-2 text-sm leading-6 text-zinc-700'>
						{coreCompetencies.slice(0, 5).map((competency) => (
							<li key={competency}>- {competency}</li>
						))}
					</ul>
				</SectionCard>

				<SectionCard title='Recent Role'>
					<div className='space-y-3 text-sm text-zinc-700'>
						<p className='font-medium text-zinc-900'>
							{experience[0].role} at {experience[0].company}
						</p>
						<p>
							{experience[0].location} | {experience[0].period}
						</p>
						<p className='leading-6'>{experience[0].summary}</p>
						<Link
							href='/experience'
							className='inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500'
						>
							View full experience
						</Link>
					</div>
				</SectionCard>
			</section>
		</SiteShell>
	)
}
