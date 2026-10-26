import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HalloweenLogo } from '@/components/site/halloween-logo'
import styles from './sample.module.css'

export const metadata: Metadata = {
	title: 'DavaoLease — Sample Brand Guidelines | Larry Parba',
	description: 'A sample brand guide with colors, typography, logo usage, and coordinated business material concepts inspired by DavaoLease.ph.',
	alternates: { canonical: '/brand-samples/davaolease' },
	openGraph: { title: 'DavaoLease — Sample Brand Guidelines', description: 'One identity, from website to everyday business materials.', url: '/brand-samples/davaolease', type: 'website' },
}

const colors = [
	{ name: 'Navy', hex: '#061845', use: 'Headings, identity, dark panels', light: false },
	{ name: 'Royal blue', hex: '#0058E3', use: 'Primary actions and links', light: false },
	{ name: 'Gold', hex: '#FEC300', use: 'Small highlights and badges', light: true },
	{ name: 'Light blue', hex: '#EDF3FF', use: 'Quiet backgrounds and fields', light: true },
]

function Logo () {
	return <Image src='/brand-samples/davaolease/logo.svg' alt='DavaoLease.ph' width={192} height={88} className={styles.logo} />
}

export default function BrandSamplePage () {
	return (
		<main className={styles.guide}>
			<nav className={styles.nav} aria-label='Brand guide navigation'>
				<HalloweenLogo><Link href='/blog/a-website-is-just-the-beginning'>← Back to the article</Link></HalloweenLogo>
				<span>Sample guide · 01 / 2026</span>
			</nav>
			<header className={styles.cover}>
				<div className={styles.coverTop}><Logo /><span className={styles.badge}>Brand study / DavaoLease.ph</span></div>
				<div className={styles.coverContent}><p className={styles.eyebrow}>A consistent identity. An everyday advantage.</p><h1>A place for your brand<br />to call home.</h1><p>A practical guide to bringing the DavaoLease identity from the website into the hands of your team.</p></div>
				<div className={styles.coverBottom}><span>Brand guidelines & application concepts</span><span>Prepared by Larry Parba · October 2026</span></div>
			</header>
			<div className={styles.notice}>Sample concept based on <a href='https://www.davaolease.ph/'>davaolease.ph</a>. The logo, colors, and typefaces come from the reference website; usage rules and applications below are proposed examples, not official brand standards.</div>
			<nav className={styles.contents} aria-label='Guide sections'>{['Identity', 'Color', 'Typography', 'Website', 'Applications'].map((name, i) => <a key={name} href={`#${name.toLowerCase()}`}><span>0{i + 1}</span>{name}</a>)}</nav>
			<section id='identity' className={styles.section}>
				<div className={styles.sectionHeading}><p className={styles.eyebrow}>01 / Identity</p><h2>Recognizable at every introduction.</h2><p>A familiar roofline and a clear name connect every touchpoint. Keep the original artwork intact and give it room to breathe.</p></div>
				<div className={styles.twoCol}><div className={styles.logoStage}><div className={styles.clearspace}><Logo /></div><span>Clear space: at least the height of the lowercase “d” on every side.</span></div><div className={styles.rules}><h3>Use the original mark</h3><ul><li>Place the full-color logo on white or a quiet, light background.</li><li>Start at 150 px wide digitally or 35 mm in print; check legibility at the final size.</li><li>Preserve the proportions, roofline, and original colors.</li><li>Avoid stretching, shadows, cropping, or placement over busy photos.</li><li>On dark layouts, place the original logo inside a white panel.</li></ul></div></div>
				<div className={styles.voice}><strong>Voice: clear, local, reassuring.</strong><p>Use direct language and useful details. For example: “Find a rental that fits your next chapter.” Describe verification precisely; avoid promises such as “zero risk” or guaranteed availability.</p></div>
			</section>
			<section id='color' className={styles.section}>
				<div className={styles.sectionHeading}><p className={styles.eyebrow}>02 / Color</p><h2>Grounded in navy.<br />Brought to life with blue.</h2><p>Let white and light blue do most of the work. Use navy for structure, royal blue for action, and gold sparingly.</p></div>
				<div className={styles.palette}>{colors.map(color => <div key={color.name} className={styles.swatch}><div style={{ background: color.hex, color: color.light ? '#061845' : '#FFFFFF' }}><strong>{color.name}</strong><code>{color.hex}</code></div><p>{color.use}</p></div>)}</div>
				<p className={styles.note}>Accessible pairings: white text on navy or royal blue; navy text on white, light blue, or gold. Avoid white text on gold. These are screen colors; proof printed materials before production.</p>
			</section>
			<section id='typography' className={styles.section}>
				<div className={styles.sectionHeading}><p className={styles.eyebrow}>03 / Typography</p><h2>A little character.<br />A lot of clarity.</h2></div>
				<div className={styles.twoCol}><div className={styles.typeCard}><span className={styles.eyebrow}>Playfair Display / Headings</span><div className={styles.serifSample}>Aa</div><h3>Your next chapter<br />starts here.</h3><p>Use 600–700 weight for short titles. Suggested sizes: 48–64 px for desktop heroes, 36–40 px on mobile, and 28–36 px for section headings. Fallback: Georgia.</p></div><div className={styles.typeCard}><span className={styles.eyebrow}>Work Sans / Body & interface</span><div className={styles.sansSample}>Aa</div><p className={styles.bodySample}>Helpful information.<br />Clear next steps.<br />Room to make a decision.</p><p>Use 400 for body text and 600 for labels. Start at 16–18 px with 1.5–1.7 line height. Keep paragraphs comfortably narrow. Fallback: Arial.</p></div></div>
			</section>
			<section id='website' className={styles.section}>
				<div className={styles.sectionHeading}><p className={styles.eyebrow}>04 / Website elements</p><h2>The same details, everywhere.</h2><p>Use an 8 px spacing rhythm, 12–16 px card corners, and clear labels. Keep actions at least 44 px tall and show a visible keyboard focus outline.</p></div>
				<div className={styles.uiSample}><div><span className={styles.goldBadge}>Sample listing</span><h3>Find your space in Davao.</h3><p>Explore the brand’s website for current information.</p><a className={styles.primary} href='https://www.davaolease.ph/'>Visit DavaoLease.ph ↗</a></div><div className={styles.fieldSample}><span className={styles.eyebrow}>Form style specimen</span><label htmlFor='sample-location'>Preferred location</label><input id='sample-location' defaultValue='Davao City' readOnly aria-describedby='sample-field-note' /><p id='sample-field-note'>Read-only example. Real forms should include helpful instructions and specific error messages.</p></div></div>
			</section>
			<section id='applications' className={styles.section}>
				<div className={styles.sectionHeading}><p className={styles.eyebrow}>05 / In everyday use</p><h2>One brand.<br />More ways to show up.</h2><p>Illustrative layouts for a calling card, a reusable document, and a presentation. Replace bracketed details with approved information before use.</p></div>
				<div className={styles.applications}>
					<figure><div className={styles.cardFront}><Logo /><p>Your next chapter<br />starts here.</p><span>davaolease.ph</span></div><div className={styles.cardBack}><strong>[Agent name]</strong><span>[Role / license details]</span><hr /><span>[Business phone]</span><span>[Business email]</span><b>davaolease.ph</b></div><figcaption><strong>Calling card · Front & back</strong><span>Suggested trim: 90 × 50 mm, with 3 mm bleed. Keep essential details 4 mm inside the trim. Add a tested QR code to the final artwork if included in the package.</span></figcaption></figure>
					<figure><div className={styles.document}><Logo /><span className={styles.eyebrow}>Quotation / Sample</span><h3>A clear proposal.<br />A considered next step.</h3><p>Prepared for [Client name]<br />Date: [DD Month YYYY]<br />Reference: [Quote number]</p><div className={styles.documentRow}><strong>Description</strong><strong>Amount</strong></div><div className={styles.documentRow}><span>[Agreed service]</span><span>PHP [amount]</span></div><div className={styles.documentRow}><strong>Total</strong><strong>PHP [total]</strong></div><p>[Scope, validity, payment terms, and next steps]</p><footer>davaolease.ph · [Business contact]</footer></div><figcaption><strong>Reusable business documents</strong><span>Carry the same header, blue rules, type hierarchy, and contact footer into quotations, proposals, invoices, and company letters. Add the required business and tax details to final documents.</span></figcaption></figure>
					<figure className={styles.slideFigure}><div className={styles.slide}><span className={styles.eyebrow}>DavaoLease.ph / Company introduction</span><h3>Local knowledge.<br />A clearer way<br />to find your space.</h3><span>[Presenter name] · [Date]</span><div className={styles.slideNumber}>01</div></div><figcaption><strong>Presentation · Opening slide</strong><span>Use a 16:9 canvas. Keep one main idea per slide; follow with service, process, and contact slides using the same margins and typography.</span></figcaption></figure>
				</div>
			</section>
			<footer className={styles.footer}><p className={styles.eyebrow}>From a website to a working identity</p><h2>Make it feel like your business.</h2><p>Your package can include the materials your team actually needs. We’ll agree on the scope together.</p><Link className={styles.primary} href='/contact'>Tell me about your business →</Link><Link className={styles.returnLink} href='/blog/a-website-is-just-the-beginning'>Return to “A Website Is Just the Beginning”</Link></footer>
		</main>
	)
}
