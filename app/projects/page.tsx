import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { featuredProjects } from '@/lib/resume-data'
import styles from '../pages.module.css'

export const metadata: Metadata = {
	title: 'Selected Projects | Larry Parba',
	description: 'Selected web platforms, e-commerce systems, and production applications built or maintained by Larry Parba.',
}

export default function ProjectsPage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div><span className={styles.kicker}>Selected work</span><h1 className={styles.title}>Products that work beyond the <span>launch screen.</span></h1><p className={styles.lead}>A selection of websites and platforms I helped build, maintain, or scale in production.</p></div>
						<p className={styles.heroNote}><strong>15+ selected projects</strong>Digital products, e-commerce, enterprise workflows, real-time platforms, and high-trust public services.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.container}>
						<div className={styles.cardGrid}>
							{featuredProjects.map((project) => <article className={`${styles.card} ${styles.projectCard}`} key={project.name}>
								<Link href={`/projects/${project.slug}`} className={styles.projectImageWrap}><Image src={project.image} alt={project.imageAlt} width={1200} height={720} sizes='(max-width: 720px) calc(100vw - 40px), (max-width: 1280px) calc(50vw - 42px), 598px' className={styles.projectImage} priority={project.slug === 'davao-lease' || project.slug === 'pahatud-food'} /></Link>
								<div className={styles.projectBody}><span className={styles.projectCategory}>{project.category}</span><h2>{project.name}</h2><p>{project.summary}</p><ul className={styles.tags}>{project.technologies.slice(0, 4).map(technology => <li key={technology}>{technology}</li>)}</ul><div className={styles.projectLinks}><Link href={`/projects/${project.slug}`} className={styles.textLink}>View case details →</Link><Link href={project.url} target='_blank' rel='noreferrer' className={styles.textLink}>Visit project ↗</Link></div></div>
							</article>)}
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
