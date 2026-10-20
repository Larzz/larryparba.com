import { clearAdminSession, isSameOrigin } from '@/lib/inquiry-auth'

export async function POST (request: Request) {
	if (!isSameOrigin(request)) return Response.json({ error: 'Request origin was not accepted.' }, { status: 403 })
	await clearAdminSession()
	return Response.json({ ok: true })
}
