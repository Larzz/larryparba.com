import type { Metadata } from 'next'
import Image from 'next/image'

import { SiteShell } from '@/components/site/site-shell'
import { experience } from '@/lib/resume-data'
import styles from '../pages.module.css'

export const metadata: Metadata = {
	title: 'Experience | Larry Parba',
	description: 'Larry Parba’s professional experience across full-stack delivery, architecture, and production infrastructure.',
}

export default function ExperiencePage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div><span className={styles.kicker}>Production track record</span><h1 className={styles.title}>Experience across products, platforms &amp; <span>critical systems.</span></h1><p className={styles.lead}>A career focused on full-stack delivery, backend architecture, infrastructure, and calm problem-solving in production.</p></div>
						<p className={styles.heroNote}><strong>2016 — present</strong>Hands-on work across e-commerce, enterprise platforms, infrastructure, and government-related services.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.container}>
						<div className={styles.timeline}>
							{experience.map((item) => <article className={styles.experienceCard} key={`${item.company}-${item.period}`}>
								<div className={styles.logoSlot}><Image src={`/${item.logo}`} alt={`${item.company} logo`} width={56} height={56} /></div>
								<div><div className={styles.experienceTop}><div><h2>{item.role} · {item.company}</h2><p className={styles.meta}>{item.location} · {item.duration}</p></div><span>{item.period}</span></div><p className={styles.summary}>{item.summary}</p><ul className={styles.bulletList}>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>
							</article>)}
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
