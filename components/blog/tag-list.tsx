import Link from 'next/link'

interface TagListProps {
	title: string
	tags: string[]
}

export function TagList ({ title, tags }: TagListProps) {
	return (
		<section className='rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 shadow-sm'>
			<h3 className='text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
				{title}
			</h3>

			<div className='mt-4 flex flex-wrap gap-2'>
				{tags.map((tag) => (
					<Link
						key={tag}
						href={`/topics/${tag}`}
						className='rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'
					>
						{tag}
					</Link>
				))}
			</div>
		</section>
	)
}
