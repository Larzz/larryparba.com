'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavItem {
	label: string
	href: string
}

interface SidebarProps {
	items: NavItem[]
	activeHref: string
}

function XIcon () {
	return (
		<svg
			aria-hidden
			viewBox='0 0 24 24'
			className='h-4 w-4'
			fill='currentColor'
		>
			<path d='M18.244 2H21l-6.548 7.486L22 22h-5.956l-4.663-6.106L6.04 22H3.28l7.004-8.004L2 2h6.104l4.214 5.618z' />
		</svg>
	)
}

export function Sidebar ({ items, activeHref }: SidebarProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				type='button'
				onClick={() => setIsOpen((prev) => !prev)}
				className='fixed left-4 top-4 z-50 inline-flex items-center rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm lg:hidden'
				aria-label='Toggle navigation menu'
				aria-expanded={isOpen}
			>
				<div className='space-y-1'>
					<div className='h-0.5 w-5 bg-zinc-700' />
					<div className='h-0.5 w-5 bg-zinc-700' />
					<div className='h-0.5 w-5 bg-zinc-700' />
				</div>
			</button>

			{isOpen ? (
				<button
					type='button'
					onClick={() => setIsOpen(false)}
					className='fixed inset-0 z-30 bg-black/20 lg:hidden'
					aria-label='Close menu'
				/>
			) : null}

			<aside
				className={[
					'fixed inset-y-0 left-0 z-40 w-72 border-r border-zinc-200 bg-white px-8 py-10 shadow-sm transition-transform duration-200',
					'lg:translate-x-0',
					isOpen ? 'translate-x-0' : '-translate-x-full',
				].join(' ')}
			>
				<div className='flex h-full flex-col'>
					<div>
						<Link
							href='/'
							className='inline-flex items-center gap-3 border-b border-zinc-200 pb-6'
						>
							<div className='h-8 w-8 rounded-sm border border-zinc-300 bg-zinc-100' />
							<div>
								<p className='text-sm font-semibold tracking-tight text-zinc-900'>
									FREEK.DEV
								</p>
								<p className='text-xs text-zinc-500'>Laravel / PHP / AI</p>
							</div>
						</Link>

						<nav className='mt-8'>
							<ul className='space-y-2'>
								{items.map((item) => {
									const isActive = item.href === activeHref

									return (
										<li key={item.href}>
											<Link
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={[
													'block rounded-md px-3 py-2 text-sm transition-colors',
													isActive
														? 'bg-zinc-900 text-white'
														: 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900',
												].join(' ')}
												aria-current={isActive ? 'page' : undefined}
											>
												{item.label}
											</Link>
										</li>
									)
								})}
							</ul>
						</nav>
					</div>

					<div className='mt-auto border-t border-zinc-200 pt-6'>
						<div className='space-y-2 text-sm'>
							<Link
								href='/search'
								className='block text-zinc-600 transition-colors hover:text-zinc-900'
							>
								Search
							</Link>
							<Link
								href='/advertising'
								className='block text-zinc-600 transition-colors hover:text-zinc-900'
							>
								Advertising
							</Link>
							<Link
								href='https://x.com'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900'
							>
								<XIcon />
								<span>X</span>
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}
