import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site/site-shell'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog-data'
import styles from '../../pages.module.css'

interface BlogPostPageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams () {
	return (await getBlogPosts()).map(post => ({ slug: post.slug }))
}

export async function generateMetadata ({ params }: BlogPostPageProps): Promise<Metadata> {
	const post = await getBlogPostBySlug((await params).slug)
	return post ? { title: `${post.title} | Larry Parba`, description: post.excerpt } : { title: 'Article Not Found | Larry Parba' }
}

function formatDate (date: string) {
	return new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

export default async function BlogPostPage ({ params }: BlogPostPageProps) {
	const post = await getBlogPostBySlug((await params).slug)
	if (!post) notFound()

	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.articleHeader}`}>
						<Link href='/blog' className={styles.backLink}>← Back to all articles</Link>
						<span className={styles.kicker}>Engineering notes</span>
						<h1 className={styles.title}>{post.title}</h1>
						<p className={styles.lead}>{post.excerpt}</p>
						<div className={styles.articleMetaLarge}><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readingTime}</span><span>·</span><span>By Larry Parba</span></div>
					</div>
				</section>

				<section className={styles.section}>
					<article className={`${styles.container} ${styles.articleBody}`}>
						{post.sections.map((section, index) => <section key={`${section.heading ?? 'intro'}-${index}`}>{section.heading ? <h2>{section.heading}</h2> : null}{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}
						<div className={styles.topicList}>{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
					</article>
				</section>
			</div>
		</SiteShell>
	)
}
