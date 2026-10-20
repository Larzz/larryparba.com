export const INQUIRY_STATUSES = ['new', 'in_progress', 'resolved'] as const
export type InquiryStatus = typeof INQUIRY_STATUSES[number]

interface InquiryInput {
	name: string
	email: string
	question: string
	companyWebsite: string
	startedAt: number
	sourcePath: string
}

interface ValidationResult {
	ok: boolean
	data?: InquiryInput
	errors?: Partial<Record<'name' | 'email' | 'question' | 'form', string>>
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function text (value: unknown) {
	return typeof value === 'string' ? value.trim() : ''
}

export function validateInquiry (value: unknown): ValidationResult {
	if (!value || typeof value !== 'object') return { ok: false, errors: { form: 'Please complete the form and try again.' } }

	const input = value as Record<string, unknown>
	const data: InquiryInput = {
		name: text(input.name),
		email: text(input.email).toLowerCase(),
		question: text(input.question),
		companyWebsite: text(input.companyWebsite),
		startedAt: typeof input.startedAt === 'number' ? input.startedAt : Number(input.startedAt),
		sourcePath: text(input.sourcePath).slice(0, 500),
	}
	const errors: NonNullable<ValidationResult['errors']> = {}

	if (data.name.length < 2 || data.name.length > 100) errors.name = 'Enter your name using 2–100 characters.'
	if (!emailPattern.test(data.email) || data.email.length > 254) errors.email = 'Enter a valid email address.'
	if (data.question.length < 10 || data.question.length > 5000) errors.question = 'Enter a question using 10–5,000 characters.'

	const age = Date.now() - data.startedAt
	if (data.companyWebsite || !Number.isFinite(age) || age < 1200 || age > 7_200_000) errors.form = 'Please refresh the page and try again.'
	if ((data.question.match(/https?:\/\//gi) ?? []).length > 3) errors.form = 'Please remove extra links and try again.'

	return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data }
}

export function validateReply (value: unknown) {
	if (!value || typeof value !== 'object') return { ok: false as const, error: 'Enter a reply.' }
	const body = text((value as Record<string, unknown>).body)
	if (body.length < 2 || body.length > 5000) return { ok: false as const, error: 'Reply must contain 2–5,000 characters.' }
	return { ok: true as const, body }
}

export function isInquiryStatus (value: unknown): value is InquiryStatus {
	return typeof value === 'string' && INQUIRY_STATUSES.includes(value as InquiryStatus)
}
