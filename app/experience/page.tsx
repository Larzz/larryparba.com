import { SiteShell } from '@/components/site/site-shell'
import { experience } from '@/lib/resume-data'
import Image from 'next/image'

export default function ExperiencePage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>
					Experience
				</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					Professional timeline focused on full-stack delivery, backend
					architecture, and production reliability.
				</p>
			</section>

			<section className='mt-8 space-y-6'>
				{experience.map((item) => (
					<article
						key={`${item.company}-${item.period}`}
						className='rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 shadow-sm'
					>
						<div className='flex items-center gap-2'>
							<Image src={`/${item.logo}`} alt={item.company} width={150} height={150} />
						</div>
						<div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
							<h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
								{item.role} - {item.company}
							</h2>
							<p className='text-sm text-zinc-500 dark:text-zinc-400'>{item.period}</p>
						</div>
						<p className='mt-1 text-sm text-zinc-500 dark:text-zinc-400'>{item.location}</p>
						<p className='mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-200'>{item.summary}</p>
						<ul className='mt-4 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200'>
							{item.highlights.map((highlight) => (
								<li key={highlight}>- {highlight}</li>
							))}
						</ul>
					</article>
				))}
			</section>
		</SiteShell>
	)
}
