import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'
import styles from '../pages.module.css'
import packageStyles from '../website-package/package.module.css'

export const metadata: Metadata = {
 title: 'Business Email Plans & Pricing | Larry Parba',
 description: 'Compare Microsoft 365 and Google Workspace business email plans with package pricing in USD per user, per month.',
 alternates: { canonical: '/business-email' },
}

const microsoftPlans = [
	{ name: 'Exchange Online Plan 1', price: 6, fit: 'My starting recommendation for email only', detail: 'Custom-domain email, a 50 GB mailbox, calendar, and spam filtering.' },
	{ name: 'Exchange Online Plan 2', price: 10, fit: 'For larger mailboxes and compliance needs', detail: 'A 100 GB mailbox and built-in data loss prevention.' },
	{ name: 'Microsoft 365 Business Basic (no Teams)', price: 7.4, fit: 'Email plus everyday online work', detail: 'Business email and web/mobile Office apps, without Microsoft Teams.' },
	{ name: 'Microsoft 365 Business Basic', price: 9, fit: 'For a team that works together online', detail: 'Business email, web/mobile Office apps, and Teams chat and meetings. Desktop Office apps are not included.' },
	{ name: 'Microsoft 365 Business Standard', price: 16, fit: 'For teams that need desktop Office apps', detail: 'Business email, desktop, web, and mobile Office apps, 1 TB cloud storage per user, and Microsoft Teams.' },
]

const googleWorkspacePlans = [
	{ name: 'Google Workspace Business Starter', price: 9, fit: 'For small teams starting with Google', detail: 'Custom business email, 30 GB pooled storage per user, Google Docs, Meet for up to 100 participants, and Gemini in Gmail.' },
	{ name: 'Google Workspace Business Standard', price: 16, fit: 'For growing teams that need more storage', detail: 'Custom business email, 2 TB pooled storage per user, meeting recording for up to 150 participants, mail merge, and Gemini across more Workspace apps.' },
	{ name: 'Google Workspace Business Plus', price: 24, fit: 'For advanced security and compliance', detail: 'Custom business email, 5 TB pooled storage per user, meetings for up to 500 participants, Google Vault, eDiscovery, and enhanced security controls.' },
]

function PlanGrid ({ plans }: { plans: Array<{ name: string, price: number, fit: string, detail: string }> }) {
	return <div className={styles.cardGrid}>{plans.map(plan => <article key={plan.name} className={styles.card}><span className={packageStyles.planFit}>{plan.fit}</span><h3>{plan.name}</h3><p><strong className={packageStyles.emailPrice}>${plan.price.toFixed(2)}</strong> USD / user / month</p><p>${(plan.price * 12).toFixed(2)} total per user over 12 months.</p><p>{plan.detail}</p></article>)}</div>
}

export default function BusinessEmailPage () {
 return <SiteShell><div className={styles.page}>
  <section className={styles.hero}><div className={`${styles.container} ${styles.heroInner}`}>
   <div><span className={styles.kicker}>Business email, your way</span><h1 className={styles.title}>Professional email.<br /><span>The right tools for your team.</span></h1><p className={styles.lead}>Choose Microsoft 365 or Google Workspace for custom-domain email and the productivity tools your team already prefers.</p><div className={styles.actions}><Link className={styles.primaryLink} href='/contact'>Discuss my email setup</Link><Link className={styles.secondaryLink} href='/website-package'>View website package</Link></div></div>
   <p className={styles.heroNote}><strong>Clear pricing in USD</strong>Package prices are per user, per month and use annual-commitment license pricing. Taxes are additional.</p>
  </div></section>
				<section id='email' className={styles.softSection} aria-labelledby='email-title'>
					<div className={styles.container}>
						<div className={styles.sectionHeading}><div><span className={styles.kicker}>An email that matches your business</span><h2 id='email-title'>Your name. Your domain. Your preferred platform.</h2></div><p>Use an address such as hello@yourbusiness.com with Microsoft 365 or Google Workspace. I can help you choose based on the apps, storage, meetings, and controls your team needs.</p></div>
						<section className={packageStyles.providerSection} aria-labelledby='microsoft-plans-title'>
							<div className={packageStyles.providerHeading}><span>Microsoft</span><h3 id='microsoft-plans-title'>Microsoft 365 &amp; Exchange</h3><p>Best for teams that prefer Outlook, Office, OneDrive, and Teams.</p></div>
							<PlanGrid plans={microsoftPlans} />
						</section>
						<section className={packageStyles.providerSection} aria-labelledby='google-plans-title'>
							<div className={packageStyles.providerHeading}><span>Google</span><h3 id='google-plans-title'>Google Workspace</h3><p>Best for teams that prefer Gmail, Drive, Docs, Meet, and Google&apos;s collaboration tools.</p></div>
							<PlanGrid plans={googleWorkspacePlans} />
						</section>
						<div className={`${styles.copyCard} ${packageStyles.note}`}><p>Package prices use annual-commitment subscriptions and were checked October 27, 2026. Provider subscriptions renew automatically. Taxes are extra; regional pricing, promotional offers, billing terms, and availability may differ. Microsoft 365 and Google Workspace subscriptions are recurring costs separate from the website fee.</p><p>I can help select a provider and plan, connect your domain, configure email security records, and set up your mailboxes. Service scope, billing schedule, and any one-time setup or migration charges are confirmed in your proposal. We will confirm the number of users and current package price before ordering.</p><p><strong>For example:</strong> three Exchange Online Plan 1 users cost $18 USD per month equivalent, while three Google Workspace Business Starter users cost $27 USD per month. That totals $216 or $324 respectively over 12 months before tax.</p></div>
					</div>
				</section>

 <section className={styles.section}><div className={styles.container}><div className={styles.sectionHeading}><div><span className={styles.kicker}>Ready to get started?</span><h2>Let’s set up your business email.</h2></div><p>Tell me your domain, number of users, and whether you need to move existing mailboxes.</p></div><Link href='/contact' className={styles.primaryLink}>Request an email proposal</Link></div></section>
 </div></SiteShell>
}
