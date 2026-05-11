'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'theme-preference'

function applyTheme (theme: Theme) {
	const root = document.documentElement
	root.classList.remove('light', 'dark')
	root.classList.add(theme)
}

export function ThemeToggle () {
	const [theme, setTheme] = useState<Theme>('light')
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		const root = document.documentElement
		const hasDark = root.classList.contains('dark')
		const hasLight = root.classList.contains('light')
		const nextTheme = hasDark ? 'dark' : hasLight ? 'light' : 'light'
		setTheme(nextTheme)
		setIsMounted(true)
	}, [])

	function handleToggleTheme () {
		const nextTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(nextTheme)
		applyTheme(nextTheme)
		window.localStorage.setItem(storageKey, nextTheme)
	}

	return (
		<button
			type='button'
			onClick={handleToggleTheme}
			className='inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-100'
			aria-label={
				isMounted && theme === 'dark'
					? 'Switch to light mode'
					: 'Switch to dark mode'
			}
		>
			<span aria-hidden='true' className='text-base leading-none'>
				{isMounted && theme === 'dark' ? '☀️' : '🌙'}
			</span>
		</button>
	)
}
