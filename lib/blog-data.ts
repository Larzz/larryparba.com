export interface BlogSection {
	heading?: string
	paragraphs: string[]
	quote?: string
	bullets?: Array<string | { title: string, description: string }>
	steps?: Array<{ title: string, description: string }>
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
		slug: 'what-is-mcp-model-context-protocol',
		title: 'What Is MCP? A Simple Guide to Connecting AI With Your Business Tools',
		excerpt: 'Learn what MCP (Model Context Protocol) is, how it connects AI to business tools, and where APIs, permissions, and practical use cases fit in.',
		publishedAt: '2026-10-26',
		readingTime: '4 min read',
		tags: ['MCP', 'AI', 'Integrations'],
		kicker: 'AI integration',
		sections: [
			{
				paragraphs: [
					'AI can help you write an email, explain code, or brainstorm a business idea. But when your question depends on information inside your own system, the conversation often turns into copying and pasting.',
					'You export a report, upload a document, or explain how your application works. When the information changes, you repeat the process.',
					'As a web developer, that is the problem I find interesting about MCP: giving an AI application a structured way to work with the tools and information a business already uses.',
				],
			},
			{
				heading: 'What does MCP mean?',
				paragraphs: [
					'MCP stands for **Model Context Protocol**. It is an open standard for connecting AI applications to external systems, including files, databases, and software tools.',
					'Think of it as a common connection format. Instead of every AI application needing a completely different integration for every service, compatible applications and servers can communicate through MCP.',
					'The official documentation compares it to a USB-C port for AI. The connection follows a shared standard, while what you can actually do depends on the connected system and its capabilities.',
				],
			},
			{
				heading: 'What could this look like in a business?',
				paragraphs: [
					'Imagine you manage an online store and want to ask:',
				],
				quote: 'Which products are running low on stock?',
			},
			{
				paragraphs: [
					'An AI application cannot answer that accurately from general knowledge. It needs access to your inventory information.',
					'With a suitable MCP integration, the application could request current stock levels through a tool your developer has made available, then explain the results in plain language.',
					'Other possible requests might include:',
				],
				bullets: [
					'Show orders that still need processing.',
					'Summarize sales for a selected date range.',
					'Find the return policy in our internal documentation.',
					"Prepare a draft reply using an order's delivery status.",
				],
			},
			{
				paragraphs: [
					'These are examples of what a developer could build. Connecting an MCP server does not automatically create every workflow or grant access to every part of a business.',
				],
			},
			{
				heading: 'How does MCP work?',
				paragraphs: [
					'There are three main parts:',
				],
				steps: [
					{ title: 'The host:', description: 'the AI application you interact with.' },
					{ title: 'The client:', description: 'the component inside that application that communicates with an MCP server.' },
					{ title: 'The server:', description: 'the program that makes selected information or capabilities available.' },
				],
			},
			{
				paragraphs: [
					'An MCP server can expose **tools**, such as checking an order; **resources**, such as reference documents; and **prompts**, which are reusable templates for particular interactions.',
					'For the store example, a developer could create a narrowly defined tool called `get_low_stock_products`. The AI application could discover that tool, request its execution when relevant, and use the returned information in its answer.',
					'The server and underlying application still need to enforce who is allowed to see that information.',
				],
			},
			{
				heading: 'Does MCP replace APIs?',
				paragraphs: [
					'MCP can work alongside existing APIs.',
					'For a Laravel application, for example, an MCP server could call an existing service or API that already handles inventory. Laravel would continue to enforce validation, access rules, and business logic.',
					'MCP provides a standard interface through which a compatible AI application can discover and request that capability. It does not remove the need to build the capability properly.',
					'For a single fixed integration, a direct API connection may already be enough. I would consider MCP when supporting compatible AI clients or exposing several useful capabilities makes the extra work worthwhile.',
				],
			},
			{
				heading: 'Permissions still matter',
				paragraphs: [
					'Giving AI access to business tools deserves the same care as giving a staff member access to an admin dashboard.',
					'My starting approach would be to expose a small set of read-only capabilities, return only the information needed, and check permissions on every request.',
					'Actions such as issuing refunds, changing records, or sending messages need stronger controls. Where appropriate, the application should show the proposed action and require confirmation before it runs.',
					'MCP does not make a connection automatically safe. Developers still need to review server trust, authentication, authorization, and how untrusted content might influence the AI application.',
				],
			},
			{
				heading: 'Where I would start',
				paragraphs: [
					'For a first project, I would choose one question people regularly need answered, such as “Which orders are waiting for processing?”',
					'Then I would connect one carefully scoped tool, test it against real permission rules, and check whether the answer actually saves someone time.',
					"That is the opportunity I see in MCP: making the information inside a system easier to use through conversation, while keeping the system's rules in place.",
					'If you are exploring an AI integration for your website or business application, you can learn more about my work here.',
				],
				action: { label: 'Explore my work', href: '/projects' },
			},
		],
		faqs: [
			{ question: 'What does MCP stand for?', answer: 'MCP stands for Model Context Protocol, an open standard that helps AI applications connect to external systems such as files, databases, and software tools.' },
			{ question: 'Does MCP replace an existing API?', answer: 'No. MCP can sit alongside an existing API or service layer, which should continue to enforce validation, permissions, and business rules.' },
			{ question: 'Is an MCP connection automatically safe?', answer: 'No. Developers still need to evaluate server trust, authentication, authorization, data access, confirmation controls, and the effects of untrusted content.' },
		],
	},
	{
		"slug": "when-two-websites-went-down-a-reminder-about-maintenance",
		"title": "When Two Websites Went Down: A Reminder About Maintenance",
		"excerpt": "What restoring Monili Jewellers and Transgulf taught me about troubleshooting, PHP environments, and the ongoing work of keeping business websites running.",
		"publishedAt": "2026-10-22",
		"readingTime": "4 min read",
		"tags": [
			"Websites",
			"Maintenance",
			"Troubleshooting"
		],
		"kicker": "Behind the scenes",
		"sections": [
			{
				"paragraphs": [
					"On October 21, two websites I help maintain, Monili Jewellers and Transgulf, experienced unexpected downtime. It was one of those days when everything seemed normal until, suddenly, it wasn’t.",
					"If you’ve worked in web development for a while, you probably know the feeling. One minute, things are running smoothly. The next, you’re investigating errors, reviewing configurations, and trying to work out what changed.",
					"Thankfully, both websites were back online after troubleshooting. The experience reminded me of something I often discuss with clients: launching a website is only the beginning. Keeping it running matters just as much."
				]
			},
			{
				"heading": "Getting the websites back online",
				"paragraphs": [
					"My first step was to investigate what was preventing the websites from loading properly. Was the problem in the application, a recent update, or the server configuration?",
					"After reviewing the setup, I narrowed my attention to the PHP environment. Both websites were running on PHP 8.2. I moved them to PHP 8.3, checked the necessary configurations, and verified that they were loading and functioning again.",
					"That resolved the immediate downtime. It sounds straightforward in a few sentences, but troubleshooting often means eliminating several possibilities before finding a change that restores service.",
					"There’s an important distinction here: the update restored the websites, but that alone doesn’t confirm the exact underlying cause. Further review of the server logs would be needed to establish why the previous environment failed. It would be misleading to conclude that PHP 8.2 itself was broken."
				]
			},
			{
				"heading": "What PHP has to do with your website",
				"paragraphs": [
					"PHP is one of the programming languages used to build websites and web applications. Visitors may never see it, but it can handle work behind the scenes, such as customer accounts, product information, bookings, and other business features.",
					"A website also depends on its database, application libraries, server configuration, and connected services. Those parts need to work together. A change in one part of that environment can affect the others.",
					"That’s why updating software takes some care. A newer version can bring improvements, but the application and its dependencies still need to be compatible. Changing PHP versions is not a universal fix for a website that has gone offline."
				]
			},
			{
				"heading": "How I approached the troubleshooting",
				"paragraphs": [
					"I focused on understanding the problem before making unnecessary changes. Here’s a simplified account of the work:"
				],
				"bullets": [
					{
						"title": "Check the website errors.",
						"description": "Investigate what is preventing the pages from loading and use that evidence to narrow the search."
					},
					{
						"title": "Review the server environment.",
						"description": "Look at the PHP setup and relevant configurations alongside the application’s requirements."
					},
					{
						"title": "Update the PHP environment.",
						"description": "In this incident, I changed PHP from 8.2 to 8.3 and checked the necessary configuration."
					},
					{
						"title": "Verify the recovery.",
						"description": "Check that both websites are loading and functioning again after the change."
					}
				]
			},
			{
				"heading": "The work customers don’t see",
				"paragraphs": [
					"Many business owners only think about maintenance when something stops working. I understand why. If customers can browse products and submit inquiries, the website appears to be doing its job.",
					"Behind the scenes, however, software may need updating, a security patch may be waiting, or a configuration may need attention. These tasks are easy to overlook because they don’t visibly change the homepage.",
					"A website can work today and still need technical attention tomorrow. That doesn’t mean something is always wrong. It means the environment around it continues to change."
				]
			},
			{
				"heading": "Why maintenance matters to a business",
				"paragraphs": [
					"When a website becomes unavailable, a customer may be unable to send an inquiry, check a product, or continue a purchase. Even a short interruption can create frustration for people who depend on it.",
					"Regular maintenance gives you a chance to address some problems before they interrupt that work. Depending on the website and the agreed scope, it can include:"
				],
				"bullets": [
					"Keeping application software and the server environment updated.",
					"Applying security patches and reviewing compatibility.",
					"Monitoring availability and performance.",
					"Keeping backups available and checking how recovery would work.",
					"Testing important customer tasks after changes."
				]
			},
			{
				"heading": "Restoring service is one part of the job",
				"paragraphs": [
					"Maintenance cannot guarantee that a website will never go down. It can help reduce avoidable problems and make recovery easier when something does happen.",
					"Every technical issue teaches me something. Sometimes the answer is an application fix; sometimes it’s a configuration change. In this case, updating the PHP environment was enough to restore service.",
					"The next responsibility is to understand the incident as clearly as the evidence allows. A successful recovery and a confirmed root cause are different things. Keeping that distinction clear helps guide the follow-up work and avoids drawing the wrong conclusion."
				]
			},
			{
				"heading": "Give your website attention before it needs an urgent fix",
				"paragraphs": [
					"If you run a business, ask your developer about updates, backups, compatibility checks, and ongoing support. Agree on who handles those tasks and who you can contact when something goes wrong.",
					"Your website represents your business online. Whether it’s a company website, an online store, or a custom system, it needs attention beyond its design and launch.",
					"I’m glad both websites were back online. It was a busy troubleshooting day, and a reminder of why I enjoy this work. There’s a lot of satisfaction in helping the things you’ve built keep working for the people who depend on them.",
					"I help businesses build, improve, and maintain their websites and custom systems. If you’re dealing with a technical issue, planning an upgrade, or looking for ongoing support, tell me what you need help with."
				],
				"action": {
					"label": "Get help with your website",
					"href": "/contact"
				}
			}
		],
		"faqs": [
			{
				"question": "Did PHP 8.2 cause the downtime?",
				"answer": "Updating the PHP environment from 8.2 to 8.3 and checking the configuration restored service in this incident. That result alone does not establish the exact cause; further server-log review would be needed."
			},
			{
				"question": "Will updating PHP fix every website issue?",
				"answer": "No. The right change depends on the errors, application requirements, dependencies, and server configuration. Compatibility and website functionality need to be checked when making a version change."
			},
			{
				"question": "Can maintenance prevent all downtime?",
				"answer": "No. Maintenance can help reduce avoidable problems and make recovery easier through updates, monitoring, compatibility checks, and backups."
			}
		]
	},
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
