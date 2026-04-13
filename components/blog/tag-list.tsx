import Link from 'next/link'

interface TagListProps {
	title: string
	tags: string[]
}

export function TagList ({ title, tags }: TagListProps) {
	return (
		<section className='rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm'>
			<h3 className='text-xs font-semibold uppercase tracking-wide text-zinc-500'>
				{title}
			</h3>

			<div className='mt-4 flex flex-wrap gap-2'>
				{tags.map((tag) => (
					<Link
						key={tag}
						href={`/topics/${tag}`}
						className='rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900'
					>
						{tag}
					</Link>
				))}
			</div>
		</section>
	)
}
