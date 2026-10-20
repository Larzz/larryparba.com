import mongoose from 'mongoose'

import { isSameOrigin, requireAdmin } from '@/lib/inquiry-auth'
import { isInquiryStatus } from '@/lib/inquiry-validation'
import { connectMongo } from '@/lib/mongoose'
import Inquiry from '@/models/Inquiry'

export async function PATCH (request: Request, context: RouteContext<'/api/admin/inquiries/[id]'>) {
	if (!(await requireAdmin())) return Response.json({ error: 'Unauthorized.' }, { status: 401 })
	if (!isSameOrigin(request)) return Response.json({ error: 'Request origin was not accepted.' }, { status: 403 })
	const { id } = await context.params
	if (!mongoose.Types.ObjectId.isValid(id)) return Response.json({ error: 'Inquiry not found.' }, { status: 404 })

	let status: unknown
	try {
		status = (await request.json() as { status?: unknown }).status
	} catch {
		return Response.json({ error: 'The update could not be read.' }, { status: 400 })
	}
	if (!isInquiryStatus(status)) return Response.json({ error: 'Choose a valid status.' }, { status: 400 })

	await connectMongo()
	const inquiry = await Inquiry.findByIdAndUpdate(id, { $set: { status } }, { new: true }).lean()
	if (!inquiry) return Response.json({ error: 'Inquiry not found.' }, { status: 404 })
	return Response.json({ inquiry: { ...inquiry, _id: String(inquiry._id) } })
}
