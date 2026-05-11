import Link from 'next/link'

import { SectionCard } from '@/components/site/section-card'
import { SiteShell } from '@/components/site/site-shell'
import { TechStackStrip } from '@/components/site/tech-stack-strip'
import {
	coreCompetencies,
	experience,
	profile,
	whyWorkWithMe,
} from '@/lib/resume-data'

import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const stats = [
	{ value: '9+', label: 'Years Experience' },
	{ value: '50+', label: 'Projects Completed' },
	{ value: '30+', label: 'Happy Clients' },
	{ value: '100%', label: 'Job Success' },
]

export default function Page () {
	return (
		<SiteShell>
			<section className='space-y-8 pb-12'>
				<p className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400'>
					Full stack developer
				</p>
				<h1 className='max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl lg:text-[2.75rem] lg:leading-[1.15]'>
					I build fast, reliable and scalable{' '}
					<span className='text-blue-600 dark:text-blue-400'>
						web solutions.
					</span>
				</h1>
				<p className='max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300'>
					9+ years of experience building modern web applications for
					startups, enterprise teams, and growing businesses.
				</p>
				<div className='flex flex-wrap gap-3'>
					<Link
						href={`mailto:${profile.email}?subject=Project%20inquiry`}
						className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:hover:bg-blue-500'
					>
						Hire Me
					</Link>
					<Link
						href='/projects'
						className='inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800'
					>
						View Projects
					</Link>
				</div>
				<div className='pt-4'>
					<TechStackStrip />
				</div>
			</section>

			<section
				className='-mx-5 border-y border-gray-200 bg-gray-100 px-5 py-10 dark:border-gray-800 dark:bg-gray-900/50 sm:-mx-8 sm:px-8'
				aria-label='Highlights'
			>
				<div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-4'>
					{stats.map((row) => (
						<div
							key={row.label}
							className='text-center md:text-left'
						>
							<p className='text-3xl font-bold text-blue-600 dark:text-blue-400 sm:text-4xl'>
								{row.value}
							</p>
							<p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
								{row.label}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className='space-y-6 border-b border-gray-200 pb-10 pt-12 dark:border-gray-800'>
				<h2 className='text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100'>
					{profile.name}
				</h2>
				<p className='text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400'>
					{profile.title}
				</p>
				<p className='max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-200'>
					{profile.summary}
				</p>
				<p className='text-base leading-7 text-gray-600 dark:text-gray-300'>
					Based in Davao, Philippines • Open to remote roles worldwide •
					Available for full-time or contract work
				</p>
				<div className='flex flex-wrap items-center justify-between gap-4'>
					<div className='flex flex-wrap items-center gap-5 text-sm'>
						<Link
							href={profile.github}
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'
							className='inline-flex text-gray-800 transition-opacity hover:opacity-80 dark:text-gray-100'
						>
							<FontAwesomeIcon icon={faGithub} className='h-7 w-7' />
						</Link>
						<Link
							href={`mailto:${profile.email}`}
							aria-label='Email'
							className='inline-flex text-blue-600 transition-opacity hover:opacity-80 dark:text-blue-400'
						>
							<FontAwesomeIcon icon={faEnvelope} className='h-7 w-7' />
						</Link>
						<Link
							href={profile.linkedin}
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'
							className='inline-flex text-[#0a66c2] transition-opacity hover:opacity-80'
						>
							<FontAwesomeIcon icon={faLinkedin} className='h-7 w-7' />
						</Link>
						<Link
							href={profile.twitter}
							target='_blank'
							rel='noreferrer'
							aria-label='X'
							className='inline-flex text-gray-900 transition-opacity hover:opacity-80 dark:text-gray-100'
						>
							<FontAwesomeIcon icon={faXTwitter} className='h-7 w-7' />
						</Link>
					</div>
					<div className='flex flex-wrap gap-4 pt-1'>
						<Link
							href='Larry_Parba_Resume.pdf'
							download='Larry_Parba_Resume.pdf'
							className='text-sm font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-gray-100 dark:decoration-gray-600 dark:hover:text-blue-400'
						>
							Download Resume
						</Link>
						<Link
							target='_blank'
							rel='noreferrer'
							href='https://calendly.com/larry-parba/30min?'
							className='text-sm font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-gray-100 dark:decoration-gray-600 dark:hover:text-blue-400'
						>
							Schedule a 30-min Chat
						</Link>
					</div>
				</div>
			</section>

			<section className='mt-10 grid gap-6 md:grid-cols-2'>
				<SectionCard title='Core Competencies'>
					<ul className='space-y-2 text-sm leading-6 text-gray-700 dark:text-gray-200'>
						{coreCompetencies.slice(0, 5).map((competency) => (
							<li key={competency}>- {competency}</li>
						))}
					</ul>
				</SectionCard>

				<SectionCard title='Recent Role'>
					<div className='space-y-3 text-sm text-gray-700 dark:text-gray-200'>
						<p className='font-medium text-gray-900 dark:text-gray-100'>
							{experience[0].role} at {experience[0].company}
						</p>
						<p>
							{experience[0].location} | {experience[0].period}
						</p>
						<p className='leading-6'>{experience[0].summary}</p>
						<Link
							href='/experience'
							className='inline-flex text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-gray-100 dark:decoration-gray-600 dark:hover:text-blue-400'
						>
							View full experience
						</Link>
					</div>
				</SectionCard>

				<section
					id='why-me'
					className='mt-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/70 md:col-span-2'
				>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
						Why Work With Me?
					</h2>
					<div className='mt-6 grid gap-4 md:grid-cols-2'>
						{whyWorkWithMe.map((reason) => (
							<div
								key={reason}
								className='rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-700 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200'
							>
								{reason}
							</div>
						))}
					</div>
					<div className='mt-8 text-center'>
						<Link
							href='/contact'
							className='inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:hover:bg-blue-500'
						>
							Let&apos;s discuss your next project
						</Link>
					</div>
				</section>
			</section>
		</SiteShell>
	)
}
