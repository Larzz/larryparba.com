import { getBlogPosts } from '@/lib/blog-data'

const siteUrl = 'https://larryparba.com'

export async function GET () {
	const posts = await getBlogPosts()
	const articles = posts
		.map(post => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`)
		.join('\n')

	const content = `# Larry Parba

> Larry Parba is a full-stack engineer and systems consultant who builds scalable web applications, production infrastructure, email systems, and practical AI automation.

## Primary pages

- [Home](${siteUrl})
- [About Larry](${siteUrl}/about)
- [Projects](${siteUrl}/projects)
- [Experience](${siteUrl}/experience)
- [Skills](${siteUrl}/skills)
- [Contact](${siteUrl}/contact)

## Articles

${articles}

## Feeds and discovery

- [RSS feed](${siteUrl}/rss.xml)
- [XML sitemap](${siteUrl}/sitemap.xml)

## Contact

For a website, business system, or technical consulting inquiry, use ${siteUrl}/contact.
`

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	})
}
