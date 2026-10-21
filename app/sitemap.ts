import type { MetadataRoute } from 'next'

import { getBlogPosts } from '@/lib/blog-data'
import { featuredProjects } from '@/lib/resume-data'

const siteUrl = 'https://larryparba.com'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
	const posts = await getBlogPosts()
	const latestPostDate = posts[0]?.updatedAt ?? posts[0]?.publishedAt

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: siteUrl, changeFrequency: 'monthly', priority: 1 },
		{ url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${siteUrl}/projects`, changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${siteUrl}/experience`, changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${siteUrl}/skills`, changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${siteUrl}/blog`, lastModified: latestPostDate, changeFrequency: 'weekly', priority: 0.9 },
		{ url: `${siteUrl}/brand-samples/davaolease`, changeFrequency: 'monthly', priority: 0.6 },
		{ url: `${siteUrl}/cv`, changeFrequency: 'monthly', priority: 0.6 },
		{ url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.8 },
	]

	const blogRoutes: MetadataRoute.Sitemap = posts.map(post => ({
		url: `${siteUrl}/blog/${post.slug}`,
		lastModified: post.updatedAt ?? post.publishedAt,
		changeFrequency: 'monthly',
		priority: 0.8,
	}))

	const projectRoutes: MetadataRoute.Sitemap = featuredProjects.map(project => ({
		url: `${siteUrl}/projects/${project.slug}`,
		changeFrequency: 'yearly',
		priority: 0.7,
	}))

	return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
