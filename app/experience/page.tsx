import { SiteShell } from '@/components/site/site-shell'
import { experience } from '@/lib/resume-data'

export default function ExperiencePage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900'>
					Experience
				</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700'>
					Professional timeline focused on full-stack delivery, backend
					architecture, and production reliability.
				</p>
			</section>

			<section className='mt-8 space-y-6'>
				{experience.map((item) => (
					<article
						key={`${item.company}-${item.period}`}
						className='rounded-xl border border-zinc-200 bg-white p-6 shadow-sm'
					>
						<div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
							<h2 className='text-xl font-semibold text-zinc-900'>
								{item.role} - {item.company}
							</h2>
							<p className='text-sm text-zinc-500'>{item.period}</p>
						</div>
						<p className='mt-1 text-sm text-zinc-500'>{item.location}</p>
						<p className='mt-4 text-sm leading-6 text-zinc-700'>{item.summary}</p>
						<ul className='mt-4 space-y-2 text-sm leading-6 text-zinc-700'>
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
