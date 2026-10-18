import type { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
	return {
		name: 'Larry Parba — Full-Stack Engineer & Systems Consultant',
		short_name: 'Larry Parba',
		description: 'Scalable web applications, production infrastructure, email systems, and AI automation by Larry Parba.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#2563eb',
		icons: [
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
