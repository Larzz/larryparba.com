import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { profile } from '@/lib/resume-data'
import styles from '../pages.module.css'

export const metadata: Metadata = {
	title: 'Contact | Larry Parba',
	description: 'Discuss a web product, infrastructure challenge, email system, or AI automation project with Larry Parba.',
}

export default function ContactPage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div><span className={styles.kicker}>Direct access</span><h1 className={styles.title}>Let&apos;s make the next technical move <span>clear and actionable.</span></h1><p className={styles.lead}>Tell me what you are building, where the bottleneck is, or what needs to become more reliable.</p></div>
						<p className={styles.heroNote}><strong>Project or role inquiry</strong>Open to focused consulting, ongoing technical support, and the right full-time remote opportunities.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={`${styles.container} ${styles.contactGrid}`}>
						<div className={styles.formCard}>
							<h2>Tell me about the work</h2>
							<form className={styles.form} action='https://formspree.io/f/maqaeekl' method='POST'>
								<div className={styles.formRow}><label className={styles.field}>Your name<input required name='name' type='text' placeholder='e.g. Alex Henderson' /></label><label className={styles.field}>Work email<input required name='email' type='email' placeholder='alex@company.com' /></label></div>
								<label className={styles.field}>Project brief / challenge<textarea name='message' required rows={6} placeholder="What are you building, fixing, or trying to automate?" /></label>
								<button className={styles.submit} type='submit'>Request a consultation</button>
							</form>
						</div>
						<aside className={styles.sidebarCard}>
							<span className={styles.kicker}>Other channels</span><h2>Connect directly</h2>
							<div className={styles.contactList}><a href={`mailto:${profile.email}`}>{profile.email}</a><Link href={profile.github} target='_blank' rel='noreferrer'>GitHub · Larzz</Link><Link href={profile.linkedin} target='_blank' rel='noreferrer'>LinkedIn · Larry Parba</Link><Link href={profile.twitter} target='_blank' rel='noreferrer'>X · @Larry_Parba</Link><Link href='/cv'>View CV</Link></div>
							<p className={styles.availability}>Currently available for new projects and conversations about remote engineering roles.</p>
						</aside>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
