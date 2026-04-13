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
		name: 'KMK Perfumes',
		url: 'https://kmkperfumes.com',
		description: 'E-commerce implementation and platform optimization.',
	},
	{
		name: 'Trans Gulf',
		url: 'https://transgulf.ae',
		description: 'Business web platform with backend integrations.',
	},
	{
		name: 'Eurostar Rental',
		url: 'https://eurostarrental.com',
		description: 'Service platform support and feature development.',
	},
	{
		name: 'Mercato Shopping Mall',
		url: 'https://mercatoshoppingmall.com',
		description: 'High-traffic website support and enhancements.',
	},
	{
		name: 'Soporella',
		url: 'https://soporella.com',
		description: 'Client-focused site development and maintenance.',
	},
	{
		name: 'Shop Mesco',
		url: 'https://shopmesco.com',
		description: 'Commerce functionality and backend support.',
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
