'use client'

import { HalloweenLogo } from '@/components/site/halloween-logo'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './inquiry-admin.module.css'

export function AdminLogin ({ configured }: { configured: boolean }) {
	const router = useRouter()
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function submit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setLoading(true)
		setError('')
		try {
			const response = await fetch('/api/admin/inquiries/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ password }),
			})
			const result = await response.json() as { error?: string }
			if (!response.ok) {
				setError(result.error ?? 'Sign in failed.')
				setLoading(false)
				return
			}
			router.push('/admin/inquiries')
			router.refresh()
		} catch {
			setError('Sign in is unavailable right now.')
			setLoading(false)
		}
	}

	return (
		<main className={styles.loginPage}>
			<section className={styles.loginCard}>
				<HalloweenLogo><span className={styles.adminMark}>LP</span></HalloweenLogo>
				<span className={styles.eyebrow}>Private workspace</span>
				<h1>Customer inquiries</h1>
				<p>Sign in to read messages, update their status, and send replies.</p>
				{configured ? (
					<form onSubmit={submit}>
						<label>Admin password<input type='password' value={password} onChange={event => setPassword(event.target.value)} required autoComplete='current-password' autoFocus /></label>
						{error ? <p className={styles.formError} role='alert'>{error}</p> : null}
						<button type='submit' disabled={loading}>{loading ? 'Signing in…' : 'Open inquiry inbox'}</button>
					</form>
				) : (
					<div className={styles.configurationNotice}><strong>Admin access needs configuration.</strong><span>Add <code>INQUIRY_ADMIN_PASSWORD</code> and a 32+ character <code>INQUIRY_AUTH_SECRET</code> to the deployment environment.</span></div>
				)}
			</section>
		</main>
	)
}
