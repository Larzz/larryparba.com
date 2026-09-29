import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faDownload, faFileLines } from '@fortawesome/free-solid-svg-icons'
import type { Metadata } from 'next'

import { SiteShell } from '@/components/site/site-shell'
import styles from './cv.module.css'

const cvPath = '/Larry_Parba_Resume.pdf'

export const metadata: Metadata = {
	title: 'CV | Larry Parba',
	description: 'View or download Larry Parba’s updated 2026 curriculum vitae.',
}

export default function CvPage () {
	return (
		<SiteShell>
			<div className={styles.page}>
				<section className={styles.hero}>
					<div className={styles.container}>
						<div className={styles.heroCopy}>
							<span className={styles.kicker}><FontAwesomeIcon icon={faFileLines} /> Curriculum vitae</span>
							<h1>Experience, skills, and <span>selected work.</span></h1>
							<p>View my updated 2026 CV below, download a copy, or open it in a dedicated browser tab.</p>
						</div>
						<div className={styles.actions}>
							<a className={styles.primaryAction} href={cvPath} download='Larry_Parba_CV_2026.pdf'>
								<FontAwesomeIcon icon={faDownload} /> Download CV
							</a>
							<a className={styles.secondaryAction} href={cvPath} target='_blank' rel='noreferrer'>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Open in new tab
							</a>
						</div>
					</div>
				</section>

				<section className={styles.viewerSection} aria-labelledby='cv-viewer-title'>
					<div className={styles.container}>
						<div className={styles.viewerHeading}>
							<div>
								<span className={styles.documentLabel}>Document preview</span>
								<h2 id='cv-viewer-title'>Larry Parba — CV 2026</h2>
							</div>
							<span className={styles.documentMeta}>PDF · 2 pages</span>
						</div>

						<div className={styles.viewerFrame}>
							<iframe
								className={styles.pdfViewer}
								src={`${cvPath}#view=FitH&toolbar=1&navpanes=0`}
								title='Larry Parba CV 2026'
								loading='lazy'
							/>
						</div>

						<p className={styles.viewerFallback}>
							If the preview does not load on your device, <a href={cvPath} target='_blank' rel='noreferrer'>open the CV directly</a>.
						</p>
					</div>
				</section>
			</div>
		</SiteShell>
	)
}
