import { connectMongo } from '@/lib/mongoose'
import { requestIpHash, isSameOrigin } from '@/lib/inquiry-auth'
import { notifyAdminOfInquiry } from '@/lib/inquiry-email'
import { validateInquiry } from '@/lib/inquiry-validation'
import Inquiry from '@/models/Inquiry'

const MAX_INQUIRIES_PER_HOUR = 5

export async function POST (request: Request) {
	if (!isSameOrigin(request)) return Response.json({ error: 'Request origin was not accepted.' }, { status: 403 })

	let payload: unknown
	try {
		payload = await request.json()
	} catch {
		return Response.json({ error: 'The message could not be read.' }, { status: 400 })
	}

	const validation = validateInquiry(payload)
	if (!validation.ok || !validation.data) return Response.json({ error: 'Please check the highlighted fields.', errors: validation.errors }, { status: 400 })

	try {
		await connectMongo()
		const ipHash = requestIpHash(request)
		const recentCount = await Inquiry.countDocuments({ ipHash, createdAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) } })
		if (recentCount >= MAX_INQUIRIES_PER_HOUR) return Response.json({ error: 'Too many messages were sent from this connection. Please try again later.' }, { status: 429 })

		const { name, email, question, sourcePath } = validation.data
		const inquiry = await Inquiry.create({
			name,
			email,
			question,
			status: 'new',
			messages: [{ sender: 'visitor', body: question, createdAt: new Date() }],
			sourcePath,
			ipHash,
		})

		const notification = await notifyAdminOfInquiry({ name, email, question, id: inquiry.id })
		await Inquiry.updateOne({ _id: inquiry._id }, notification.sent
			? { $set: { 'emailNotification.adminNotifiedAt': new Date() }, $unset: { 'emailNotification.lastError': 1 } }
			: { $set: { 'emailNotification.lastError': notification.error } })

		return Response.json({ message: 'Thanks for your message! I’ll get back to you by email.' }, { status: 201 })
	} catch (error) {
		console.error('Unable to save inquiry', error)
		return Response.json({ error: 'Your message could not be sent right now. Please try again shortly.' }, { status: 500 })
	}
}
