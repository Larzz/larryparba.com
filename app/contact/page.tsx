import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { profile } from '@/lib/resume-data'

export default function ContactPage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>Contact</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					Open to collaborations, consulting, and full-time opportunities.
				</p>
			</section>

			<section className='mt-8 max-w-2xl rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 shadow-sm'>
				<h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>Get in touch</h2>
				<div className='mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200'>
					<p>
						Email:{' '}
						<Link
							href={`mailto:${profile.email}`}
							className='text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors hover:text-rose-500'
						>
							{profile.email}
						</Link>
					</p>
					<p>
						GitHub:{' '}
						<Link
							href={profile.github}
							target='_blank'
							rel='noreferrer'
							className='text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors hover:text-rose-500'
						>
							github.com/Larzz
						</Link>
					</p>
				</div>
			</section>
		</SiteShell>
	)
}
