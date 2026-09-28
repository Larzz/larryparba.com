import type { Metadata } from 'next'
import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { skills } from '@/lib/resume-data'
import styles from '../pages.module.css'

export const metadata: Metadata = {
	title: 'Services | Larry Parba',
	description: 'Full-stack development, backend architecture, DevOps, integrations, and AI automation services.',
}

const serviceSections = [
	{ title: 'Backend Architecture', summary: 'Scalable APIs, business logic, and production-ready application foundations.', items: skills.backend },
	{ title: 'Frontend Engineering', summary: 'Responsive component systems that stay fast, clear, and maintainable.', items: skills.frontend },
	{ title: 'Data Systems', summary: 'Well-structured storage, query optimization, and resilient data workflows.', items: skills.database },
	{ title: 'AI & Automation', summary: 'Useful AI integrations and automated pipelines built around real operations.', items: skills.ai },
	{ title: 'DevOps & Infrastructure', summary: 'Reliable deployments, servers, DNS, observability, and production support.', items: skills.devops },
	{ title: 'Business Integrations', summary: 'Payment, communications, analytics, shipping, and third-party APIs.', items: skills.integrations },
]

export default function ServicesPage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div><span className={styles.kicker}>Expertise &amp; execution</span><h1 className={styles.title}>Systems built to <span>ship and scale.</span></h1><p className={styles.lead}>End-to-end technical delivery for web products, production infrastructure, business email, and intelligent automation.</p></div>
						<p className={styles.heroNote}><strong>One technical partner</strong>Strategy, implementation, deployment, and ongoing improvement without fragmented handoffs.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.container}>
						<div className={styles.cardGrid}>
							{serviceSections.map((service, index) => <article className={styles.card} key={service.title}><span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span><h2>{service.title}</h2><p>{service.summary}</p><ul className={styles.tags}>{service.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
						</div>
						<div className={styles.actions}><Link href='/contact' className={styles.primaryLink}>Discuss your project</Link><Link href='/projects' className={styles.secondaryLink}>View selected work</Link></div>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
