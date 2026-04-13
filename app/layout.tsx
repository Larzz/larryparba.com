import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AdSense from 'react-adsense';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Larry Parba',
	description: 'Personal website of Larry Parba',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${inter.variable} h-full antialiased`}>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-WKBDP55SD0"></script>
			<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-WKBDP55SD0');
			</script>
			<body className='min-h-full flex flex-col bg-zinc-50'>{children}</body>
		</html>
	)
}
