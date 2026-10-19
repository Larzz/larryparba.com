export interface ExperienceItem {
	company: string
	role: string
	location: string
	period: string
	summary: string
	highlights: string[]
	duration: string
	logo: string
}

export interface ProjectItem {
	name: string
	slug: string
	category: string
	url: string
	summary: string
	description: string
	technologies: string[]
	logo: string
	image: string
	imageAlt: string
	what_i_did?: string
	responsibilities?: string[]
	keyFeatures?: string[]
}

export const profile = {
	name: 'Larry Candelaria Parba',
	title:
		'Full-Stack Web Developer | Laravel, Vue.js, React.js | Backend Systems & API Architect',
	email: 'larry.parba@outlook.com',
	github: 'https://github.com/Larzz',
	summary:
		'Full-Stack Web Developer with 9+ years of experience building scalable web applications, backend systems, and API-driven platforms across e-commerce, enterprise, and government-related projects. Specialized in Laravel architecture, RESTful APIs, system optimization, and integrating AI-driven automation into production workflows.',
	education:
		'Bachelor of Science in Information Technology, Holy Cross of Davao College (2015)',
	linkedin: 'https://www.linkedin.com/in/larry-parba-52509699/?isSelfProfile=true',
	messenger: 'https://www.messenger.com/e2ee/t/ambrosiass',
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
		role: 'Application Developer',
		location: 'Dubai, UAE',
		period: 'June 2019 - March 2026',
		duration: '7 years',
		logo: 'companies/creativo.svg',
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
		duration: '10 months',
		logo: 'companies/almani.webp',
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
		duration: '2 years',
		logo: 'companies/contrib.png',
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
		name: 'DavaoLease',
		slug: 'davao-lease',
		category: 'Product',
		url: 'https://www.davaolease.ph',
		summary:
			'A verified property marketplace for discovering homes and condos for rent or sale across Davao City.',
		description:
			'Built a focused real-estate marketplace that connects renters and buyers with verified local listings and agents. The product combines property discovery, detailed search filters, featured inventory, and agent inquiry workflows in a responsive experience.',
		technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Marketplace'],
		logo: 'projects/davaolease.ph.png',
		image: '/projects/davao-lease.webp',
		imageAlt: 'DavaoLease property marketplace homepage preview',
		responsibilities: [
			'Led the full-stack implementation of the marketplace and its responsive customer-facing experience.',
			'Built structured property discovery flows for rental and for-sale listings across Davao City.',
			'Developed search and filtering controls for property type, location, rooms, and budget.',
			'Implemented listing presentation, featured inventory, and direct agent inquiry workflows.',
			'Created reusable UI patterns for property cards, location discovery, and category landing sections.',
		],
		keyFeatures: [
			'Verified property and agent marketplace',
			'Rent and buy discovery journeys',
			'Multi-criteria property search',
			'Featured listings and popular locations',
			'Direct customer-to-agent inquiries',
			'Responsive product experience',
		],
	},
	{
		name: 'PahatudFood',
		slug: 'pahatud-food',
		category: 'Product',
		url: 'https://pahatud.com',
		summary:
			'A local food-delivery marketplace connecting Davao diners with neighborhood restaurants and delivery partners.',
		description:
			'Built a local food-delivery product around restaurant discovery, mobile ordering, delivery tracking, and partner onboarding. The platform gives customers a simple ordering journey while helping local restaurants reach more customers.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Marketplace'],
		logo: 'projects/pahatud.com.png',
		image: '/projects/pahatud-food.webp',
		imageAlt: 'PahatudFood local food delivery product homepage preview',
		responsibilities: [
			'Led the full-stack implementation of the customer and restaurant-partner experiences.',
			'Built restaurant discovery, menu browsing, ordering, and delivery-status workflows.',
			'Developed a structured onboarding flow for local restaurant partners.',
			'Implemented responsive interfaces that support both mobile-first customers and business users.',
			'Created scalable content and partner-management workflows for continued marketplace growth.',
		],
		keyFeatures: [
			'Local restaurant marketplace',
			'Mobile-first food ordering',
			'Order confirmation and delivery tracking',
			'Restaurant partner onboarding',
			'Partner discovery and promotion',
			'Responsive customer experience',
		],
	},
	{
		name: 'Solene',
		slug: 'solene',
		category: 'Product',
		url: 'https://www.solene.ph',
		summary:
			'A beauty-services marketplace helping clients discover and book verified makeup artists in Davao City.',
		description:
			'Built a two-sided marketplace for clients and makeup artists, combining service-based discovery, local search, artist profiles, portfolio inspiration, and booking journeys in a polished beauty-focused interface.',
		technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'Marketplace'],
		logo: 'projects/solene.ph.png',
		image: '/projects/solene.webp',
		imageAlt: 'Solene makeup artist marketplace homepage preview',
		responsibilities: [
			'Led the full-stack implementation of the client and artist marketplace journeys.',
			'Built service, location, and name-based artist discovery with structured search controls.',
			'Developed artist profile, portfolio, pricing, and booking presentation workflows.',
			'Created artist onboarding and marketplace growth touchpoints across the product.',
			'Implemented responsive, reusable interfaces aligned with the Solene visual identity.',
		],
		keyFeatures: [
			'Local makeup artist marketplace',
			'Service and location-based search',
			'Artist profiles and portfolios',
			'Client booking journeys',
			'Artist onboarding experience',
			'Beauty inspiration discovery',
		],
	},
	{
		name: 'Ken Global Transport Corporation',
		slug: 'ken-global',
		category: 'Corporate Website',
		url: 'https://kenglobal.com.ph',
		summary:
			'A logistics company website presenting freight, distribution, warehousing, and customs services across the Philippines.',
		description:
			'Developed a modern corporate website for a Philippine logistics provider, with a clear service architecture, trust-building company content, and quote-generation pathways for prospective customers.',
		technologies: ['WordPress', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/kenglobal.com.ph.png',
		image: '/projects/ken-global.webp',
		imageAlt: 'Ken Global Transport Corporation website homepage preview',
		responsibilities: [
			'Implemented the responsive corporate website from the supplied brand direction.',
			'Structured service content for freight forwarding, distribution, logistics, warehousing, and customs clearance.',
			'Built clear quote-request and contact pathways to support lead generation.',
			'Created reusable sections for company positioning, services, locations, and trust signals.',
			'Optimized the page hierarchy and responsive behavior across common device sizes.',
		],
		keyFeatures: [
			'Corporate logistics website',
			'Service-led content architecture',
			'Quote-request conversion flow',
			'Company and location presentation',
			'Responsive frontend implementation',
			'Lead-generation contact experience',
		],
	},
	{
		name: 'Conversion Circle Solutions',
		slug: 'conversion-circle-solutions',
		category: 'Lead Generation Website',
		url: 'https://conversioncirclesolutions.com',
		summary:
			'A conversion-focused agency website built to turn qualified service-business traffic into assessment leads.',
		description:
			'Developed a conversion-led marketing site that explains the agency method, demonstrates measurable client outcomes, builds founder trust, and drives qualified visitors toward a structured assessment form.',
		technologies: ['WordPress', 'PHP', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/conversioncirclesolutions.com.png',
		image: '/projects/conversion-circle-solutions.webp',
		imageAlt: 'Conversion Circle Solutions agency website homepage preview',
		responsibilities: [
			'Implemented a responsive, conversion-focused website around the agency positioning and offer.',
			'Built reusable content sections for the process, founder profile, case studies, testimonials, and FAQs.',
			'Developed the lead-assessment form and supporting validation workflows.',
			'Created clear conversion paths and calls to action throughout the long-form page.',
			'Optimized the interface for readability, trust, and consistent behavior across devices.',
		],
		keyFeatures: [
			'Conversion-focused landing experience',
			'Lead assessment workflow',
			'Case study and testimonial content',
			'Method and process visualization',
			'FAQ and objection handling',
			'Responsive long-form layout',
		],
	},
	{
		name: 'Monili Jewellers',
		slug: 'monili-jewellers',
		category: 'E-commerce',
		url: 'https://monilijewellers.com',
		summary:
			'A luxury jewellery storefront featuring curated collections, product discovery, gifting, and customer-service journeys.',
		description:
			'Developed and maintained an e-commerce experience for a luxury jewellery brand, combining collection-based shopping, rich product presentation, store discovery, and customer-support touchpoints.',
		technologies: ['E-commerce', 'PHP', 'JavaScript', 'MySQL', 'Payment Gateway Integration'],
		logo: 'projects/monilijewellers.com.png',
		image: '/projects/monili-jewellers.webp',
		imageAlt: 'Monili Jewellers luxury e-commerce homepage preview',
		responsibilities: [
			'Implemented and maintained the responsive luxury storefront experience.',
			'Built collection and category discovery flows across the jewellery catalog.',
			'Developed product presentation, gifting, favorites, and customer-service touchpoints.',
			'Supported commerce content updates and ongoing storefront enhancements.',
			'Optimized the interface for premium visual presentation across desktop and mobile.',
		],
		keyFeatures: [
			'Luxury jewellery storefront',
			'Collection and category browsing',
			'Product discovery and favorites',
			'Gift card and gifting journeys',
			'Store-location presentation',
			'Responsive e-commerce experience',
		],
	},
	{
		name: 'Lanka Princess',
		slug: 'lanka-princess',
		category: 'Hospitality Website',
		url: 'https://www.lankaprincess.de',
		summary:
			'A multilingual Ayurveda hotel website presenting rooms, treatments, dining, wellness programs, and booking offers.',
		description:
			'Developed and maintained a content-rich hospitality website for an Ayurveda resort in Sri Lanka, bringing rooms, wellness treatments, dining, yoga programs, special offers, and guest inquiries into one coherent experience.',
		technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'Multilingual Content'],
		logo: 'projects/lankaprincess.de.png',
		image: '/projects/lanka-princess.webp',
		imageAlt: 'Lanka Princess Ayurveda hotel website homepage preview',
		responsibilities: [
			'Implemented and maintained the responsive hospitality website and its content-rich page structure.',
			'Developed presentation sections for rooms, Ayurveda treatments, gastronomy, and wellness programs.',
			'Supported multilingual content and international guest journeys.',
			'Built inquiry and offer-discovery touchpoints for prospective guests.',
			'Optimized media presentation and responsive behavior across the long-form experience.',
		],
		keyFeatures: [
			'Multilingual hospitality website',
			'Room and treatment discovery',
			'Ayurveda and wellness content',
			'Special offer presentation',
			'Guest inquiry workflow',
			'Responsive media-rich experience',
		],
	},
	{
		name: 'Vijit Pillai Art',
		slug: 'vijit-pillai-art',
		category: 'E-commerce',
		url: 'https://vijitpillai.com',
		summary:
			'Luxury art e-commerce platform with CMS content, Stripe payments, DHL shipping, and automated order workflows.',
		description:
			'Developed and maintained a full-stack e-commerce platform for luxury art sales, featuring a CMS-driven architecture, secure payment processing, and automated order management workflows.',
		technologies: ['Laravel', 'React.js', 'Tailwind CSS', 'MySQL', 'Stripe Payment Gateway', 'DHL API Integration'],
		logo: 'projects/vijitpillai.com.png',
		image: '/projects/vijit-pillai-art.webp',
		imageAlt: 'Vijit Pillai Art e-commerce platform interface preview',
		responsibilities: [
			'Architected and integrated the complete backend infrastructure using Laravel.',
			'Implemented frontend design integration and responsive UI components based on provided creative assets.',
			'Managed product onboarding and catalog uploads within the CMS.',
			'Integrated the DHL API for real-time address validation, shipping rate calculation, and delivery cost estimation during checkout.',
			'Developed dynamic shipping computation logic based on customer location and order parameters.',
			'Integrated Stripe for secure online payment processing and transactional checkout workflows.',
			'Built and optimized the end-to-end order flow, including payment confirmation and shipping coordination.',
			'Collaborated with the client during API credential setup and external service configuration.',
		],
		keyFeatures: [
			'CMS-driven product and content management',
			'Real-time shipping fee calculation',
			'Secure card payment integration',
			'Responsive and optimized e-commerce experience',
			'Automated transactional order processing',
		],
	},
	{
		name: 'Adio Luxury',
		slug: 'adio-luxury',
		category: 'Brand Platform',
		url: 'https://adioluxury.ae',
		summary:
			'Luxury brand platform built with Laravel, Inertia.js, dynamic content management, and scalable form workflows.',
		description:
			'Developed and currently maintaining a full-stack luxury brand platform built with a modern Laravel and Inertia.js architecture, enabling seamless server-side rendering, dynamic content management, and scalable form processing workflows.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/adioluxury.ae.png',
		image: '/projects/adio-luxury.webp',
		imageAlt: 'Adio Luxury brand platform interface preview',
		responsibilities: [
			'Led the full-stack development of the platform, covering both backend architecture and frontend implementation.',
			'Converted static HTML designs into fully functional and reusable Vue.js/Inertia.js components.',
			'Architected and maintained Laravel-based backend services and business logic.',
			'Developed dynamic admin-controlled content management features for easier website maintenance and scalability.',
			'Built and optimized complex multi-step and long-form submission workflows with validation and structured data handling.',
			'Implemented automated email notification systems for both administrators and end-users upon form submissions.',
			'Integrated secure server-side form processing and database-driven content rendering.',
			'Maintained and continuously enhanced the platform for performance, usability, and maintainability.',
			'Collaborated closely with stakeholders for ongoing feature improvements and production support.',
		],
		keyFeatures: [
			'Dynamic CMS-driven content management',
			'Scalable form processing architecture',
			'Automated admin and customer email notifications',
			'Responsive luxury-focused frontend implementation',
			'Inertia.js-powered SPA-like user experience',
			'Modular and maintainable Laravel application structure',
		],
	},
	{
		name: 'Mowasalat',
		slug: 'mowasalat',
		category: 'Government Platform',
		url: 'https://mowasalat.ae',
		summary:
			'Government service registration system with multi-step citizen applications and centralized admin management.',
		description:
			'Developed a government service registration platform designed to handle structured citizen application workflows, multi-step form processing, and centralized administrative management.',
		technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/mowasalat.ae.png',
		image: '/projects/mowasalat.webp',
		imageAlt: 'Mowasalat registration platform interface preview',
		responsibilities: [
			'Led the complete full-stack development of the platform, covering both frontend and backend implementation.',
			'Built responsive and dynamic user interfaces using Vue.js, Inertia.js, and Tailwind CSS.',
			'Architected the Laravel backend for handling registration workflows, form validation pipelines, and secure data processing.',
			'Developed multi-step registration forms with structured validation, conditional logic, and optimized user experience.',
			'Implemented backend processing logic for handling applicant submissions and administrative review workflows.',
			'Created a dedicated administrator dashboard for managing, reviewing, and monitoring submitted registrations.',
			'Developed CRUD management functionalities for administrative users and backend operations.',
			'Integrated database-driven workflows for efficient application tracking and record management.',
			'Maintained and optimized application performance, validation handling, and system scalability.',
		],
		keyFeatures: [
			'Multi-step registration workflow system',
			'Centralized administrator dashboard',
			'Dynamic validation and backend processing',
			'Secure Laravel-based architecture',
			'Responsive government-service frontend interface',
			'Database-driven application management system',
		],
	},
	{
		name: 'Tip2gether',
		slug: 'tip2gether',
		category: 'Web Application',
		url: 'https://tip2gether.com',
		summary:
			'Real-time sports team coordination platform for event participation, live interactions, and activity workflows.',
		description:
			'Developed a real-time sports team coordination platform designed to manage event participation, live team interactions, and dynamic activity workflows.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Pusher'],
		logo: 'projects/tip2get.com.png',
		image: '/projects/tip2gether.webp',
		imageAlt: 'Tip2gether team coordination platform interface preview',
		responsibilities: [
			'Led the full-stack development of the platform, covering both backend architecture and frontend implementation.',
			'Developed dynamic and responsive user interfaces using Vue.js and Tailwind CSS.',
			'Architected Laravel backend services for handling real-time event coordination and participation workflows.',
			'Integrated Pusher for live data synchronization, real-time notifications, and instant activity updates.',
			'Built database-driven systems for managing teams, events, and participant interactions.',
			'Implemented secure API-driven communication between frontend and backend services.',
			'Optimized application performance and real-time data handling for seamless user experience.',
			'Maintained and enhanced the platform’s scalability and system stability.',
		],
		keyFeatures: [
			'Real-time team coordination system',
			'Live event participation workflows',
			'Instant notifications and data updates',
			'Responsive sports-focused frontend interface',
			'Scalable Laravel backend architecture',
			'Database-driven activity and event management',
		],
	},
	{
		name: 'KMK Perfumes',
		slug: 'kmk-perfumes',
		category: 'E-commerce',
		url: 'https://kmkperfumes.com',
		summary:
			'Luxury perfume e-commerce platform with product collections, multilingual browsing, and checkout workflows.',
		description:
			'Developed and maintained a full-featured e-commerce platform for a luxury perfume brand, focused on scalable product management, optimized checkout workflows, and performance-driven user experience enhancements. The platform supports dynamic product collections, multilingual browsing, and transactional purchasing workflows.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Payment Gateway Integration'],
		logo: 'projects/kmkperfumes.com.png',
		image: '/projects/kmk-perfumes.webp',
		imageAlt: 'KMK Perfumes e-commerce storefront interface preview',
		responsibilities: [
			'Led the full-stack development of the platform, covering backend architecture and frontend implementation.',
			'Developed responsive and dynamic storefront interfaces optimized for product browsing and conversions.',
			'Built backend systems for product catalog management, inventory handling, and collection organization.',
			'Implemented secure checkout and payment gateway integration for transactional order processing.',
			'Optimized website performance, loading speed, and frontend responsiveness for a better customer experience.',
			'Developed reusable Laravel and Vue.js components for scalable feature maintenance.',
			'Maintained and enhanced database-driven e-commerce workflows and CMS functionalities.',
			'Supported ongoing platform updates, product uploads, and content management operations.',
		],
		keyFeatures: [
			'Luxury perfume e-commerce platform',
			'Dynamic product and collection management',
			'Optimized checkout workflow',
			'Responsive frontend architecture',
			'Secure payment processing integration',
			'Performance-focused Laravel application structure',
		],
	},
	{
		name: 'Trans Gulf',
		slug: 'trans-gulf',
		category: 'Corporate Website',
		url: 'https://transgulf.ae',
		summary:
			'Corporate CMS website for engineering and contracting services with inquiry and lead-generation workflows.',
		description:
			'Developed a corporate website focused on showcasing infrastructure, contracting, and engineering services through a CMS-driven architecture and business inquiry management system. The platform was designed to support scalable content management and lead generation workflows.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/transgulf.ae.png',
		image: '/projects/trans-gulf.webp',
		imageAlt: 'Trans Gulf corporate website interface preview',
		responsibilities: [
			'Led the full-stack development of the website, including backend systems and frontend implementation.',
			'Converted design assets into responsive and production-ready Blade templates.',
			'Developed CMS-driven service and project pages for easier administrative content management.',
			'Built inquiry and lead-generation forms with backend validation and structured submission handling.',
			'Implemented database-driven content architecture for scalable project and service management.',
			'Optimized frontend responsiveness and website performance across devices.',
			'Maintained and enhanced backend workflows for content updates and operational scalability.',
		],
		keyFeatures: [
			'CMS-driven corporate website',
			'Dynamic service and project management',
			'Business inquiry and lead generation system',
			'Responsive frontend implementation',
			'Scalable Laravel backend architecture',
			'Database-driven content workflows',
		],
	},
	{
		name: 'Eurostar Rental',
		slug: 'eurostar-rental',
		category: 'Booking Platform',
		url: 'https://eurostarrental.com',
		summary:
			'Vehicle booking and reservation platform with dynamic fleet listings and backend management workflows.',
		description:
			'Developed and maintained a vehicle booking and reservation platform for a UAE-based mobility services company, supporting dynamic fleet listings, booking workflows, and backend management operations. The platform was designed to streamline customer reservations and fleet coordination processes.',
		technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/eurostarrental.com.png',
		image: '/projects/eurostar-rental.svg',
		imageAlt: 'Eurostar Rental booking platform interface preview',
		responsibilities: [
			'Led the full-stack development of the booking platform, including frontend and backend implementation.',
			'Built responsive vehicle listing and reservation interfaces using Vue.js and Tailwind CSS.',
			'Architected backend booking workflows, reservation processing logic, and database management systems.',
			'Developed fleet management functionalities for handling vehicle availability and booking coordination.',
			'Implemented dynamic form handling and validation for customer reservation requests.',
			'Optimized frontend performance and user experience for high-traffic booking interactions.',
			'Maintained and enhanced platform scalability and operational workflows.',
		],
		keyFeatures: [
			'Vehicle reservation and booking workflows',
			'Fleet management system',
			'Dynamic vehicle catalog handling',
			'Responsive frontend implementation',
			'Laravel-based backend processing',
			'Database-driven booking management',
		],
	},
	{
		name: 'Mercato Shopping Mall',
		slug: 'mercato-shopping-mall',
		category: 'Retail Platform',
		url: 'https://mercatoshoppingmall.com',
		summary:
			'High-traffic retail platform for promotional campaigns, events, analytics, and customer engagement.',
		description:
			'Developed and maintained a high-traffic retail platform focused on promotional campaigns, event management, and customer engagement for a major shopping mall brand.',
		technologies: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'Google Analytics'],
		logo: 'projects/mercatoshoppingmall.com.png',
		image: '/projects/mercato-shopping-mall.webp',
		imageAlt: 'Mercato Shopping Mall retail platform interface preview',
		responsibilities: [
			'Led the full-stack development and maintenance of the website.',
			'Developed and customized WordPress themes and frontend components.',
			'Built promotional and event-focused landing pages optimized for high visitor traffic.',
			'Integrated analytics and tracking systems for user behavior monitoring and campaign performance analysis.',
			'Optimized website performance, caching, and frontend responsiveness.',
			'Maintained CMS workflows for marketing content, events, and promotional updates.',
			'Implemented dynamic UI interactions using jQuery and PHP-based custom functionalities.',
		],
		keyFeatures: [
			'High-traffic retail platform',
			'Event and promotional campaign management',
			'CMS-driven marketing content',
			'Analytics and tracking integration',
			'Responsive frontend optimization',
			'WordPress-based scalable architecture',
		],
	},
	{
		name: 'Soporella',
		slug: 'soporella',
		category: 'Brand Website',
		url: 'https://soporella.com',
		summary:
			'Brand-focused CMS website with custom UI components and scalable content presentation architecture.',
		description:
			'Developed a brand-focused website featuring a CMS-driven content structure, custom UI components, and scalable frontend architecture designed for modern product and brand presentation.',
		technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
		logo: 'projects/soporella.com.png',
		image: '/projects/soporella.svg',
		imageAlt: 'Soporella brand website interface preview',
		responsibilities: [
			'Led the full-stack development of the website, including frontend and backend systems.',
			'Converted UI/UX designs into responsive Blade and Tailwind CSS components.',
			'Built CMS-driven content management functionalities for easier brand and product updates.',
			'Developed reusable frontend components and structured content layouts.',
			'Implemented Laravel backend logic for dynamic content rendering and database-driven management.',
			'Maintained and optimized frontend performance and responsiveness.',
		],
		keyFeatures: [
			'CMS-driven brand website',
			'Custom UI component architecture',
			'Responsive frontend implementation',
			'Laravel backend management',
			'Dynamic content rendering',
			'Scalable database-driven structure',
		],
	},
	{
		name: 'Shop Mesco',
		slug: 'shop-mesco',
		category: 'E-commerce',
		url: 'https://shopmesco.com',
		summary:
			'Shopify e-commerce storefront with catalog management, Liquid theme customization, and checkout enhancements.',
		description:
			'Developed and maintained an e-commerce storefront built on Shopify, focused on product catalog management, transactional workflows, and third-party commerce integrations.',
		technologies: ['Shopify', 'Liquid', 'JavaScript', 'Payment Gateway Integration'],
		logo: 'projects/shopmesco.com.png',
		image: '/projects/shop-mesco.svg',
		imageAlt: 'Shop Mesco Shopify storefront interface preview',
		responsibilities: [
			'Led the frontend and backend customization of the Shopify store.',
			'Customized Shopify themes using Liquid and JavaScript for responsive storefront experiences.',
			'Implemented product catalog organization and dynamic collection handling.',
			'Integrated payment gateway workflows and checkout enhancements.',
			'Optimized frontend performance and customer purchasing experience.',
			'Managed store maintenance, content updates, and operational enhancements.',
		],
		keyFeatures: [
			'Shopify-based e-commerce platform',
			'Product catalog and collection management',
			'Payment gateway integration',
			'Responsive storefront customization',
			'Optimized checkout workflows',
			'Dynamic Liquid theme implementation',
		],
	},
]

export function getProjectBySlug (slug: string) {
	return featuredProjects.find((project) => project.slug === slug)
}

export const skills = {
	backend: ['PHP', 'Laravel', 'CodeIgniter', 'Yii'],

	frontend: ['Vue.js', 'React.js', 'JavaScript (ES6+)', 'Tailwind CSS'],

	database: ['MySQL', 'MariaDB', 'Supabase'],

	system_design: [
		'API Architecture',
		'Scalable Backend Design',
		'Legacy System Refactoring',
		'System Optimization',
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
		'Vercel'
	],

	integrations: [
		'REST APIs',
		'Payment Gateways',
		'Third-Party SaaS Integrations',
	],
}

export const whyWorkWithMe: string[] = [
	'I deliver production-ready code—carefully tested, documented, and deployed so everything runs smoothly beyond just my local setup.',
	'I prioritize clear and open communication, with regular updates and straightforward explanations whenever needed.',
	'I look beyond the immediate task, taking time to understand the “why” so we’re solving the right problem from the start.',
	'I value your time by writing clean, maintainable code, providing clear pull requests, and documentation that’s easy to follow.',
]
