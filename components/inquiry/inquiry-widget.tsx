'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCommentDots, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from './inquiry-widget.module.css'

interface FieldErrors {
	name?: string
	email?: string
	question?: string
	form?: string
}

const confirmation = 'Thanks for your message! I’ll get back to you by email.'

export function InquiryWidget () {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)
	const [startedAt, setStartedAt] = useState(() => Date.now())
	const [state, setState] = useState<'idle' | 'submitting' | 'success'>('idle')
	const [error, setError] = useState('')
	const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
	const panelRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!open) return
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setOpen(false)
		}
		document.addEventListener('keydown', onKeyDown)
		return () => document.removeEventListener('keydown', onKeyDown)
	}, [open])

	function togglePanel () {
		setOpen(current => {
			if (!current && state === 'idle') setStartedAt(Date.now())
			return !current
		})
	}

	async function submitInquiry (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setState('submitting')
		setError('')
		setFieldErrors({})

		const form = event.currentTarget
		const formData = new FormData(form)
		try {
			const response = await fetch('/api/inquiries', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.get('name'),
					email: formData.get('email'),
					question: formData.get('question'),
					companyWebsite: formData.get('companyWebsite'),
					startedAt,
					sourcePath: pathname,
				}),
			})
			const result = await response.json() as { message?: string, error?: string, errors?: FieldErrors }
			if (!response.ok) {
				setFieldErrors(result.errors ?? {})
				setError(result.error ?? 'Your message could not be sent. Please try again.')
				setState('idle')
				return
			}

			form.reset()
			setState('success')
		} catch {
			setError('Your message could not be sent. Check your connection and try again.')
			setState('idle')
		}
	}

	function startAnother () {
		setStartedAt(Date.now())
		setState('idle')
		setError('')
		setFieldErrors({})
	}

	return (
		<div className={styles.widget}>
			{open ? (
				<div className={styles.panel} ref={panelRef} role='dialog' aria-modal='false' aria-labelledby='inquiry-title'>
					<div className={styles.header}>
						<div className={styles.avatar} aria-hidden='true'>LP</div>
						<div><h2 id='inquiry-title'>Send Larry a message</h2><span><i />Usually replies by email</span></div>
						<button type='button' className={styles.close} onClick={() => setOpen(false)} aria-label='Close inquiry form'><FontAwesomeIcon icon={faXmark} /></button>
					</div>

					{state === 'success' ? (
						<div className={styles.success} role='status'>
							<div className={styles.successIcon}><FontAwesomeIcon icon={faCheck} /></div>
							<h3>Message received</h3>
							<p>{confirmation}</p>
							<button type='button' onClick={startAnother}>Send another message</button>
						</div>
					) : (
						<form className={styles.form} onSubmit={submitInquiry} noValidate>
							<p className={styles.greeting}>Hi! Have a question or a project in mind? Leave me a message.</p>
							<label>Name<input name='name' type='text' required minLength={2} maxLength={100} autoComplete='name' placeholder='Your name' aria-invalid={Boolean(fieldErrors.name)} />{fieldErrors.name ? <span className={styles.fieldError}>{fieldErrors.name}</span> : null}</label>
							<label>Email address<input name='email' type='email' required maxLength={254} autoComplete='email' inputMode='email' placeholder='you@company.com' aria-invalid={Boolean(fieldErrors.email)} />{fieldErrors.email ? <span className={styles.fieldError}>{fieldErrors.email}</span> : null}</label>
							<label>How can I help?<textarea name='question' required minLength={10} maxLength={5000} rows={4} placeholder='Tell me about your question, project, or challenge…' aria-invalid={Boolean(fieldErrors.question)} />{fieldErrors.question ? <span className={styles.fieldError}>{fieldErrors.question}</span> : null}</label>
							<label className={styles.honeypot} aria-hidden='true'>Company website<input name='companyWebsite' tabIndex={-1} autoComplete='off' /></label>
							{error ? <p className={styles.error} role='alert'>{fieldErrors.form ?? error}</p> : null}
							<button className={styles.submit} type='submit' disabled={state === 'submitting'}>{state === 'submitting' ? <><span className={styles.spinner} />Sending…</> : <>Send message <FontAwesomeIcon icon={faPaperPlane} /></>}</button>
							<p className={styles.privacy}>Your details are used only to respond to this inquiry.</p>
						</form>
					)}
				</div>
			) : null}

			<button type='button' className={`${styles.launcher} ${open ? styles.launcherOpen : ''}`} onClick={togglePanel} aria-label={open ? 'Close inquiry form' : 'Ask a question or discuss a project'} aria-expanded={open}>
				<FontAwesomeIcon icon={open ? faXmark : faCommentDots} />
				{!open ? <span>Ask a question</span> : null}
			</button>
		</div>
	)
}
