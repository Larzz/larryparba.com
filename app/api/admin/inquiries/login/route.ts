import { createAdminSession, adminAuthConfigured, isSameOrigin, requestIpHash, verifyAdminPassword } from '@/lib/inquiry-auth'
import { connectMongo } from '@/lib/mongoose'
import mongoose from 'mongoose'

export async function POST (request: Request) {
	if (!isSameOrigin(request)) return Response.json({ error: 'Request origin was not accepted.' }, { status: 403 })
	if (!adminAuthConfigured()) return Response.json({ error: 'Admin access is not configured.' }, { status: 503 })

	let password = ''
	try {
		const payload = await request.json() as { password?: unknown }
		password = typeof payload.password === 'string' ? payload.password : ''
	} catch {
		return Response.json({ error: 'The sign-in request could not be read.' }, { status: 400 })
	}

	await connectMongo()
	const collection = mongoose.connection.collection('inquiry_login_attempts')
	await collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 15 * 60 })
	const ipHash = requestIpHash(request)
	const windowStart = new Date(Date.now() - 15 * 60 * 1000)
	const attempts = await collection.countDocuments({ ipHash, createdAt: { $gte: windowStart } })
	if (attempts >= 8) return Response.json({ error: 'Too many sign-in attempts. Try again in 15 minutes.' }, { status: 429 })

	if (!verifyAdminPassword(password)) {
		await collection.insertOne({ ipHash, createdAt: new Date() })
		return Response.json({ error: 'Incorrect password.' }, { status: 401 })
	}

	await collection.deleteMany({ ipHash })
	await createAdminSession()
	return Response.json({ ok: true })
}
