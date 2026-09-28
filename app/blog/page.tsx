import Link from 'next/link'

import { SiteShell } from '@/components/site/site-shell'
import { getBlogPosts } from '@/lib/blog-data'
import styles from '../pages.module.css'

function formatDate (date: string) {
	return new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

export default async function BlogPage () {
	const posts = await getBlogPosts()
	const topics = Array.from(new Set(posts.flatMap(post => post.tags))).sort()

	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.heroInner}`}>
						<div><span className={styles.kicker}>Engineering notes</span><h1 className={styles.title}>Practical ideas from <span>building in production.</span></h1><p className={styles.lead}>Notes on application architecture, reliable infrastructure, useful automation, and the decisions behind maintainable systems.</p></div>
						<p className={styles.heroNote}><strong>Built for Vercel storage</strong>The blog uses a simple data layer today, ready to move to a database for posts and Blob for cover images.</p>
					</div>
				</section>

				<section className={styles.section}>
					<div className={`${styles.container} ${styles.blogGrid}`}>
						<div className={styles.blogList}>
							{posts.map(post => <article className={styles.articleCard} key={post.slug}><div className={styles.articleMeta}><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readingTime}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><div className={styles.topicList}>{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={`/blog/${post.slug}`} className={styles.textLink}>Read article →</Link></article>)}
						</div>
						<aside className={styles.sidebarCard}><span className={styles.kicker}>Topics</span><h2>Browse the themes</h2><p className={styles.summary}>Focused writing for people who build, maintain, and improve software systems.</p><div className={styles.topicList}>{topics.map(topic => <span key={topic}>{topic}</span>)}</div><div className={styles.contactList}><Link href='/projects'>Explore selected work</Link><Link href='/contact'>Discuss a technical challenge</Link></div></aside>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
