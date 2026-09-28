import type { Metadata } from 'next'

import { SiteShell } from '@/components/site/site-shell'
import { coreCompetencies, profile } from '@/lib/resume-data'
import styles from '../pages.module.css'

export const metadata: Metadata = {
	title: 'About | Larry Parba',
	description: 'Meet Larry Parba, a full-stack engineer and systems consultant with 9+ years of production experience.',
}

export default function AboutPage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div>
							<span className={styles.kicker}>Engineer behind the systems</span>
							<h1 className={styles.title}>Practical engineering for <span>real production work.</span></h1>
							<p className={styles.lead}>{profile.summary}</p>
						</div>
						<p className={styles.heroNote}><strong>9+ years in production</strong>From product interfaces to backend architecture, infrastructure, email, and AI-enabled workflows.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.container}>
						<div className={styles.introGrid}>
							<div className={styles.copyCard}>
								<p>I build secure, scalable applications with Laravel and modern frontend tooling, then support the surrounding systems that keep them reliable in production.</p>
								<p>My work spans full-stack product delivery, API architecture, server operations, enterprise email systems, and practical AI automations that remove repetitive operational work.</p>
							</div>
							<aside className={styles.signalCard}>
								<small>How I work</small>
								<strong>Clear systems. Calm delivery.</strong>
								<p>I focus on maintainable foundations, direct communication, and production decisions that are easy to operate after launch.</p>
								<div className={styles.signalList}><span>Architecture before complexity</span><span>Security built into delivery</span><span>Readable, maintainable systems</span></div>
							</aside>
						</div>
					</div>
				</section>

				<section className={styles.softSection}>
					<div className={styles.container}>
						<div className={styles.sectionHeading}><div><span className={styles.kicker}>Core capabilities</span><h2>Where I create the most value</h2></div><p>Technical depth across the application and the infrastructure around it.</p></div>
						<div className={styles.cardGrid}>
							{coreCompetencies.map((competency, index) => <article className={styles.card} key={competency}><span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span><h3>{competency}</h3></article>)}
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
