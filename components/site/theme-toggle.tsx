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
			className='inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
			aria-label='Toggle light and dark mode'
		>
			{isMounted && theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		</button>
	)
}
