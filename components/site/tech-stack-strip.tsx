'use client'

import {
	faAws,
	faLaravel,
	faReact,
	faVuejs,
	faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const items = [
	{ icon: faLaravel, label: 'Laravel' },
	{ icon: faVuejs, label: 'Vue.js' },
	{ icon: faReact, label: 'React' },
	{ icon: faWordpress, label: 'WordPress' },
	{ icon: faDatabase, label: 'MySQL' },
	{ icon: faAws, label: 'AWS' },
] as const

export function TechStackStrip () {
	return (
		<ul className='flex flex-wrap gap-8 sm:gap-10'>
			{items.map(({ icon, label }) => (
				<li key={label} className='flex flex-col items-center gap-2'>
					<FontAwesomeIcon
						icon={icon}
						className='h-8 w-8 text-gray-400 dark:text-gray-500'
						aria-hidden
					/>
					<span className='text-xs text-gray-500 dark:text-gray-400'>
						{label}
					</span>
				</li>
			))}
		</ul>
	)
}
