import type { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Googlebot', 'Bingbot'],
				allow: '/',
				disallow: ['/admin/', '/api/'],
			},
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin/', '/api/'],
			},
		],
		sitemap: 'https://larryparba.com/sitemap.xml',
		host: 'https://larryparba.com',
	}
}
