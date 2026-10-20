import mongoose from 'mongoose'

import { isSameOrigin, requireAdmin } from '@/lib/inquiry-auth'
import { notifyVisitorOfReply } from '@/lib/inquiry-email'
import { validateReply } from '@/lib/inquiry-validation'
import { connectMongo } from '@/lib/mongoose'
import Inquiry from '@/models/Inquiry'

export async function POST (request: Request, context: RouteContext<'/api/admin/inquiries/[id]/replies'>) {
	if (!(await requireAdmin())) return Response.json({ error: 'Unauthorized.' }, { status: 401 })
	if (!isSameOrigin(request)) return Response.json({ error: 'Request origin was not accepted.' }, { status: 403 })
	const { id } = await context.params
	if (!mongoose.Types.ObjectId.isValid(id)) return Response.json({ error: 'Inquiry not found.' }, { status: 404 })

	let payload: unknown
	try {
		payload = await request.json()
	} catch {
		return Response.json({ error: 'The reply could not be read.' }, { status: 400 })
	}
	const validation = validateReply(payload)
	if (!validation.ok) return Response.json({ error: validation.error }, { status: 400 })

	await connectMongo()
	const inquiry = await Inquiry.findByIdAndUpdate(id, {
		$push: { messages: { sender: 'admin', body: validation.body, createdAt: new Date() } },
		$set: { status: 'in_progress' },
	}, { new: true })
	if (!inquiry) return Response.json({ error: 'Inquiry not found.' }, { status: 404 })

	const notification = await notifyVisitorOfReply({ name: inquiry.name, email: inquiry.email }, validation.body)
	await Inquiry.updateOne({ _id: inquiry._id }, notification.sent
		? { $set: { 'emailNotification.lastVisitorNotifiedAt': new Date() }, $unset: { 'emailNotification.lastError': 1 } }
		: { $set: { 'emailNotification.lastError': notification.error } })

	return Response.json({
		inquiry: { ...inquiry.toObject(), _id: String(inquiry._id) },
		emailSent: notification.sent,
		message: notification.sent ? 'Reply saved and emailed to the visitor.' : 'Reply saved, but email delivery is not configured or failed.',
	})
}
