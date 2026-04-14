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
		'Web Application Developer | Laravel, Vue.js, React.js & AI-Integrated Systems Specialist',
	email: 'larry.parba@outlook.com',
	github: 'https://github.com/Larzz',
	summary:
		'Senior Web Application Developer with 9+ years of experience designing and scaling web systems across e-commerce and enterprise platforms, with strong expertise in Laravel, REST APIs, and AI-integrated workflows.',
	education: 'Bachelor of Science in Information Technology, Holy Cross of Davao College (2015)',
	linkedin: 'https://www.linkedin.com/in/larry-parba-52509699/',
	twitter: 'https://x.com/Larry_Parba',
}

export const coreCompetencies = [
	'Scalable Backend Architecture (Laravel, MVC Design Patterns)',
	'REST API Development & Third-Party Integrations',
	'AI API Integration & Intelligent Workflow Automation',
	'Vue.js & React.js Component-Based Frontend Development',
	'Database Design & Optimization (MySQL, MariaDB)',
	'Server & DNS Management (cPanel, Email, Domain Configuration)',
	'Performance Optimization & Debugging',
	'Payment Gateway Integration',
	'Production Incident Resolution',
	'Client Technical Communication & Requirements Analysis',
]

export const experience: ExperienceItem[] = [
	{
		company: 'Creativo DMCC',
		role: 'Application Developer',
		location: 'Dubai, UAE',
		period: 'June 2019 - 2026',
		summary:
			'Led backend and full-stack development across enterprise and e-commerce projects while serving as the technical escalation point for infrastructure and production incidents.',
		highlights: [
			'Led multiple production server migrations with zero data loss.',
			'Manage emails and domains for clients.',
			'Manage server and DNS configurations.',
			'Resolved critical website attacks and improved security configurations.',
			'Architected custom database schemas for high-volume client platforms.',
			'Integrated payment, AI, and enterprise APIs.',
			'Implemented AI-powered automation workflows for content and operations.',
			'Mentored junior developers and reviewed code quality.',
		],
	},
	{
		company: 'Almani Lighting',
		role: 'IT Engineer',
		location: 'Dubai, UAE',
		period: 'Aug 2018 - June 2019',
		summary:
			'Maintained and improved a Laravel e-commerce platform while supporting company-wide IT systems.',
		highlights: [
			'Improved application performance and modularized Vue.js components.',
			'Developed product launch landing pages.',
			'Assisted backend enhancements and third-party integrations.',
			'Supported internal workflow automation and IT troubleshooting.',
		],
	},
	{
		company: 'Contrib',
		role: 'Web Developer',
		location: 'Philippines',
		period: 'Jan 2016 - March 2018',
		summary:
			'Worked on large-scale PHP systems managing over 20K domains.',
		highlights: [
			'Built a custom lightweight PHP framework for internal use.',
			'Developed backend modules and domain management tools.',
			'Converted UI/UX mockups into production-ready features.',
			'Stabilized legacy codebases through targeted debugging and refactoring.',
		],
	},
]

export const featuredProjects: ProjectItem[] = [
	{
		name: 'Vijit Pillai Art',
		url: 'https://vijitpillai.com',
		description: 'Custom e-commerce art gallery with payment integration and CMS-driven content management.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Stripe'],
	},
	{
		name: 'Adio Luxury',
		url: 'https://adioluxury.ae',
		description: 'Luxury brand website with dynamic forms and admin-controlled content using Inertia.js architecture.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
	},	
	{
		name: 'Mowasalat',
		url: 'https://mowasalat.ae',
		description: 'Government service platform with multi-form registration system and backend validation workflows.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Tip2gether',
		url: 'https://tip2get.com',
		description: 'Sports team coordination platform with user interaction and real-time data handling.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Pusher'],
	},
	{
		name: 'KMK Perfumes',
		url: 'https://kmkperfumes.com',
		description: 'E-commerce platform with product management, checkout flow, and performance optimization.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Payment Gateway'],
	},
	{
		name: 'Trans Gulf',
		url: 'https://transgulf.ae',
		description: 'Corporate website with service listings, lead generation forms, and CMS integration.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Eurostar Rental',
		url: 'https://eurostarrental.com',
		description: 'Vehicle rental platform with booking system and backend service management.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Mercato Shopping Mall',
		url: 'https://mercatoshoppingmall.com',
		description: 'High-traffic retail website with promotional content, events, and performance enhancements.',
		technologies: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'Google Analytics'],
	},
	{
		name: 'Soporella',
		url: 'https://soporella.com',
		description: 'Brand-focused website with custom UI components and content management.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
	},
	{
		name: 'Shop Mesco',
		url: 'https://shopmesco.com',
		description: 'Online store with catalog management, checkout system, and backend integrations.',
		technologies: ['Shopify', 'Liquid', 'JavaScript', 'Payment Gateway'],
	},
]

export const skills = {
	backend: ['PHP', 'Laravel', 'CodeIgniter', 'Yii'],
	frontend: ['Vue.js', 'React.js', 'JavaScript (ES6+)', 'Tailwind CSS'],
	database: ['MySQL', 'MariaDB'],
	ai: [
		'AI API Integration',
		'Prompt Engineering',
		'Workflow Automation',
		'AI-Assisted Development Tools',
	],
	devops: ['cPanel', 'DNS Management', 'Email Systems', 'Git', 'GitHub'],
	integrations: ['Payment Gateways', 'REST APIs', 'AI APIs', 'Third-Party Services'],
}
