export interface ExperienceItem {
	company: string
	role: string
	location: string
	period: string
	summary: string
	highlights: string[]
}

export interface ProjectItem {
	name: string
	url: string
	description: string
	technologies: string[]
}

export const profile = {
	name: 'Larry Candelaria Parba',
	title:
		'Senior Full-Stack Web Developer | Laravel, Vue.js, React.js | Backend Systems & API Architect',
	email: 'larry.parba@outlook.com',
	github: 'https://github.com/Larzz',
	summary:
		'Senior Full-Stack Web Developer with 9+ years of experience building scalable web applications, backend systems, and API-driven platforms across e-commerce, enterprise, and government-related projects. Specialized in Laravel architecture, RESTful APIs, system optimization, and integrating AI-driven automation into production workflows.',
	education:
		'Bachelor of Science in Information Technology, Holy Cross of Davao College (2015)',
	linkedin: 'https://www.linkedin.com/in/larry-parba-52509699/',
	twitter: 'https://x.com/Larry_Parba',
}

export const coreCompetencies = [
	'Scalable Backend Architecture (Laravel, MVC, Modular Systems)',
	'REST API Design & Third-Party Integrations',
	'Database Design, Optimization & Query Performance (MySQL, MariaDB)',
	'AI API Integration & Workflow Automation Systems',
	'Frontend Development (Vue.js, React.js, Component-Based Architecture)',
	'Payment Gateway Integration (Stripe, Custom Gateways)',
	'Production Systems Debugging & Incident Resolution',
	'Server, DNS & Email Infrastructure Management (cPanel, Microsoft 365, Google Workspace)',
	'Performance Optimization (Caching, Query Optimization, Load Reduction)',
	'Legacy System Refactoring & Modernization',
	'Technical Client Communication & Requirements Analysis',
]

export const experience: ExperienceItem[] = [
	{
		company: 'Creativo DMCC',
		role: 'Senior Application Developer',
		location: 'Dubai, UAE',
		period: 'June 2019 - 2026',
		summary:
			'Led full-stack development and backend architecture for enterprise-grade systems, e-commerce platforms, and production infrastructure. Acted as technical lead for deployments, security incidents, and system scalability.',
		highlights: [
			'Led multiple production migrations and deployments with zero-downtime execution.',
			'Designed and maintained scalable Laravel-based backend architectures for high-traffic systems.',
			'Managed production infrastructure including servers, DNS, and enterprise email systems (Microsoft 365, Google Workspace).',
			'Resolved critical security incidents including website attacks and system vulnerabilities.',
			'Built and integrated AI-powered automation workflows for content and operational efficiency.',
			'Developed and optimized database schemas for performance-critical applications.',
			'Integrated payment gateways and external APIs for enterprise platforms.',
			'Mentored junior developers and enforced code quality standards across projects.',
		],
	},
	{
		company: 'Almani Lighting',
		role: 'IT Engineer / Web Developer',
		location: 'Dubai, UAE',
		period: 'Aug 2018 - June 2019',
		summary:
			'Maintained and enhanced a Laravel-based e-commerce platform and supported internal IT systems and infrastructure.',
		highlights: [
			'Improved frontend performance and refactored Vue.js components for maintainability.',
			'Developed marketing landing pages and campaign-driven web modules.',
			'Implemented backend enhancements and third-party service integrations.',
			'Supported IT infrastructure, troubleshooting, and internal workflow automation.',
		],
	},
	{
		company: 'Contrib',
		role: 'Web Developer',
		location: 'Philippines',
		period: 'Jan 2016 - Mar 2018',
		summary:
			'Worked on large-scale PHP systems managing domain infrastructure and internal tooling for automation and operations.',
		highlights: [
			'Built internal PHP-based tools and lightweight framework components for system operations.',
			'Developed backend modules for managing large-scale domain systems (20K+ domains).',
			'Converted UI/UX designs into production-ready web applications.',
			'Performed legacy system debugging, refactoring, and stability improvements.',
		],
	},
]

export const featuredProjects: ProjectItem[] = [
	{
		name: 'Vijit Pillai Art',
		url: 'https://vijitpillai.com',
		description:
			'E-commerce art platform with CMS-driven content management, payment integration, and transactional order flow.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Stripe'],
	},
	{
		name: 'Adio Luxury',
		url: 'https://adioluxury.ae',
		description:
			'Luxury brand platform built with Inertia.js architecture featuring dynamic admin-controlled content and form systems.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Mowasalat',
		url: 'https://mowasalat.ae',
		description:
			'Government service registration system with multi-step form workflows, validation pipelines, and backend processing logic.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Tip2gether',
		url: 'https://tip2get.com',
		description:
			'Real-time coordination platform for sports teams with event participation workflows and live data handling.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Pusher'],
	},
	{
		name: 'KMK Perfumes',
		url: 'https://kmkperfumes.com',
		description:
			'E-commerce system with product catalog management, checkout flow, and performance optimization enhancements.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Payment Gateway'],
	},
	{
		name: 'Trans Gulf',
		url: 'https://transgulf.ae',
		description:
			'Corporate website with CMS-driven service pages and lead generation system for business inquiries.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Eurostar Rental',
		url: 'https://eurostarrental.com',
		description:
			'Vehicle booking system with reservation workflows and backend fleet management logic.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Mercato Shopping Mall',
		url: 'https://mercatoshoppingmall.com',
		description:
			'High-traffic retail platform optimized for events, promotions, and performance under heavy user load.',
		technologies: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'Google Analytics'],
	},
	{
		name: 'Soporella',
		url: 'https://soporella.com',
		description:
			'Brand website with custom UI components and CMS-driven content architecture.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Shop Mesco',
		url: 'https://shopmesco.com',
		description:
			'E-commerce store with catalog management, checkout flow, and backend integrations.',
		technologies: ['Shopify', 'Liquid', 'JavaScript', 'Payment Gateway'],
	},
]

export const skills = {
	backend: ['PHP', 'Laravel', 'CodeIgniter', 'Yii'],

	frontend: ['Vue.js', 'React.js', 'JavaScript (ES6+)', 'Tailwind CSS'],

	database: ['MySQL', 'MariaDB'],

	system_design: [
		'API Architecture',
		'Scalable Backend Design',
		'Legacy System Refactoring',
	],

	ai: [
		'AI API Integration',
		'Prompt Engineering',
		'Workflow Automation',
		'AI-Assisted Development Tools',
	],

	devops: [
		'Server Management (cPanel, Linux basics)',
		'DNS & Domain Configuration',
		'Email Systems (Microsoft 365, Google Workspace)',
		'Git Version Control',
	],

	integrations: [
		'REST APIs',
		'Payment Gateways',
		'Third-Party SaaS Integrations',
	],
}