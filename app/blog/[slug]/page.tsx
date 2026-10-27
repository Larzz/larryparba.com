import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/site/site-shell'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog-data'
import { profile } from '@/lib/resume-data'
import styles from '../../pages.module.css'

interface BlogPostPageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams () {
	return (await getBlogPosts()).map(post => ({ slug: post.slug }))
}

export async function generateMetadata ({ params }: BlogPostPageProps): Promise<Metadata> {
	const post = await getBlogPostBySlug((await params).slug)
	if (!post) return { title: 'Article Not Found | Larry Parba' }

	const canonicalPath = `/blog/${post.slug}`

	return {
		title: `${post.title} | Larry Parba`,
		description: post.excerpt,
		authors: [{ name: 'Larry Parba', url: '/about' }],
		alternates: { canonical: canonicalPath },
		openGraph: {
			type: 'article',
			url: canonicalPath,
			title: post.title,
			description: post.excerpt,
			siteName: 'Larry Parba',
			publishedTime: `${post.publishedAt}T00:00:00.000Z`,
			modifiedTime: `${post.updatedAt ?? post.publishedAt}T00:00:00.000Z`,
			authors: ['Larry Parba'],
			tags: post.tags,
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt,
			creator: '@Larry_Parba',
		},
	}
}

function formatDate (date: string) {
	return new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

function renderInlineFormatting (text: string) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
		if (part.startsWith('**') && part.endsWith('**')) return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
		if (part.startsWith('`') && part.endsWith('`')) return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>
		return part
	})
}

export default async function BlogPostPage ({ params }: BlogPostPageProps) {
	const post = await getBlogPostBySlug((await params).slug)
	if (!post) notFound()

	const allPosts = await getBlogPosts()
	const relatedPosts = allPosts
		.filter(candidate => candidate.slug !== post.slug)
		.map(candidate => ({
			...candidate,
			sharedTags: candidate.tags.filter(tag => post.tags.includes(tag)).length,
		}))
		.sort((a, b) => b.sharedTags - a.sharedTags || b.publishedAt.localeCompare(a.publishedAt))
		.slice(0, 2)

	const canonicalUrl = `https://larryparba.com/blog/${post.slug}`
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'BlogPosting',
				'@id': `${canonicalUrl}#article`,
				headline: post.title,
				description: post.excerpt,
				datePublished: post.publishedAt,
				dateModified: post.updatedAt ?? post.publishedAt,
				mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
				image: 'https://larryparba.com/icon3.png',
				keywords: post.tags.join(', '),
				author: {
					'@type': 'Person',
					name: 'Larry Parba',
					url: 'https://larryparba.com/about',
					sameAs: [profile.linkedin, profile.github],
				},
				publisher: {
					'@type': 'Organization',
					name: 'Larry Parba Web Development',
					url: 'https://larryparba.com',
					logo: { '@type': 'ImageObject', url: 'https://larryparba.com/icon3.png' },
				},
			},
			{
				'@type': 'FAQPage',
				'@id': `${canonicalUrl}#faq`,
				mainEntity: post.faqs.map(faq => ({
					'@type': 'Question',
					name: faq.question,
					acceptedAnswer: { '@type': 'Answer', text: faq.answer },
				})),
			},
		],
	}

	return (
		<SiteShell>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
			/>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={`${styles.container} ${styles.articleHeader}`}>
						<Link href='/blog' className={styles.backLink}>← Back to all articles</Link>
						<span className={styles.kicker}>{post.kicker ?? 'Engineering notes'}</span>
						<h1 className={styles.title}>{post.title}</h1>
						<p className={styles.lead}>{post.excerpt}</p>
						<div className={styles.articleMetaLarge}><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readingTime}</span><span>·</span><span>By Larry Parba</span></div>
					</div>
				</section>

				<section className={styles.section}>
					<article className={`${styles.container} ${styles.articleBody}`}>
						{post.sections.map((section, index) => (
							<section key={`${section.heading ?? 'intro'}-${index}`}>
								{section.heading ? <h2>{section.heading}</h2> : null}
								{section.paragraphs.map(paragraph => <p key={paragraph}>{renderInlineFormatting(paragraph)}</p>)}
								{section.code ? <pre className={styles.codeBlock} aria-label={`${section.code.language} example`}><code>{section.code.value}</code></pre> : null}
								{section.quote ? <blockquote>{section.quote}</blockquote> : null}
								{section.bullets ? <ul>{section.bullets.map(bullet => typeof bullet === 'string' ? <li key={bullet}>{bullet}</li> : <li key={bullet.title}><strong>{bullet.title}</strong> {bullet.description}</li>)}</ul> : null}
								{section.steps ? <ol>{section.steps.map(step => <li key={step.title}><strong>{step.title}</strong> {step.description}</li>)}</ol> : null}
								{section.action ? <Link href={section.action.href} className={styles.articleCta}>{section.action.label} →</Link> : null}
							</section>
						))}

						<section className={styles.articleFaq} aria-labelledby='frequently-asked-questions'>
							<h2 id='frequently-asked-questions'>Frequently asked questions</h2>
							<div className={styles.faqList}>
								{post.faqs.map(faq => (
									<details key={faq.question}>
										<summary>{faq.question}</summary>
										<p>{faq.answer}</p>
									</details>
								))}
							</div>
						</section>

						<aside className={styles.authorCard} aria-label='About the author'>
							<span className={styles.authorEyebrow}>Written by</span>
							<h2>Larry Parba</h2>
							<p>Full-stack engineer and systems consultant with more than nine years of experience building web applications, backend systems, and reliable production workflows.</p>
							<div className={styles.authorLinks}>
								<Link href='/about'>About Larry</Link>
								<Link href='/contact'>Ask a question</Link>
							</div>
						</aside>

						{relatedPosts.length > 0 ? (
							<section className={styles.relatedArticles} aria-labelledby='related-articles'>
								<h2 id='related-articles'>Related articles</h2>
								<div className={styles.relatedList}>
									{relatedPosts.map(relatedPost => (
										<Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
											<span>{formatDate(relatedPost.publishedAt)}</span>
											<strong>{relatedPost.title}</strong>
										</Link>
									))}
								</div>
							</section>
						) : null}
						<div className={styles.topicList}>{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
					</article>
				</section>
			</div>
		</SiteShell>
	)
}
