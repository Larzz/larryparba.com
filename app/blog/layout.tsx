import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Engineering Blog | Larry Parba',
	description: 'Practical notes on full-stack engineering, architecture, infrastructure, and AI automation.',
	alternates: {
		canonical: '/blog',
		types: { 'application/rss+xml': '/rss.xml' },
	},
}

export default function BlogLayout ({ children }: { children: ReactNode }) {
	return children
}
