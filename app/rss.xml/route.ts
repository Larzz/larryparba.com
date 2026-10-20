import { getBlogPosts } from '@/lib/blog-data'

const siteUrl = 'https://larryparba.com'

function escapeXml (value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;')
}

export async function GET () {
	const posts = await getBlogPosts()
	const items = posts.map(post => {
		const url = `${siteUrl}/blog/${post.slug}`
		const publishedAt = new Date(`${post.publishedAt}T00:00:00Z`).toUTCString()

		return `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${url}</link>
			<guid isPermaLink="true">${url}</guid>
			<pubDate>${publishedAt}</pubDate>
			<description>${escapeXml(post.excerpt)}</description>
			${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('')}
		</item>`
	}).join('')

	const lastBuildDate = posts[0]
		? new Date(`${posts[0].updatedAt ?? posts[0].publishedAt}T00:00:00Z`).toUTCString()
		: new Date().toUTCString()

	const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
	<channel>
		<title>Larry Parba — Engineering Blog</title>
		<link>${siteUrl}/blog</link>
		<description>Practical notes on full-stack engineering, architecture, infrastructure, and AI automation.</description>
		<language>en</language>
		<lastBuildDate>${lastBuildDate}</lastBuildDate>
		<atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
		${items}
	</channel>
</rss>`

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	})
}
