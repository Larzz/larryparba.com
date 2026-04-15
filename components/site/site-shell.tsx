'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/experience', label: 'Experience' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
	// { href: '/contact', label: 'Contact' },
]

interface SiteShellProps {
	children: ReactNode
}

export function SiteShell ({ children }: SiteShellProps) {
	const pathname = usePathname()

	return (
		<div className='mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-10 sm:px-8'>
			<header className='border-b border-zinc-200 pb-6 dark:border-zinc-800'>
				<div className='flex justify-center'>
					<nav
						aria-label='Main navigation'
						className='flex flex-wrap justify-center gap-2 text-sm'
					>
						{navItems.map((item) => {
							const isActive = pathname === item.href
							return (
								<Link
									key={item.href}
									href={item.href}
									className={[
										'rounded-md px-3 py-1.5 transition-colors',
										isActive
											? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
											: 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100',
									].join(' ')}
									aria-current={isActive ? 'page' : undefined}
								>
									{item.label}
								</Link>
							)
						})}
					</nav>
				</div>
			</header>

			<main className='py-10'>{children}</main>
		</div>
	)
}
