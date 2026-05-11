import { ReactNode } from 'react'

interface SectionCardProps {
	title: string
	children: ReactNode
}

export function SectionCard ({ title, children }: SectionCardProps) {
	return (
		<section className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/70'>
			<h2 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
				{title}
			</h2>
			<div className='mt-4'>{children}</div>
		</section>
	)
}
