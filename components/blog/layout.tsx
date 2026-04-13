import { ReactNode } from 'react'

import { Sidebar } from './sidebar'

interface BlogLayoutProps {
	children: ReactNode
	rightSidebar: ReactNode
}

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Originals', href: '/originals' },
	{ label: 'Topics', href: '/topics' },
	{ label: 'Community', href: '/community' },
	{ label: 'Archive', href: '/archive' },
	{ label: 'Newsletter', href: '/newsletter' },
	{ label: 'Speaking', href: '/speaking' },
	{ label: 'Music', href: '/music' },
	{ label: 'Uses', href: '/uses' },
	{ label: 'About', href: '/about' },
]

export function Layout ({ children, rightSidebar }: BlogLayoutProps) {
	return (
		<div className='min-h-screen bg-zinc-50 text-zinc-900'>
			<Sidebar items={navItems} activeHref='/' />

			<div className='mx-auto max-w-[1500px] px-4 pb-12 pt-20 lg:pl-80 lg:pr-8 lg:pt-12'>
				<div className='grid grid-cols-1 gap-10 xl:grid-cols-[1fr_340px]'>
					<main>{children}</main>

					<aside className='space-y-6 border-t border-zinc-200 pt-8 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0'>
						{rightSidebar}
					</aside>
				</div>
			</div>
		</div>
	)
}
