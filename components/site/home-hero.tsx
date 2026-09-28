'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import {
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
	faArrowRight,
	faBars,
	faChevronDown,
	faEnvelope,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { profile } from '@/lib/resume-data'

import styles from './home-hero.module.css'

const mainNavigation = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/skills', label: 'Services' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/notes', label: 'News' },
	{ href: '/contact', label: 'Contact' },
]

const pageNavigation = [
	{ href: '/experience', label: 'Experience' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/notes', label: 'Notes' },
]

const socialLinks = [
	{ href: profile.github, label: 'GitHub', icon: faGithub },
	{ href: profile.linkedin, label: 'LinkedIn', icon: faLinkedinIn },
	{ href: profile.twitter, label: 'X', icon: faXTwitter },
	{ href: `mailto:${profile.email}`, label: 'Email', icon: faEnvelope },
]

export function HomeHero () {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className={styles.page}>
			<section className={styles.card} aria-labelledby='hero-title'>
				<header className={styles.header}>
					<Link href='/' className={styles.brand} aria-label='Larry Parba home'>
						LARRY<span>.</span>
					</Link>

					<nav className={styles.desktopNavigation} aria-label='Main navigation'>
						{mainNavigation.slice(0, 3).map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={item.href === '/' ? styles.activeLink : styles.navLink}
							>
								{item.label}
							</Link>
						))}

						<details className={styles.pagesMenu}>
							<summary>
								Pages
								<FontAwesomeIcon icon={faChevronDown} />
							</summary>
							<div className={styles.pagesDropdown}>
								{pageNavigation.map((item) => (
									<Link key={item.href} href={item.href}>
										{item.label}
									</Link>
								))}
							</div>
						</details>

						{mainNavigation.slice(3).map((item) => (
							<Link key={item.href} href={item.href} className={styles.navLink}>
								{item.label}
							</Link>
						))}
					</nav>

					<button
						type='button'
						className={styles.menuButton}
						onClick={() => setMenuOpen((isOpen) => !isOpen)}
						aria-expanded={menuOpen}
						aria-controls='home-menu'
						aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					>
						<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
					</button>

					{menuOpen ? (
						<nav id='home-menu' className={styles.mobileNavigation} aria-label='Menu navigation'>
							{[...mainNavigation, ...pageNavigation].map((item) => (
								<Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setMenuOpen(false)}>
									{item.label}
								</Link>
							))}
						</nav>
					) : null}
				</header>

				<div className={styles.hero}>
					<div className={styles.copy}>
						<p className={styles.eyebrow}>Independent full-stack developer</p>
						<h1 id='hero-title'>Full-Stack Web</h1>
						<p className={styles.displayAccent}>Developer Portfolio</p>
						<p className={styles.description}>
							I build scalable web applications, reliable APIs, and thoughtful digital products for growing teams.
						</p>
						<Link href='/about' className={styles.primaryCta}>
							Learn More
							<FontAwesomeIcon icon={faArrowRight} />
						</Link>
					</div>

					<div className={styles.illustration}>
						<Image
							src='/developer-team-hero-v2.png'
							alt='A collaborative team building a modern web application around a large monitor'
							width={1536}
							height={1024}
							priority
							sizes='(max-width: 980px) 92vw, 58vw'
						/>
					</div>
				</div>

				<div className={styles.socials} aria-label='Social links'>
					{socialLinks.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							target={item.href.startsWith('http') ? '_blank' : undefined}
							rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
							aria-label={item.label}
						>
							<FontAwesomeIcon icon={item.icon} />
						</Link>
					))}
				</div>
			</section>
		</div>
	)
}
