import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { InquiryAdmin } from '@/components/inquiry/inquiry-admin'
import { isAdminAuthenticated } from '@/lib/inquiry-auth'

export const metadata: Metadata = { title: 'Customer Inquiries | Larry Parba', robots: { index: false, follow: false } }

export default async function InquiryAdminPage () {
	if (!(await isAdminAuthenticated())) redirect('/admin/inquiries/login')
	return <InquiryAdmin />
}
