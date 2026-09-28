export interface BlogSection {
	heading?: string
	paragraphs: string[]
	bullets?: string[]
}

export interface BlogPost {
	slug: string
	title: string
	excerpt: string
	publishedAt: string
	readingTime: string
	tags: string[]
	sections: BlogSection[]
}

// This local source keeps the blog deployable before a database is connected.
// The UI only depends on getBlogPosts/getBlogPostBySlug, so these functions can
// later query Neon, Supabase, or another Vercel Marketplace database.
const posts: BlogPost[] = [
	{
		slug: 'building-production-systems-that-stay-calm',
		title: 'Building production systems that stay calm under pressure',
		excerpt: 'A practical framework for making application architecture, deployments, and incident response easier to reason about.',
		publishedAt: '2026-09-22',
		readingTime: '6 min read',
		tags: ['Architecture', 'Production', 'DevOps'],
		sections: [
			{ paragraphs: ['Reliable systems are rarely the result of one clever technical choice. They come from a sequence of clear decisions: understandable boundaries, observable behavior, predictable deployments, and a recovery path the team has already considered.'] },
			{ heading: 'Prefer boring boundaries', paragraphs: ['A service should make its responsibilities obvious. When application logic, third-party integrations, and infrastructure concerns are tightly mixed, every production issue becomes harder to isolate.'], bullets: ['Keep business rules separate from delivery concerns.', 'Treat external APIs as failure-prone boundaries.', 'Make important state transitions visible and traceable.'] },
			{ heading: 'Design for the operating day', paragraphs: ['The launch is one moment. The operating day is everything that follows: deploying a small fix, understanding a failed job, rotating credentials, or explaining an incident to a client. Good engineering makes those ordinary moments low-stress.'] },
			{ heading: 'A useful definition of done', paragraphs: ['For production work, done means more than a green build. The change should be testable, observable, reversible where practical, and understandable by the next engineer who touches it.'] },
		],
	},
	{
		slug: 'where-ai-automation-actually-helps',
		title: 'Where AI automation actually helps a small technical team',
		excerpt: 'The best automation opportunities are usually repeatable handoffs with clear inputs, review points, and measurable outcomes.',
		publishedAt: '2026-09-12',
		readingTime: '5 min read',
		tags: ['AI', 'Automation', 'Workflows'],
		sections: [
			{ paragraphs: ['AI is most valuable when it improves a workflow the team already understands. Starting with the model instead of the operational problem often creates an impressive demo that is difficult to trust or maintain.'] },
			{ heading: 'Look for structured repetition', paragraphs: ['Strong candidates have a recognizable input, a repeatable decision, and a useful output. Lead enrichment, support triage, content classification, and document extraction often fit this pattern.'], bullets: ['The input can be validated before processing.', 'The output has a clear destination and owner.', 'A human can review uncertain or high-impact cases.'] },
			{ heading: 'Keep the workflow observable', paragraphs: ['An automation should show what happened, what data was used, and where the result went. Logs, retry rules, cost limits, and explicit failure states are part of the product—not optional infrastructure details.'] },
		],
	},
]

export async function getBlogPosts (): Promise<BlogPost[]> {
	return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getBlogPostBySlug (slug: string): Promise<BlogPost | undefined> {
	return posts.find((post) => post.slug === slug)
}
