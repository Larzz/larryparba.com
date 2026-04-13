import { ReactNode } from 'react'

interface SectionCardProps {
	title: string
	children: ReactNode
}

export function SectionCard ({ title, children }: SectionCardProps) {
	return (
		<section className='rounded-xl border border-zinc-200 bg-white p-6 shadow-sm'>
			<h2 className='text-lg font-semibold text-zinc-900'>{title}</h2>
			<div className='mt-4'>{children}</div>
		</section>
	)
}
