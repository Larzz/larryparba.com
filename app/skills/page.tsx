import { SiteShell } from '@/components/site/site-shell'
import { skills } from '@/lib/resume-data'

const skillSections = [
	{ title: 'Backend', items: skills.backend },
	{ title: 'Frontend', items: skills.frontend },
	{ title: 'Database', items: skills.database },
	{ title: 'AI & Automation', items: skills.ai },
	{ title: 'DevOps / Infrastructure', items: skills.devops },
	{ title: 'Integrations', items: skills.integrations },
]

export default function SkillsPage () {
	return (
		<SiteShell>
			<section>
				<h1 className='text-3xl font-bold tracking-tight text-zinc-900'>Skills</h1>
				<p className='mt-3 max-w-3xl text-base leading-7 text-zinc-700'>
					Technology stack and capabilities used to deliver reliable web
					products.
				</p>
			</section>

			<section className='mt-8 grid gap-4 sm:grid-cols-2'>
				{skillSections.map((section) => (
					<div
						key={section.title}
						className='rounded-xl border border-zinc-200 bg-white p-5 shadow-sm'
					>
						<h2 className='text-lg font-semibold text-zinc-900'>{section.title}</h2>
						<ul className='mt-3 space-y-2 text-sm text-zinc-700'>
							{section.items.map((item) => (
								<li key={item}>- {item}</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</SiteShell>
	)
}
