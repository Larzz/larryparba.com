import { createHash, createHmac, timingSafeEqual } from 'node:crypto'

import { cookies } from 'next/headers'

const COOKIE_NAME = 'inquiry_admin_session'
const SESSION_LIFETIME_SECONDS = 60 * 60 * 12

function getAuthSecret () {
	return process.env.INQUIRY_AUTH_SECRET ?? ''
}

function signature (expiresAt: string) {
	return createHmac('sha256', getAuthSecret()).update(expiresAt).digest('base64url')
}

function safeEqual (left: string, right: string) {
	const a = Buffer.from(left)
	const b = Buffer.from(right)
	return a.length === b.length && timingSafeEqual(a, b)
}

export function adminAuthConfigured () {
	return Boolean(process.env.INQUIRY_ADMIN_PASSWORD && getAuthSecret().length >= 32)
}

export function verifyAdminPassword (password: string) {
	const expected = process.env.INQUIRY_ADMIN_PASSWORD ?? ''
	return adminAuthConfigured() && safeEqual(password, expected)
}

export async function createAdminSession () {
	const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS)
	const value = `${expiresAt}.${signature(expiresAt)}`
	const store = await cookies()
	store.set(COOKIE_NAME, value, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
		maxAge: SESSION_LIFETIME_SECONDS,
	})
}

export async function clearAdminSession () {
	const store = await cookies()
	store.delete(COOKIE_NAME)
}

export async function isAdminAuthenticated () {
	if (!adminAuthConfigured()) return false
	const value = (await cookies()).get(COOKIE_NAME)?.value
	if (!value) return false

	const [expiresAt, suppliedSignature] = value.split('.')
	if (!expiresAt || !suppliedSignature || Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false
	return safeEqual(suppliedSignature, signature(expiresAt))
}

export async function requireAdmin () {
	return isAdminAuthenticated()
}

export function isSameOrigin (request: Request) {
	const origin = request.headers.get('origin')
	if (!origin) return false
	const requestOrigin = new URL(request.url).origin
	const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
	return origin === requestOrigin || Boolean(configuredOrigin && origin === configuredOrigin)
}

export function requestIpHash (request: Request) {
	const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
	const ip = forwarded || request.headers.get('x-real-ip') || 'unknown'
	const salt = process.env.INQUIRY_IP_HASH_SECRET || getAuthSecret() || process.env.MONGODB_URI || 'inquiry-rate-limit'
	return createHash('sha256').update(`${salt}:${ip}`).digest('hex')
}
