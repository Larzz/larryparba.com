import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site/site-shell'
import { featuredProjects, getProjectBySlug } from '@/lib/resume-data'
import styles from '../../pages.module.css'

interface ProjectPageProps { params: Promise<{ slug: string }> }

export function generateStaticParams () {
	return featuredProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata ({ params }: ProjectPageProps): Promise<Metadata> {
	const project = getProjectBySlug((await params).slug)
	return project ? { title: `${project.name} | Project Details | Larry Parba`, description: project.summary } : { title: 'Project Not Found | Larry Parba' }
}

export default async function ProjectDetailPage ({ params }: ProjectPageProps) {
	const project = getProjectBySlug((await params).slug)
	if (!project) notFound()

	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.detailGrid}`}>
						<div className={styles.detailIntro}><Link href='/projects' className={styles.backLink}>← All projects</Link><span className={styles.kicker}>Project case detail</span><h1>{project.name}</h1><p>{project.description}</p><ul className={styles.tags}>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul><div className={styles.actions}><Link href={project.url} target='_blank' rel='noreferrer' className={styles.primaryLink}>Visit live project ↗</Link></div></div>
						<Image src={project.image} alt={project.imageAlt} width={1200} height={720} className={styles.detailImage} unoptimized priority />
					</div>
				</section>

				<section className={styles.section}>
					<div className={`${styles.container} ${styles.detailGrid}`}>
						<div className={styles.copyCard}><span className={styles.kicker}>Responsibilities</span><h2 className='mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-900'>What I contributed</h2><ul className={styles.bulletList}>{project.responsibilities?.map(item => <li key={item}>{item}</li>)}</ul></div>
						<aside className={styles.sidebarCard}><span className={styles.kicker}>Product outcomes</span><h2>Key features</h2><ul className={styles.bulletList}>{project.keyFeatures?.map(item => <li key={item}>{item}</li>)}</ul></aside>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
