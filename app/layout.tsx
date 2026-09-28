import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geist = localFont({ src: '../public/fonts/geist.woff', variable: '--font-geist', display: 'swap' })
const spaceGrotesk = localFont({
	src: [
		{ path: '../public/fonts/space-grotesk-500.ttf', weight: '500' },
		{ path: '../public/fonts/space-grotesk-600.ttf', weight: '600' },
		{ path: '../public/fonts/space-grotesk-700.ttf', weight: '700' },
	],
	variable: '--font-space-grotesk',
	display: 'swap',
})
const jetBrainsMono = localFont({
	src: [
		{ path: '../public/fonts/jetbrains-mono-400.ttf', weight: '400' },
		{ path: '../public/fonts/jetbrains-mono-600.ttf', weight: '600' },
	],
	variable: '--font-jetbrains-mono',
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://larryparba.com'),
	title: 'Larry Parba — Full-Stack Engineer & Systems Consultant',
	description: 'Scalable web applications, production infrastructure, email systems, and AI automation by Larry Parba.',
	icons: {
		icon: '/favicon.ico',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Larry Parba | Full-Stack Engineer & Systems Consultant',
		description: 'Scalable web applications, production infrastructure, email systems, and AI automation by Larry Parba.',
		siteName: 'Larry Parba Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Larry Parba | Full-Stack Engineer & Systems Consultant',
		description: 'Scalable web applications, production infrastructure, email systems, and AI automation by Larry Parba.',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${geist.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var stored=localStorage.getItem('theme-preference');var hasStored=stored==='light'||stored==='dark';var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=hasStored?stored:(systemDark?'dark':'light');var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme)}catch(e){}})()`,
					}}
				/>

				{/* Favicon & Theme */}
				<link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
				<link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />
				<meta name='theme-color' content='#2563eb' />

			</head>

			<GoogleAnalytics gaId="G-WKBDP55SD0" />
			<GoogleTagManager gtmId="G-WKBDP55SD0" />
			<body className='flex min-h-full flex-col font-sans text-foreground'>
				{children}
			</body>
		</html>
	)
}
