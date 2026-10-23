'use client'

import { HalloweenLogo } from '@/components/site/halloween-logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faEnvelope, faPaperPlane, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { InquiryStatus } from '@/lib/inquiry-validation'
import styles from './inquiry-admin.module.css'

interface InquiryMessage {
	_id?: string
	sender: 'visitor' | 'admin'
	body: string
	createdAt: string
}

interface Inquiry {
	_id: string
	name: string
	email: string
	question: string
	status: InquiryStatus
	messages: InquiryMessage[]
	sourcePath?: string
	createdAt: string
	updatedAt: string
}

const statusLabels: Record<InquiryStatus, string> = { new: 'New', in_progress: 'In Progress', resolved: 'Resolved' }

function formatDate (value: string) {
	return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

export function InquiryAdmin () {
	const router = useRouter()
	const [inquiries, setInquiries] = useState<Inquiry[]>([])
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const [filter, setFilter] = useState<'all' | InquiryStatus>('all')
	const [loading, setLoading] = useState(true)
	const [working, setWorking] = useState(false)
	const [error, setError] = useState('')
	const [notice, setNotice] = useState('')
	const [reply, setReply] = useState('')

	const loadInquiries = useCallback(async () => {
		setLoading(true)
		setError('')
		try {
			const response = await fetch('/api/admin/inquiries', { cache: 'no-store' })
			if (response.status === 401) {
				router.push('/admin/inquiries/login')
				return
			}
			const result = await response.json() as { inquiries?: Inquiry[], error?: string }
			if (!response.ok) throw new Error(result.error ?? 'Inquiries could not be loaded.')
			setInquiries(result.inquiries ?? [])
			setSelectedId(current => current && result.inquiries?.some(item => item._id === current) ? current : result.inquiries?.[0]?._id ?? null)
		} catch (loadError) {
			setError(loadError instanceof Error ? loadError.message : 'Inquiries could not be loaded.')
		} finally {
			setLoading(false)
		}
	}, [router])

	useEffect(() => { void loadInquiries() }, [loadInquiries])

	const counts = useMemo(() => ({
		all: inquiries.length,
		new: inquiries.filter(inquiry => inquiry.status === 'new').length,
		in_progress: inquiries.filter(inquiry => inquiry.status === 'in_progress').length,
		resolved: inquiries.filter(inquiry => inquiry.status === 'resolved').length,
	}), [inquiries])
	const visible = filter === 'all' ? inquiries : inquiries.filter(inquiry => inquiry.status === filter)
	const selected = inquiries.find(inquiry => inquiry._id === selectedId) ?? null

	async function updateStatus (status: InquiryStatus) {
		if (!selected) return
		setWorking(true)
		setError('')
		setNotice('')
		try {
			const response = await fetch(`/api/admin/inquiries/${selected._id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
			const result = await response.json() as { inquiry?: Inquiry, error?: string }
			if (!response.ok || !result.inquiry) throw new Error(result.error ?? 'Status could not be updated.')
			setInquiries(items => items.map(item => item._id === selected._id ? result.inquiry as Inquiry : item))
			setNotice(`Status changed to ${statusLabels[status]}.`)
		} catch (updateError) {
			setError(updateError instanceof Error ? updateError.message : 'Status could not be updated.')
		} finally {
			setWorking(false)
		}
	}

	async function sendReply (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (!selected) return
		setWorking(true)
		setError('')
		setNotice('')
		try {
			const response = await fetch(`/api/admin/inquiries/${selected._id}/replies`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: reply }) })
			const result = await response.json() as { inquiry?: Inquiry, error?: string, message?: string }
			if (!response.ok || !result.inquiry) throw new Error(result.error ?? 'Reply could not be sent.')
			setInquiries(items => items.map(item => item._id === selected._id ? result.inquiry as Inquiry : item))
			setReply('')
			setNotice(result.message ?? 'Reply saved.')
		} catch (replyError) {
			setError(replyError instanceof Error ? replyError.message : 'Reply could not be sent.')
		} finally {
			setWorking(false)
		}
	}

	async function logout () {
		await fetch('/api/admin/inquiries/logout', { method: 'POST' })
		router.push('/admin/inquiries/login')
		router.refresh()
	}

	return (
		<main className={styles.adminPage}>
			<header className={styles.adminHeader}>
				<div><HalloweenLogo><span className={styles.adminMark}>LP</span></HalloweenLogo><div><span>Private workspace</span><h1>Customer inquiries</h1></div></div>
				<div><button type='button' onClick={() => void loadInquiries()} disabled={loading} aria-label='Refresh inquiries'><FontAwesomeIcon icon={faRotate} /> Refresh</button><button type='button' onClick={() => void logout()}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign out</button></div>
			</header>

			<div className={styles.dashboard}>
				<aside className={styles.inbox}>
					<div className={styles.filters}>
						{(['all', 'new', 'in_progress', 'resolved'] as const).map(status => <button type='button' key={status} className={filter === status ? styles.activeFilter : ''} onClick={() => setFilter(status)}>{status === 'all' ? 'All' : statusLabels[status]} <span>{counts[status]}</span></button>)}
					</div>
					<div className={styles.inquiryList}>
						{loading ? <div className={styles.listState}>Loading inquiries…</div> : null}
						{!loading && error && inquiries.length === 0 ? <div className={styles.listState}>{error}</div> : null}
						{!loading && visible.length === 0 ? <div className={styles.listState}>No {filter === 'all' ? '' : statusLabels[filter].toLowerCase()} inquiries yet.</div> : null}
						{visible.map(inquiry => <button type='button' key={inquiry._id} className={`${styles.inquiryItem} ${selectedId === inquiry._id ? styles.selectedItem : ''}`} onClick={() => { setSelectedId(inquiry._id); setNotice(''); setError('') }}><span className={`${styles.statusDot} ${styles[inquiry.status]}`} /><span><strong>{inquiry.name}</strong><small>{inquiry.email}</small><p>{inquiry.question}</p><time>{formatDate(inquiry.createdAt)}</time></span></button>)}
					</div>
				</aside>

				<section className={styles.conversation}>
					{selected ? (
						<>
							<div className={styles.conversationHeader}>
								<div><span>Conversation with</span><h2>{selected.name}</h2><a href={`mailto:${selected.email}`}>{selected.email}</a></div>
								<label>Status<select value={selected.status} onChange={event => void updateStatus(event.target.value as InquiryStatus)} disabled={working}>{Object.entries(statusLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
							</div>
							<div className={styles.metadata}><span>Received {formatDate(selected.createdAt)}</span>{selected.sourcePath ? <span>From {selected.sourcePath}</span> : null}</div>
							<div className={styles.messages}>
								{selected.messages.map((message, index) => <div key={message._id ?? `${message.createdAt}-${index}`} className={`${styles.message} ${message.sender === 'admin' ? styles.adminMessage : ''}`}><strong>{message.sender === 'admin' ? 'You' : selected.name}</strong><p>{message.body}</p><time>{formatDate(message.createdAt)}</time></div>)}
							</div>
							<form className={styles.replyForm} onSubmit={sendReply}>
								<label htmlFor='reply'>Reply by email</label>
								<textarea id='reply' value={reply} onChange={event => setReply(event.target.value)} minLength={2} maxLength={5000} rows={5} required placeholder={`Write a reply to ${selected.name}…`} />
								{error ? <p className={styles.formError} role='alert'>{error}</p> : null}
								{notice ? <p className={styles.formNotice} role='status'>{notice}</p> : null}
								<div><span>The reply is saved to this conversation and emailed to {selected.email}.</span><button type='submit' disabled={working || reply.trim().length < 2}>{working ? 'Working…' : <><FontAwesomeIcon icon={faPaperPlane} /> Send reply</>}</button></div>
							</form>
						</>
					) : <div className={styles.emptyConversation}><FontAwesomeIcon icon={faEnvelope} /><h2>Select an inquiry</h2><p>Choose a customer message to view the conversation and reply.</p></div>}
				</section>
			</div>
		</main>
	)
}
