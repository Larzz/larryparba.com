export interface BlogSection {
	heading?: string
	paragraphs: string[]
	bullets?: Array<string | { title: string, description: string }>
	action?: { label: string, href: string }
}

export interface BlogPost {
	slug: string
	title: string
	excerpt: string
	publishedAt: string
	updatedAt?: string
	readingTime: string
	tags: string[]
	kicker?: string
	sections: BlogSection[]
	faqs: Array<{ question: string, answer: string }>
}

// This local source keeps the blog deployable before a database is connected.
// The UI only depends on getBlogPosts/getBlogPostBySlug, so these functions can
// later query Neon, Supabase, or another Vercel Marketplace database.
const posts: BlogPost[] = [
{
	"slug": "a-website-is-just-the-beginning",
	"title": "A Website Is Just the Beginning",
	"excerpt": "A website, a simple brand guide, and matching business materials you can keep using as your business grows.",
	"publishedAt": "2026-10-21",
	"readingTime": "3 min read",
	"tags": [
		"Websites",
		"Branding",
		"Business"
	],
	"kicker": "Beyond the website",
	"sections": [
		{
			"paragraphs": [
				"When you ask me to build your website, I want you to have something you can keep using as your business grows.",
				"You might need to send a quotation tomorrow, introduce your business to a potential client next week, or print calling cards for an event. Having matching materials ready makes those everyday tasks a little easier.",
				"That’s why I also help bring your brand together, beyond the pages of your website."
			]
		},
		{
			"heading": "A simple guide to your brand",
			"paragraphs": [
				"You’ll have a reference for your brand colors, fonts, and logo usage. So when you need a new flyer or social media post, you won’t have to guess which shade or font to use."
			]
		},
		{
			"heading": "Consistent website elements",
			"paragraphs": [
				"Your buttons, forms, headings, and page layouts will follow the same style. These details help customers find their way around your website and make future pages easier to add."
			]
		},
		{
			"heading": "A calling card that feels like your business",
			"paragraphs": [
				"Your calling card can match your website, with clear contact details and a QR code that takes people straight to it. It’s a small detail, but it helps people remember you after a conversation."
			]
		},
		{
			"heading": "Documents you can reuse",
			"paragraphs": [
				"Quotations, proposals, invoices, and company letters don’t have to look different every time. Branded templates give you a starting point—you just update the details and send them."
			]
		},
		{
			"heading": "Presentations you can confidently share",
			"paragraphs": [
				"Whether you’re introducing your company or explaining your services, a matching presentation template helps you put your ideas together without designing every slide from scratch."
			]
		},
		{
			"paragraphs": [
				"We’ll agree on the materials included in your package before we start, so you know exactly what you’ll receive.",
				"My goal is to make things easier for you, even after your website goes live. You’ll have useful materials you can work with, share with your team, and build on as your business grows.",
				"Have a business in mind, or an existing one that needs a fresh look? Tell me about it at larryparba.com."
			],
			"action": {
				"label": "Tell me about your business",
				"href": "/contact"
			}
		},
		{
			"heading": "See a sample brand guideline",
			"paragraphs": [
				"Here’s a sample inspired by DavaoLease.ph, showing how a website’s colors, typography, and logo can carry through to calling cards, documents, and presentations. These are illustrative concepts; the materials in your own package will be agreed before we begin."
			],
			"action": {
				"label": "Explore the DavaoLease brand sample",
				"href": "/brand-samples/davaolease"
			}
		}
	],
	"faqs": [
		{
			"question": "Which branded materials are included?",
			"answer": "We’ll agree on the materials included in your package before we start. These may include a brand guide, calling card, reusable documents, and a presentation template."
		},
		{
			"question": "Can I see an example of a brand guideline?",
			"answer": "The linked DavaoLease sample shows a coordinated palette, typography, logo guidance, website elements, and business material concepts."
		}
	]
},
	{
		slug: 'a-website-comes-with-questions-mine-comes-with-support',
		title: 'A Website Comes With Questions. Mine Comes With Support.',
		excerpt: 'A clear look at the maintenance, bug support, training, and practical guidance included after your website or business system goes live.',
		publishedAt: '2026-10-20',
		readingTime: '4 min read',
		tags: ['Websites', 'Client Support', 'Maintenance'],
		kicker: 'Working together',
		sections: [
			{
				paragraphs: [
					'When you invest in a website or business system, you want to know it will work for your business—and that you’ll have someone to contact when you need help.',
					'Maybe your staff need a little guidance. Maybe something isn’t working as expected. Or maybe you simply want to ask, “Is there an easier way to do this?”',
					'That’s why I include after-launch support when you hire me to build your website or system. Finishing the project is one milestone. Helping you feel comfortable using it matters just as much.',
					'Here’s what you can expect when we work together:',
				],
				bullets: [
					{ title: '5 months of free maintenance.', description: 'Routine checks, updates, and upkeep within our agreed scope to help keep your website or system running smoothly.' },
					{ title: '8 months of free bug support.', description: 'If a feature I delivered doesn’t work as agreed, I’ll fix it at no additional cost during the eight months after launch.' },
					{ title: 'Technical advice and guidance.', description: 'You’re welcome to ask questions about your website, system, hosting, domain, or business email. I’ll explain what I can in clear, everyday language.' },
					{ title: 'Free onboarding and training.', description: 'I’ll walk you and your team through the system, using the tasks you’ll actually handle each day.' },
					{ title: 'A basic user guide.', description: 'Simple instructions you can refer to when you need a reminder about updating content, managing records, or completing other common tasks.' },
					{ title: 'A follow-up check-in after launch.', description: 'Once you’ve had time to use the system, we’ll discuss how it’s working and anything you’re finding difficult.' },
					{ title: 'Clear pricing for future improvements.', description: 'If you need additional features, I’ll explain the work and cost before we proceed.' },
				],
			},
			{
				heading: 'You don’t need to have everything figured out on day one',
				paragraphs: [
					'You might only discover what you need after using your system for a few weeks.',
					'Perhaps a report takes too many steps to prepare. Your customers keep asking the same question. Or your team needs a clearer way to track orders.',
					'Tell me about it. We can look at the problem together and decide whether it needs a simple adjustment, some guidance, or a new feature.',
					'I already know how your system was built, so you won’t have to explain everything from the beginning each time you reach out.',
				],
			},
			{
				heading: 'Clear expectations from the start',
				paragraphs: [
					'The maintenance and bug support periods both begin at launch and run alongside each other. Bug support covers issues in the original work; new features and changes outside our agreement are quoted separately.',
					'Before we begin, we’ll also confirm what maintenance includes and whether hosting, backups, and third-party services are part of your package. You’ll know what’s covered and what may involve an additional cost.',
				],
			},
			{
				heading: 'Someone to call when your business needs help',
				paragraphs: [
					'My goal is to build something useful for your business and make sure you feel confident using it.',
					'When the free support period ends, we can discuss continued maintenance based on what you actually need. And when you’re ready to improve or expand your system, you’ll have someone familiar with your business to talk to.',
					'Planning a website or business system? Let’s talk about what would make your everyday work easier.',
				],
				action: { label: 'View my work and get in touch', href: '/contact' },
			},
		],
		faqs: [
			{ question: 'How long is maintenance included after launch?', answer: 'Routine maintenance within the agreed project scope is included for five months from launch.' },
			{ question: 'What does the free bug support cover?', answer: 'For eight months after launch, I will fix a feature I delivered if it does not work as agreed. New features and changes outside the original agreement are quoted separately.' },
			{ question: 'Can you train my team to use the website or system?', answer: 'Yes. Free onboarding covers the real tasks your team will handle, and you will also receive a basic user guide for common actions.' },
		],
	},
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
		faqs: [
			{ question: 'What support should I expect after my website launches?', answer: 'Your project agreement should clearly describe the handover, training, initial bug-fix period, maintenance responsibilities, and how future changes will be handled.' },
			{ question: 'Who manages the domain, hosting, and business email?', answer: 'That responsibility should be agreed before launch. Clear ownership makes renewals, backups, and troubleshooting much easier.' },
			{ question: 'Can my website grow after it goes live?', answer: 'Yes. Real customer and staff feedback often reveals the most useful next improvement, so features can be added as the business needs them.' },
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
		faqs: [
			{ question: 'What makes a production system reliable?', answer: 'Reliable systems combine understandable boundaries, observable behavior, predictable deployments, and a recovery path the team has already considered.' },
			{ question: 'What does “done” mean for production work?', answer: 'A production change should be testable, observable, reversible where practical, and understandable by the next engineer who maintains it.' },
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
		faqs: [
			{ question: 'Which workflows are good candidates for AI automation?', answer: 'Look for structured, repetitive work with validated inputs, a clear output and owner, and a review step for uncertain or high-impact cases.' },
			{ question: 'Should AI replace human review?', answer: 'Not for uncertain or high-impact decisions. A person should be able to review those cases before the result reaches a customer or changes important data.' },
			{ question: 'How do you make AI automation observable?', answer: 'Use logs, retry rules, cost limits, and explicit failure states so the team can see what happened, what data was used, and where the result went.' },
		],
	},
]

export async function getBlogPosts (): Promise<BlogPost[]> {
	return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getBlogPostBySlug (slug: string): Promise<BlogPost | undefined> {
	return posts.find((post) => post.slug === slug)
}
