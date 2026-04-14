import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Larry Parba | Web Application Developer',
	description: 'Personal website of Larry Parba, a web application developer with a passion for building scalable and efficient web applications.',
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
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(){try{var stored=localStorage.getItem('theme-preference');var hasStored=stored==='light'||stored==='dark';var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=hasStored?stored:(systemDark?'dark':'light');var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme)}catch(e){}})()`,
				}}
			/>


			
			<GoogleAnalytics gaId="G-WKBDP55SD0" />
			<GoogleTagManager gtmId="G-WKBDP55SD0" />
			<body className='min-h-full flex flex-col bg-background text-foreground'>
				{children}
			</body>
		</html>
	)
}
