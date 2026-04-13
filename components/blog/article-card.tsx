import Link from 'next/link'

interface ArticleCardProps {
	title: string
	date: string
	author: string
	readingTime: string
	preview: string[]
	href: string
}

export function ArticleCard ({
	title,
	date,
	author,
	readingTime,
	preview,
	href,
}: ArticleCardProps) {
	return (
		<article className='border-b border-zinc-200 pb-10'>
			<div className='mb-6 h-1 w-24 rounded-full bg-rose-300' />

			<h1 className='text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl'>
				{title}
			</h1>

			<p className='mt-4 text-sm text-zinc-500'>
				{date} by {author} - {readingTime}
			</p>

			<div className='mt-6 space-y-5 text-lg leading-8 text-zinc-700'>
				{preview.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>

			<Link
				href={href}
				className='mt-7 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-rose-500'
			>
				Read more
			</Link>
		</article>
	)
}
