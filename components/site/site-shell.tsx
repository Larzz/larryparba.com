'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

import brandLogo from '@/app/icon3.png'
import { profile } from '@/lib/resume-data'
import styles from './site-shell.module.css'

const navItems = [
	{ href: '/#services', label: 'Services' },
	{ href: '/#pipeline', label: 'AI Pipeline' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/blog', label: 'Blog' },
]

interface SiteShellProps {
	children: ReactNode
}

export function SiteShell ({ children }: SiteShellProps) {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)
	const isActive = (href: string) => !href.includes('#') && pathname.startsWith(href)

	return (
		<div className={styles.shell}>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.headerInner}>
						<div className={styles.brandGroup}>
							<Link href='/' className={styles.brand} aria-label='Larry Parba home'>
								<Image className={styles.brandLogo} src={brandLogo} alt='' priority />
								<span className={styles.brandCopy}>
									<span className={styles.brandName}>Larry Parba</span>
									<span className={styles.availability}><span className={styles.statusDot} />Available for projects</span>
								</span>
							</Link>
						</div>

						<nav className={styles.desktopNav} aria-label='Main navigation'>
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={isActive(item.href) ? styles.activeNav : undefined}
									aria-current={isActive(item.href) ? 'page' : undefined}
								>
									{item.label}
								</Link>
							))}
						</nav>

						<div className={styles.headerActions}>
							<div className={styles.socialActions} aria-label='Social links'>
								<a href={profile.messenger} target='_blank' rel='noopener noreferrer' aria-label='Message Larry on Messenger' title='Messenger'>
									<FontAwesomeIcon icon={faFacebookMessenger} />
								</a>
								<a href={profile.twitter} target='_blank' rel='noopener noreferrer' aria-label='Follow Larry on X' title='X'>
									<FontAwesomeIcon icon={faXTwitter} />
								</a>
							</div>
							<button
								type='button'
								className={styles.menuButton}
								onClick={() => setMenuOpen(true)}
								aria-label='Open navigation menu'
								aria-expanded={menuOpen}
							>
								<FontAwesomeIcon icon={faBars} />
							</button>
						</div>
					</div>
				</div>
			</header>

			{menuOpen ? (
				<div className={styles.drawerBackdrop} onClick={() => setMenuOpen(false)}>
					<aside className={styles.drawer} onClick={(event) => event.stopPropagation()} aria-label='Mobile navigation'>
						<div className={styles.drawerHeading}>
							<span className={styles.brand}><Image className={styles.brandLogo} src={brandLogo} alt='' /><span className={styles.brandName}>Larry Parba</span></span>
							<button type='button' onClick={() => setMenuOpen(false)} aria-label='Close navigation menu'><FontAwesomeIcon icon={faXmark} /></button>
						</div>
						<nav>
							{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={isActive(item.href) ? styles.drawerActive : undefined}>{item.label}</Link>)}
						</nav>
						<div className={styles.drawerSocials}>
							<a href={profile.messenger} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebookMessenger} /> Messenger</a>
							<a href={profile.twitter} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faXTwitter} /> X / Twitter</a>
						</div>
					</aside>
				</div>
			) : null}

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.footerMain}>
						<div>
							<Link href='/' className={styles.footerBrand}><Image className={styles.footerLogo} src={brandLogo} alt='' /> Larry Parba</Link>
							<p>Full-stack digital engineering &amp; infrastructure consultancy.</p>
						</div>
						<nav aria-label='Footer navigation'>
							<Link href='/about'>About</Link><Link href='/projects'>Projects</Link><Link href='/experience'>Experience</Link><Link href='/blog'>Blog</Link><Link href='/cv'>CV</Link><Link href='/#booking'>Consultation</Link><Link href='/contact'>Contact</Link>
						</nav>
					</div>
					<div className={styles.footerBottom}>
						<span>© {new Date().getFullYear()} Larry Parba. All rights reserved.</span>
						<a href={`mailto:${profile.email}`}>{profile.email}</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
