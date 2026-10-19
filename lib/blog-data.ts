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
		slug: 'your-website-is-live-what-happens-next',
		title: 'Your Website Is Live. What Happens Next?',
		excerpt: 'A practical guide to website handover, post-launch support, maintenance, and making useful improvements as your business grows.',
		publishedAt: '2026-10-19',
		readingTime: '4–5 min read',
		tags: ['Websites', 'Support', 'Maintenance'],
		sections: [
			{
				paragraphs: [
					'Seeing your website go live is a good feeling. Your business finally has a place online where people can learn about your services, browse your products, or send an inquiry.',
					'Then you start using it.',
					'You need to change a price. A customer says they didn’t receive a confirmation email. You want to add a new service, but you’re not sure where it belongs. Or you open the dashboard after a few weeks and forget how to update the homepage.',
					'These are normal situations. You shouldn’t have to feel uncomfortable asking for help.',
					'When I build a website, I also discuss what happens after launch. The support you need depends on your business and the project, but the goal stays the same: you should feel confident using the website you paid for.',
				],
			},
			{
				heading: 'Getting Comfortable With Your Website',
				paragraphs: [
					'Most business owners don’t need to know how a website is coded. They need to know how to use it.',
					'If your website includes an admin dashboard, part of the handover should involve walking you through the tasks you’ll actually do. That might mean adding products, changing room rates, uploading photos, checking bookings, or updating your contact details.',
					'I prefer to explain these using your own website. It’s easier to remember how to edit a product when we’re working with something you sell.',
					'Depending on the agreed scope, this can include a walkthrough, simple instructions, or a recorded demonstration that your team can return to later.',
					'And if you forget a step, that’s okay. A website should make your work easier, and learning it takes a little practice.',
				],
			},
			{
				heading: 'Having Someone to Contact When Something Goes Wrong',
				paragraphs: [
					'Sometimes a problem only becomes noticeable when real customers start using a website.',
					'A form might behave differently on a certain device. An email might fail to arrive. A button could lead to the wrong page.',
					'When you report an issue, I’ll need a few useful details: which page you were on, what you were trying to do, and what happened instead. A screenshot can help too.',
					'From there, I can investigate and explain the next step in plain language.',
					'The proposal should clearly state the initial bug-fix support period and what it covers. If you need help beyond that period, we can arrange ongoing maintenance or handle requests individually.',
					'That way, you know who to contact and what to expect.',
				],
			},
			{
				heading: 'Keeping Your Business Information Current',
				paragraphs: [
					'Your business will change, and your website needs to keep up.',
					'You might introduce a service, adjust your opening hours, replace a menu, or update seasonal prices. Even a small change matters if customers rely on that information before contacting you.',
					'Where practical, I can build editing features so your team can manage routine updates. For changes that need development or design work, you can send a request and I’ll review what’s involved.',
					'It also helps to distinguish a correction from an addition. Fixing a booking form that doesn’t work as agreed is different from adding a new booking feature.',
					'I’ll explain that difference before starting any additional paid work, so there are no surprises.',
				],
			},
			{
				heading: 'Taking Care of the Technical Side',
				paragraphs: [
					'There’s work behind a website that customers rarely see: software updates, backups, hosting settings, and checks to make sure important features still work.',
					'For clients who want ongoing help, these tasks can form part of a maintenance agreement.',
					'The details depend on the website. A simple company website has different needs from an online store that accepts payments and manages orders every day.',
					'Backups deserve particular attention. It’s useful to agree on what gets backed up, how often, and how a restoration would be handled if needed.',
					'We should also be clear about who manages the domain, hosting, and business email. Knowing who is responsible makes renewals and troubleshooting much easier.',
				],
			},
			{
				heading: 'Making Sure Inquiries Reach You',
				paragraphs: [
					'A website inquiry is only useful if it reaches the right person.',
					'As part of the agreed setup, we can test contact forms, booking notifications, and other important messages. You should know where those messages arrive and how to check them.',
					'I also encourage clients to test their own inquiry process occasionally. Send a message as though you’re a customer. Check whether it arrives and whether the reply instructions make sense.',
					'It’s a small habit, but it can help uncover a problem before it affects more customers.',
				],
			},
			{
				heading: 'Improving the Website as You Grow',
				paragraphs: [
					'After launch, you’ll learn what people actually need from your website.',
					'Perhaps customers keep asking the same question. Your staff might be copying online orders into a spreadsheet. Or preparing quotations could be taking more time than expected.',
					'Those everyday frustrations are useful starting points for improvements.',
					'A quotation tool, customer portal, automated reminder, or better report may help. We can review the problem first, then decide whether a new feature is worth building.',
					'There’s no need to add everything at once. A useful website can grow alongside your business.',
				],
			},
			{
				heading: 'Support Should Be Clear From the Start',
				paragraphs: [
					'Before a project begins, I want us to be clear about what’s included: the handover, support period, maintenance responsibilities, and how future changes will be handled.',
					'You don’t need to know every technical term. You do need clear answers and someone you can approach when you have a question.',
					'If you’re planning a website—or need help with one you already have—you can contact me through larryparba.com. Tell me what your business does, what’s causing difficulty, and what you’d like to make easier.',
				],
			},
		],
	},
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
