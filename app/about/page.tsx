import { SiteShell } from '@/components/site/site-shell'
import { coreCompetencies, profile } from '@/lib/resume-data'

export default function AboutPage () {
	return (
		<SiteShell>
			<section className='space-y-6'>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>About</h1>
				<p className='max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					{profile.summary}
				</p>
				<p className='max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-200'>
					I specialize in building secure and scalable web applications with
					Laravel and modern frontend tooling, while also implementing
					AI-assisted features that improve product workflows and team
					efficiency.
				</p>
			</section>

			<section className='mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8'>
				<h2 className='text-xl font-semibold text-zinc-900 dark:text-zinc-100'>Focus Areas</h2>
				<ul className='mt-4 grid gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-200 sm:grid-cols-2'>
					{coreCompetencies.map((competency) => (
						<li key={competency} className='rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-3'>
							{competency}
						</li>
					))}
				</ul>
			</section>
		</SiteShell>
	)
}
