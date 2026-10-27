import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import styles from '../pages.module.css'
import packageStyles from './package.module.css'

export const metadata: Metadata = {
	title: 'Business Website Package & Support | Larry Parba',
	description: 'Business websites from AED 5,000, including free hosting, 12 months of maintenance and bug support, and training.',
	alternates: { canonical: '/website-package' },
}

const inclusions = [
	{ title: 'A website built around your business', copy: 'A responsive design that introduces your business, explains your services, and helps visitors contact you. We agree the pages, content, and features before work begins.' },
	{ title: 'The essentials for launch', copy: 'Mobile-friendly layouts, a contact or inquiry form, basic search metadata, and checks for navigation and forms. Free hosting is included for the first 12 months, with domain connection and launch configuration. Hosting continues at no extra charge with your paid monthly care plan after the first year.' },
	{ title: '12 months of maintenance', copy: 'Routine checks, updates, and upkeep within the agreed project scope, starting from launch. We confirm the maintenance tasks in your proposal.' },
	{ title: '12 months of bug support', copy: 'If a feature I delivered does not work as agreed, I will fix it at no extra cost during the 12 months after launch. Both support periods run alongside each other.' },
	{ title: 'Training and a basic user guide', copy: 'An onboarding walkthrough for you and your team, plus practical instructions for the tasks you need to handle. You can ask questions about your website and its setup.' },
	{ title: 'A partner after launch', copy: 'A follow-up check-in once you have used the website, technical guidance, and clear quotes for future improvements. After the first 12 months, maintenance and bug support continue on a paid monthly care plan with hosting included. The monthly rate and scope are agreed before renewal.' },
]


export default function WebsitePackagePage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div>
							<span className={styles.kicker}>Your business, online</span>
							<h1 className={styles.title}>A website for your business.<br /><span>Support to make it work.</span></h1>
							<p className={styles.lead}>Know what you receive, what it costs, and who to turn to after launch. I build your website and help you feel confident using it.</p>
							<div className={styles.actions}><Link className={styles.primaryLink} href='/contact'>Discuss my website</Link><Link className={styles.secondaryLink} href='/business-email'>Compare business email</Link></div>
						</div>
						<aside className={styles.signalCard} aria-label='Website starting price'>
							<small>Initial business website · from</small>
							<strong>AED 5,000</strong>
							<p>One-time website project fee. Final scope and pricing are confirmed in your proposal.</p>
							<div className={styles.signalList}><span>Design, development &amp; launch</span><span>Free hosting included</span><span>12 months of maintenance</span><span>12 months of bug support</span></div>
						</aside>
					</div>
				</section>

				<section className={styles.section} aria-labelledby='included-title'>
					<div className={styles.container}>
						<div className={styles.sectionHeading}><div><span className={styles.kicker}>What you receive</span><h2 id='included-title'>More than a launch day.</h2></div><p>A clear foundation for a business website, with practical help before and after it goes live.</p></div>
						<div className={styles.threeGrid}>{inclusions.map((item, index) => <article key={item.title} className={styles.card}><span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
						<div className={`${styles.copyCard} ${packageStyles.note}`}><p><strong>Agreed before we start.</strong> Page count, content responsibilities, revisions, and delivery dates are set out in your proposal. E-commerce, booking systems, custom integrations, and additional features are quoted to match the work involved.</p><p>Domain renewals, Microsoft email licenses, other paid services, and any applicable taxes are itemized separately unless your proposal includes them. Branded materials such as a brand guide, calling card, or document template can be scoped with your project.</p></div>
					</div>
				</section>


				<section className={styles.softSection}><div className={styles.container}><div className={styles.sectionHeading}><div><span className={styles.kicker}>From launch onward</span><h2>Your first year is covered.</h2></div><p>12 months of maintenance, 12 months of bug support, and free hosting are included from launch.</p></div><div className={styles.copyCard}><p><strong>From month 13:</strong> continue with a paid monthly care plan for maintenance and bug support, with hosting included at no extra charge. We agree the monthly price, support scope, and hosting requirements before renewal.</p><p>New features and work outside the original agreement are quoted separately.</p></div></div></section>

				<section className={styles.section}>
					<div className={styles.container}>
						<div className={styles.sectionHeading}><div><span className={styles.kicker}>Let’s plan your website</span><h2>Tell me what your business needs.</h2></div><p>Share your business type, the pages or features you have in mind, and how many people need email. I will help you define a clear scope.</p></div>
						<div className={styles.actions}><Link href='/contact' className={styles.primaryLink}>Request a website proposal</Link><Link href='/projects' className={styles.secondaryLink}>See my work</Link></div>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
