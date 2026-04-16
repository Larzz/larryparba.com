import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { profile } from '@/lib/resume-data'

export default function ContactPage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>Contact</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					Open to work, collaborations, consulting, and full-time opportunities. Please contact me if you have any questions or would like to discuss a project.
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

					<p>
						LinkedIn:{' '}
						<Link
							href={profile.linkedin}
							target='_blank'
							rel='noreferrer'
							className='text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors hover:text-rose-500'
						>
							linkedin.com/in/larry-parba-52509699/
						</Link>
					</p>

					<p>
						X:{' '}
						<Link
							href={profile.twitter}
							target='_blank'
							rel='noreferrer'
							className='text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors hover:text-rose-500'
						>
							x.com/Larry_Parba
						</Link>
					</p>
					<div className='mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800'>
						<h3 className='text-base font-semibold text-zinc-900 dark:text-zinc-100'>
							Ready to build something great?
						</h3>
						<p className='mt-2 text-sm text-zinc-700 dark:text-zinc-300'>
							I am currently open to full-time remote roles and contract projects.
						</p>

						<div className='mt-4 flex flex-wrap gap-3'>
							<Link
								href={`mailto:${profile.email}`}
								className='inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500 dark:text-zinc-100 dark:decoration-zinc-700'
							>
								Email me
							</Link>
							<Link
								href='/Larry_Parba_Resume.pdf'
								className='inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500 dark:text-zinc-100 dark:decoration-zinc-700'
							>
								Download resume
							</Link>
							<Link
								href='https://calendly.com/larry-parba'
								target='_blank'
								rel='noreferrer'
								className='inline-flex text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500 dark:text-zinc-100 dark:decoration-zinc-700'
							>
								Schedule a 30-min chat
							</Link>
						</div>

						<form
							action='https://formspree.io/f/maqaeekl'
							method='POST'
							className='mt-6 space-y-4'
						>
							<input
								type='text'
								name='name'
								placeholder='Your Name'
								required
								className='w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-400'
							/>
							<input
								type='email'
								name='email'
								placeholder='Your Email'
								required
								className='w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-400'
							/>
							<textarea
								name='message'
								placeholder='Tell me about your project...'
								rows={4}
								required
								className='w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-400'
							/>
							<button
								type='submit'
								className='w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700'
							>
								Send message
							</button>
						</form>
					</div>
				</div>
			</section>
		</SiteShell>
	)
}
