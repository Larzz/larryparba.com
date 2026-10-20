import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { AdminLogin } from '@/components/inquiry/admin-login'
import { adminAuthConfigured, isAdminAuthenticated } from '@/lib/inquiry-auth'

export const metadata: Metadata = { title: 'Inquiry Admin | Larry Parba', robots: { index: false, follow: false } }

export default async function InquiryLoginPage () {
	if (await isAdminAuthenticated()) redirect('/admin/inquiries')
	return <AdminLogin configured={adminAuthConfigured()} />
}
