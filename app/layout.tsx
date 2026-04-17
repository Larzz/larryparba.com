import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Larry Parba | Laravel & Vue.js Web Developer | Available for Hire',
	description: 'Full-Stack Web Developer (Laravel, Vue.js, React) with 9+ years building scalable web apps, APIs & AI integrations. Open to remote roles worldwide',
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var stored=localStorage.getItem('theme-preference');var hasStored=stored==='light'||stored==='dark';var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=hasStored?stored:(systemDark?'dark':'light');var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme)}catch(e){}})()`,
					}}
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://larryparba.com/' />
				<meta property='og:title' content='Larry Parba | Full-Stack Web Developer' />
				<meta
					property='og:description'
					content='Building scalable Laravel + Vue.js systems that drive revenue, reduce costs, and scale to 10K+ users. Open to remote opportunities.'
				/>
				<meta property='og:image' content='https://larryparba.com/og-image.jpg' />
				<meta property='og:site_name' content='Larry Parba Portfolio' />

				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://larryparba.com/' />
				<meta property='twitter:title' content='Larry Parba | Full-Stack Web Developer' />
				<meta
					property='twitter:description'
					content='Laravel & Vue.js Web Developer | API Architecture | AI Integration | Open to remote roles'
				/>
				<meta property='twitter:image' content='https://larryparba.com/og-image.jpg' />

				{/* Favicon & Theme */}
				<link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
				<link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />
				<meta name='theme-color' content='#1a1a1a' />

				{/* Canonical */}
				<link rel='canonical' href='https://larryparba.com/' />
			</head>

			<GoogleAnalytics gaId="G-WKBDP55SD0" />
			<GoogleTagManager gtmId="G-WKBDP55SD0" />
			<body className='min-h-full flex flex-col text-foreground'>
				{children}
			</body>
		</html>
	)
}
