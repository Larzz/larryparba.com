import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'
import styles from '../pages.module.css'
import packageStyles from '../website-package/package.module.css'

export const metadata: Metadata = {
 title: 'Microsoft Business Email Plans & Pricing | Larry Parba',
 description: 'Compare Microsoft business email, Business Basic, and Business Standard. Compare package pricing in USD per user, per month.',
 alternates: { canonical: '/business-email' },
}

const serviceFee = 2
const emailPlans = [
	{ name: 'Exchange Online Plan 1', price: 4, fit: 'My starting recommendation for email only', detail: 'Custom-domain email, a 50 GB mailbox, calendar, and spam filtering.' },
	{ name: 'Exchange Online Plan 2', price: 8, fit: 'For larger mailboxes and compliance needs', detail: 'A 100 GB mailbox and built-in data loss prevention.' },
	{ name: 'Microsoft 365 Business Basic (no Teams)', price: 5.4, fit: 'Email plus everyday online work', detail: 'Business email and web/mobile Office apps, without Microsoft Teams.' },
	{ name: 'Microsoft 365 Business Basic', price: 7, fit: 'For a team that works together online', detail: 'Business email, web/mobile Office apps, and Teams chat and meetings. Desktop Office apps are not included.' },
	{ name: 'Microsoft 365 Business Standard', price: 14, fit: 'For teams that need desktop Office apps', detail: 'Business email, desktop, web, and mobile Office apps, 1 TB cloud storage per user, and Microsoft Teams.' },
]

export default function BusinessEmailPage () {
 return <SiteShell><div className={styles.page}>
  <section className={styles.hero}><div className={`${styles.container} ${styles.heroInner}`}>
   <div><span className={styles.kicker}>Microsoft business email</span><h1 className={styles.title}>Professional email.<br /><span>The right tools for your team.</span></h1><p className={styles.lead}>Compare email-only plans, Microsoft 365 Business Basic, and Business Standard. Choose the package that fits your team, with clear pricing per user, per month.</p><div className={styles.actions}><Link className={styles.primaryLink} href='/contact'>Discuss my email setup</Link><Link className={styles.secondaryLink} href='/website-package'>View website package</Link></div></div>
   <p className={styles.heroNote}><strong>Clear pricing in USD</strong>Package prices are per user, per month. Annual license billing applies; taxes are additional.</p>
  </div></section>
				<section id='email' className={styles.softSection} aria-labelledby='email-title'>
					<div className={styles.container}>
						<div className={styles.sectionHeading}><div><span className={styles.kicker}>An email that matches your business</span><h2 id='email-title'>Your name. Your domain. Microsoft email.</h2></div><p>Use an address such as hello@yourbusiness.com. Start with email only, or choose Microsoft 365 when your team also needs online work tools.</p></div>
						<div className={styles.cardGrid}>{emailPlans.map(plan => <article key={plan.name} className={styles.card}><span className={packageStyles.planFit}>{plan.fit}</span><h3>{plan.name}</h3><p><strong className={packageStyles.emailPrice}>${(plan.price + serviceFee).toFixed(2)}</strong> USD / user / month</p><p>${((plan.price + serviceFee) * 12).toFixed(2)} total per user over 12 months.</p><p>{plan.detail}</p></article>)}</div>
						<div className={`${styles.copyCard} ${packageStyles.note}`}><p>Package prices are based on Microsoft US annual license pricing checked October 27, 2026. Microsoft licenses are paid yearly and auto-renew. Taxes are extra; regional pricing, billing terms, and availability may differ. Microsoft subscriptions are recurring costs separate from the website fee.</p><p>I can help select a plan, connect your domain, and set up your mailboxes. Service scope, billing schedule, and any one-time setup or migration charges are confirmed in your proposal. We will confirm the number of users and the current price before ordering.</p><p><strong>For example:</strong> three Exchange Online Plan 1 users cost $18 USD per month equivalent, totaling $216 over 12 months before tax.</p></div>
					</div>
				</section>

 <section className={styles.section}><div className={styles.container}><div className={styles.sectionHeading}><div><span className={styles.kicker}>Ready to get started?</span><h2>Let’s set up your business email.</h2></div><p>Tell me your domain, number of users, and whether you need to move existing mailboxes.</p></div><Link href='/contact' className={styles.primaryLink}>Request an email proposal</Link></div></section>
 </div></SiteShell>
}
