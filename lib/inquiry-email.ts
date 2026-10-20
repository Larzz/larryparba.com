import { profile } from '@/lib/resume-data'

interface EmailMessage {
	to: string
	subject: string
	html: string
	replyTo?: string
}

function escapeHtml (value: string) {
	return value.replace(/[&<>'"]/g, character => ({
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		"'": '&#39;',
		'"': '&quot;',
	}[character] ?? character))
}

function paragraphs (value: string) {
	return escapeHtml(value).split(/\n{2,}/).map(paragraph => `<p style="margin:0 0 16px;line-height:1.7">${paragraph.replace(/\n/g, '<br>')}</p>`).join('')
}

async function sendEmail ({ to, subject, html, replyTo }: EmailMessage) {
	const apiKey = process.env.RESEND_API_KEY
	const from = process.env.INQUIRY_FROM_EMAIL
	if (!apiKey || !from) return { sent: false, error: 'Email delivery is not configured.' }

	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({ from, to: [to], subject, html, reply_to: replyTo }),
		})
		if (!response.ok) return { sent: false, error: `Email provider returned ${response.status}.` }
		return { sent: true }
	} catch {
		return { sent: false, error: 'Email provider could not be reached.' }
	}
}

function emailFrame (content: string) {
	return `<div style="background:#f8fafc;padding:32px 16px;font-family:Arial,sans-serif;color:#1e293b"><div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:30px"><div style="color:#0369a1;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:18px">Larry Parba</div>${content}</div></div>`
}

export function notifyAdminOfInquiry (inquiry: { name: string, email: string, question: string, id: string }) {
	const adminEmail = process.env.INQUIRY_ADMIN_EMAIL ?? profile.email
	const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://larryparba.com'}/admin/inquiries`
	return sendEmail({
		to: adminEmail,
		replyTo: inquiry.email,
		subject: `New website inquiry from ${inquiry.name}`,
		html: emailFrame(`<h1 style="font-size:24px;margin:0 0 18px;color:#0f172a">New customer inquiry</h1><p style="margin:0 0 8px"><strong>From:</strong> ${escapeHtml(inquiry.name)} &lt;${escapeHtml(inquiry.email)}&gt;</p><div style="margin:22px 0;padding:18px;background:#f0f9ff;border-left:3px solid #0ea5e9">${paragraphs(inquiry.question)}</div><a href="${adminUrl}" style="display:inline-block;background:#0284c7;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700">Open inquiry inbox</a>`),
	})
}

export function notifyVisitorOfReply (inquiry: { name: string, email: string }, reply: string) {
	const adminEmail = process.env.INQUIRY_ADMIN_EMAIL ?? profile.email
	return sendEmail({
		to: inquiry.email,
		replyTo: adminEmail,
		subject: 'A reply to your message for Larry Parba',
		html: emailFrame(`<h1 style="font-size:24px;margin:0 0 18px;color:#0f172a">Hi ${escapeHtml(inquiry.name)},</h1><p style="margin:0 0 18px;line-height:1.7">Thanks for reaching out. Here’s my reply:</p><div style="margin:22px 0;padding:18px;background:#f0f9ff;border-left:3px solid #0ea5e9">${paragraphs(reply)}</div><p style="margin:22px 0 0;line-height:1.7">You can reply directly to this email if you’d like to continue the conversation.</p>`),
	})
}
