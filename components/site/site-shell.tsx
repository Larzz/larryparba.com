'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { ThemeToggle } from './theme-toggle'

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/skills', label: 'Services' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/experience', label: 'Experience' },
	{ href: '/contact', label: 'Contact' },
]

interface SiteShellProps {
	children: ReactNode
}

export function SiteShell ({ children }: SiteShellProps) {
	const pathname = usePathname()
	const currentYear = new Date().getFullYear()

	return (
		<div className='mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8'>
			<header className='border-b border-gray-200 pb-5 dark:border-gray-800'>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<Link
						href='/'
						className='shrink-0 text-lg font-bold tracking-tight text-blue-900 dark:text-blue-100'
					>
						LARRY PARBA
					</Link>
					<div className='flex flex-1 flex-wrap items-center justify-end gap-3 sm:gap-4'>
						<nav
							aria-label='Main navigation'
							className='flex flex-1 flex-wrap items-center gap-x-1 gap-y-2 sm:justify-center md:gap-x-6'
						>
							{navItems.map((item) => {
								const isActive = pathname === item.href
								return (
									<Link
										key={item.href}
										href={item.href}
										className={[
											'rounded-md px-2 py-1.5 text-sm font-medium transition-colors',
											isActive
												? 'text-blue-600 dark:text-blue-400'
												: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
										].join(' ')}
										aria-current={isActive ? 'page' : undefined}
									>
										{item.label}
									</Link>
								)
							})}
						</nav>
						<div className='flex shrink-0 items-center gap-2'>
							<ThemeToggle />
							<Link
								href='/contact'
								className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500'
							>
								Let&apos;s Talk
							</Link>
						</div>
					</div>
				</div>
			</header>

			<main className='flex-1 py-10'>{children}</main>

			<footer className='mt-auto border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400'>
				<div className='flex flex-wrap items-center justify-between gap-3'>
					<p>© {currentYear} Larry Parba. All rights reserved.</p>
					<Link
						href='mailto:larry.parba@outlook.com'
						className='text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-blue-600 dark:text-gray-300 dark:decoration-gray-600 dark:hover:text-blue-400'
					>
						larry.parba@outlook.com
					</Link>
				</div>
			</footer>
		</div>
	)
}
