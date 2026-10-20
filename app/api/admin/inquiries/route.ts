import { requireAdmin } from '@/lib/inquiry-auth'
import { connectMongo } from '@/lib/mongoose'
import Inquiry from '@/models/Inquiry'

function serializeInquiry (inquiry: Record<string, unknown>) {
	return { ...inquiry, _id: String(inquiry._id) }
}

export async function GET () {
	if (!(await requireAdmin())) return Response.json({ error: 'Unauthorized.' }, { status: 401 })

	try {
		await connectMongo()
		const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(250).lean()
		return Response.json({ inquiries: inquiries.map(inquiry => serializeInquiry(inquiry as unknown as Record<string, unknown>)) }, { headers: { 'Cache-Control': 'no-store' } })
	} catch (error) {
		console.error('Unable to load inquiries', error)
		return Response.json({ error: 'Inquiries could not be loaded.' }, { status: 500 })
	}
}
