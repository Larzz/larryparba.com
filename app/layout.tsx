import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
			<GoogleAnalytics gaId="G-WKBDP55SD0" />
			<GoogleTagManager gtmId="G-WKBDP55SD0" />
			<body className='min-h-full flex flex-col bg-zinc-50'>{children}</body>
		</html>
	)
}
