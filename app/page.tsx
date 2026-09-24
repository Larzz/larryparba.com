'use client'

import { useState } from 'react'
import Link from 'next/link'
import './home.css'
import { profile } from '@/lib/resume-data'

const Icon = ({ name, className = '' }: { name: string; className?: string }) => (
  <span aria-hidden='true' className={`material-symbols-outlined ${className}`}>{name}</span>
)

const services = [
  {
    tag: 'WEB ARCHITECTURE', icon: 'web', tone: 'sky', title: 'Modern High-Performance Web',
    description: 'Lightning-fast, SEO-optimized web platforms built with robust server-side execution and modern component design systems.',
    points: ['Scalable Laravel, React & Next.js applications', 'Headless CMS integrations & static pipelines', 'Performance-focused interfaces and APIs'],
    stack: ['TypeScript', 'Next.js', 'Laravel', 'PostgreSQL'],
  },
  {
    tag: 'CROSS-PLATFORM', icon: 'devices', tone: 'cyan', title: 'Mobile & Web Applications',
    description: 'End-to-end engineered applications with smooth reactive interfaces and resilient backends.',
    points: ['Responsive web and mobile experiences', 'Real-time integrations & REST APIs', 'Stripe checkout & subscription workflows'],
    stack: ['React', 'Vue.js', 'Node.js', 'Supabase'],
  },
  {
    tag: 'INFRASTRUCTURE', icon: 'dns', tone: 'indigo', title: 'Server Architecture & DevOps',
    description: 'Reliable Linux VPS deployments, containerized services, SSL/TLS configuration, and backup planning.',
    points: ['Linux VPS configuration & maintenance', 'Docker-based deployment workflows', 'Nginx, DNS & cloud infrastructure'],
    stack: ['Docker', 'Nginx', 'AWS', 'CI/CD'],
  },
  {
    tag: 'DELIVERABILITY', icon: 'mark_email_read', tone: 'emerald', title: 'Business Email & Deliverability',
    description: 'Improve inbox placement with sound DNS authentication, migrations, and mail server hygiene.',
    points: ['SPF, DKIM & DMARC configuration', 'Google Workspace / Microsoft 365 migration', 'Email diagnostics & ongoing monitoring'],
    stack: ['DMARC', 'DKIM', 'Microsoft 365', 'Google Workspace'],
  },
]

const pipeline = [
  { icon: 'webhook', title: 'Inbound Webhook', description: 'Form submission captured and validated before entering the workflow.', footer: '01 / intake' },
  { icon: 'smart_toy', title: 'AI Lead Scoring', description: 'Prospect context analyzed and routed by technical fit.', footer: '02 / enrichment' },
  { icon: 'forward_to_inbox', title: 'Smart Auto-Response', description: 'A tailored reply and next steps are prepared for the lead.', footer: '03 / response' },
  { icon: 'sync_alt', title: 'CRM & Team Alert', description: 'The opportunity is logged and the right team member is notified.', footer: '04 / handoff' },
]

const focusAreas = ['Web / Full-Stack', 'Mobile Apps', 'Email Deliverability', 'DevOps & Cloud VPS', 'Custom AI Automations & Agents']

function ServiceCard({ service }: { service: typeof services[number] }) {
  return <article className='portfolio-card service-card'>
    <div>
      <div className='service-top'><span className={`service-tag ${service.tone}`}>{service.tag}</span><Icon name={service.icon} className={`service-icon ${service.tone}`} /></div>
      <h3>{service.title}</h3>
      <p className='service-description'>{service.description}</p>
      <ul className='service-points'>{service.points.map(point => <li key={point}><Icon name='check_circle' />{point}</li>)}</ul>
    </div>
    <div className='stack-list'>{service.stack.map(item => <span key={item}>{item}</span>)}</div>
  </article>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <div className='portfolio-page'>
    <header className='portfolio-header'>
      <div className='portfolio-container header-inner'>
        <div className='brand-group'>
          <a href='#overview' className='brand' onClick={closeMenu}><span className='brand-mark'><Icon name='terminal' /></span><span>Larry Parba</span></a>
          <span className='availability'><span className='status-dot' />Available for projects</span>
        </div>
        <nav className='desktop-nav' aria-label='Main navigation'><a href='#services'>Services</a><a href='#pipeline'>AI Pipeline</a><a href='#results'>Case Study</a><a href='#booking'>Consultation</a></nav>
        <div className='header-actions'><a className='button button-primary header-book' href='#booking'><Icon name='event_available' />Book Call</a><button className='menu-button' aria-label='Open navigation menu' aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Icon name='menu' /></button></div>
      </div>
    </header>

    {menuOpen && <div className='drawer-backdrop' onClick={closeMenu}><aside className='mobile-drawer' onClick={event => event.stopPropagation()} aria-label='Mobile navigation'><div className='drawer-heading'><span className='brand'><span className='brand-mark'><Icon name='terminal' /></span>Larry Parba</span><button aria-label='Close navigation menu' onClick={closeMenu}><Icon name='close' /></button></div><nav>{[['Services','#services'],['AI Pipeline','#pipeline'],['Case Study','#results'],['Consultation','#booking']].map(([label,href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}</nav><a className='button button-primary' href='#booking' onClick={closeMenu}>Schedule Discovery <Icon name='arrow_forward' /></a></aside></div>}

    <main>
      <section id='overview' className='hero-section'><div className='portfolio-container'>
        <div className='hero-copy'><span className='eyebrow-pill'><span className='status-dot blue' />Full-Stack Engineer & Systems Consultant</span><h1>Engineering scalable apps, cloud servers & <span>intelligent AI automations.</span></h1><p>From robust web & mobile applications to rock-solid server infrastructure, high-deliverability email systems, and autonomous AI workflows built for high-growth ventures.</p><div className='hero-actions'><a className='button button-primary' href='#booking'>Schedule Free Discovery Call <Icon name='arrow_forward' /></a><a className='button button-secondary' href='#services'><Icon name='explore' />Explore Services</a></div></div>
        <div className='metrics'><div className='portfolio-card metric'><span className='metric-icon sky'><Icon name='cloud_done' /></span><strong>9+</strong><span>YEARS BUILDING SYSTEMS</span></div><div className='portfolio-card metric'><span className='metric-icon emerald'><Icon name='rocket_launch' /></span><strong>10+</strong><span>SELECTED PROJECTS</span></div><div className='portfolio-card metric'><span className='metric-icon indigo'><Icon name='insights' /></span><strong>AI</strong><span>WORKFLOW AUTOMATION</span></div></div>
      </div></section>

      <section id='services' className='services-section section-pad'><div className='portfolio-container'><div className='section-heading split'><div><span className='section-kicker'>Expertise & Execution</span><h2>Core Technical Services</h2></div><p>Production-grade systems engineered with modern frameworks, high security standards, and maintainable foundations.</p></div><div className='services-grid'>{services.map(service => <ServiceCard key={service.tag} service={service} />)}<article className='portfolio-card service-card ai-card'><div><div className='service-top'><span className='service-tag sky'>AUTONOMOUS SYSTEMS & AI</span><Icon name='psychology' className='service-icon sky' /></div><h3>Custom AI Automation & Agent Workflows</h3><p className='service-description'>Internal pipelines, intelligent parsing agents, automated CRM updates, and custom AI orchestration that reduce repetitive work.</p><div className='ai-features'><div><strong>Autonomous Agents</strong><span>Tool execution, multi-step workflows & structured extraction.</span></div><div><strong>Self-Hosted n8n</strong><span>Private automation infrastructure with direct control.</span></div><div><strong>Lead Orchestration</strong><span>Lead enrichment, scoring & CRM pipeline sync.</span></div></div></div><div className='stack-list ai-stack'><div>{['n8n','LangChain','Python','OpenAI API','Anthropic'].map(item => <span key={item}>{item}</span>)}</div><small>Enterprise Security Ready</small></div></article></div></div></section>

      <section id='pipeline' className='pipeline-section section-pad'><div className='portfolio-container narrow'><div className='section-heading centered'><span className='section-kicker'>Interactive Architecture</span><h2>AI Pipeline Execution Flow</h2><p>See how an inbound lead can be ingested, enriched, and routed without manual handoffs.</p></div><div className='portfolio-card pipeline-panel'><div className='pipeline-toolbar'><div className='traffic-lights'><i/><i/><i/><span>lead-pipeline.workflow</span></div><span className='active-pill'><span className='status-dot' />WORKFLOW EXAMPLE</span></div><div className='pipeline-body'><div className='pipeline-grid'>{pipeline.map((step,index) => <div className='pipeline-step' key={step.title}><div className='pipeline-step-top'><b>{String(index + 1).padStart(2,'0')}</b><Icon name={step.icon} /></div><h3>{step.title}</h3><p>{step.description}</p><small>{step.footer}</small></div>)}</div><div className='pipeline-status'><span>INTAKE → ENRICHMENT → RESPONSE → HANDOFF</span><span className='success-label'><Icon name='check' /> HUMAN REVIEW WHEN NEEDED</span></div></div></div></div></section>

      <section id='results' className='results-section section-pad'><div className='portfolio-container quote-wrap'><div className='portfolio-card quote-card'><div className='quote-top'><span className='result-pill'><Icon name='verified' />PRODUCTION EXPERIENCE</span><span className='result-context'>WEB / API / INFRASTRUCTURE</span></div><blockquote>“I build scalable web applications, backend systems, and API-driven platforms across e-commerce, enterprise, and government-related projects.”</blockquote><div className='quote-footer'><span className='avatar'>LP</span><span><strong>Larry Parba</strong><small>Full-Stack Engineer & Systems Consultant</small></span><Link href='/projects'>View selected projects <Icon name='arrow_forward' /></Link></div></div></div></section>

      <section id='booking' className='booking-section section-pad'><div className='portfolio-container booking-grid'><div className='booking-copy'><span className='section-kicker'>Direct Access</span><h2>Ready to elevate your systems or launch your next product?</h2><p>Select your priority focus areas and let&apos;s structure an actionable rollout roadmap tailored to your stack and timeline.</p><div className='booking-benefits'><div><Icon name='schedule' /><span><strong>Direct Response</strong><small>Discuss your project with the engineer doing the work.</small></span></div><div><Icon name='lock' /><span><strong>Confidentiality Assured</strong><small>Private project discussions from the first message.</small></span></div><div><Icon name='handshake' /><span><strong>Flexible Engagement</strong><small>Project-based or ongoing technical support.</small></span></div></div><div className='email-card'><small>DIRECT EMAIL INQUIRIES</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div><form className='portfolio-card consultation-form' action='https://formspree.io/f/maqaeekl' method='POST'><fieldset><legend>Select Focus Areas:</legend><div className='focus-options'>{focusAreas.map((area,index) => <label key={area}><input type='checkbox' name='focusAreas' value={area} defaultChecked={[0,2,4].includes(index)} /><span>{area}</span></label>)}</div></fieldset><div className='form-row'><label>YOUR NAME<input required name='name' type='text' placeholder='e.g. Alex Henderson' /></label><label>WORK EMAIL<input required name='email' type='email' placeholder='alex@company.com' /></label></div><label>PROJECT BRIEF / CHALLENGE<textarea name='message' required rows={3} placeholder="Briefly describe what you're building, server bottlenecks, or automation goals..." /></label><button className='button button-primary' type='submit'>Request a Consultation <Icon name='send' /></button><p>Direct engineer access · Confidential conversation</p></form></div></section>
    </main>

    <footer className='portfolio-footer'><div className='portfolio-container'><div className='footer-main'><div><a href='#overview' className='footer-brand'><Icon name='terminal' />Larry Parba</a><p>Full-stack digital engineering & infrastructure consultancy.</p></div><nav aria-label='Footer navigation'><Link href='/about'>About</Link><Link href='/projects'>Projects</Link><Link href='/experience'>Experience</Link><Link href='/notes'>Notes</Link><Link href='/contact'>Contact</Link></nav><div className='footer-socials'><a href={profile.github} target='_blank' rel='noreferrer' aria-label='GitHub'><Icon name='terminal' /></a><a href={profile.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'><Icon name='work' /></a><a href={`mailto:${profile.email}`} aria-label='Email'><Icon name='mail' /></a></div></div><div className='footer-bottom'><span>© {new Date().getFullYear()} Larry Parba (larryparba.com). All rights reserved.</span><span><span className='status-dot' /> Available for new projects</span></div></div></footer>
    <nav className='mobile-bottom-nav' aria-label='Quick navigation'><a href='#overview'><Icon name='home' />Overview</a><a href='#services'><Icon name='dns' />Services</a><a href='#pipeline'><Icon name='psychology' />AI Flow</a><a href='#booking'><Icon name='event_available' />Book</a></nav>
  </div>
}
