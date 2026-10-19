import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { getBlogPostBySlug } from '@/lib/blog-data'

export const alt = 'Larry Parba engineering article preview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface BlogImageProps { params: Promise<{ slug: string }> }

function formatDate (date: string) {
	return new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	}).format(new Date(`${date}T00:00:00Z`))
}

export default async function BlogOpenGraphImage ({ params }: BlogImageProps) {
	const post = await getBlogPostBySlug((await params).slug)
	const [spaceGrotesk, jetBrainsMono] = await Promise.all([
		readFile(join(process.cwd(), 'public/fonts/space-grotesk-700.ttf')),
		readFile(join(process.cwd(), 'public/fonts/jetbrains-mono-600.ttf')),
	])

	const title = post?.title ?? 'Engineering Notes'
	const excerpt = post?.excerpt ?? 'Practical ideas from building and maintaining production software.'

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				background: 'linear-gradient(135deg, #0f172a 0%, #111f3a 58%, #073b61 100%)',
				color: '#ffffff',
				padding: '64px 72px',
				fontFamily: 'Space Grotesk',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					right: '-120px',
					top: '-180px',
					width: '540px',
					height: '540px',
					borderRadius: '999px',
					background: 'rgba(14, 165, 233, 0.15)',
				}}
			/>

			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div
						style={{
							width: '64px',
							height: '64px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '16px',
							background: '#2563eb',
							fontSize: '28px',
							fontWeight: 700,
							letterSpacing: '-0.06em',
						}}
					>
						LP
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '18px' }}>
						<span style={{ fontSize: '26px', fontWeight: 700 }}>Larry Parba</span>
						<span style={{ color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: '15px', marginTop: '4px' }}>ENGINEERING NOTES</span>
					</div>
				</div>
				{post ? <span style={{ color: '#cbd5e1', fontFamily: 'JetBrains Mono', fontSize: '16px' }}>{formatDate(post.publishedAt)} · {post.readingTime}</span> : null}
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
				<div style={{ color: '#ffffff', fontSize: title.length > 52 ? '54px' : '64px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.06 }}>{title}</div>
				<div style={{ color: '#cbd5e1', fontSize: '25px', lineHeight: 1.45, marginTop: '24px', maxWidth: '980px' }}>{excerpt}</div>
			</div>

			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex' }}>
					{post?.tags.map((tag) => (
						<span
							key={tag}
							style={{
								border: '1px solid rgba(125, 211, 252, 0.45)',
								borderRadius: '999px',
								color: '#bae6fd',
								fontFamily: 'JetBrains Mono',
								fontSize: '14px',
								marginRight: '10px',
								padding: '8px 14px',
							}}
						>
							{tag}
						</span>
					))}
				</div>
				<span style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '16px' }}>larryparba.com/blog</span>
			</div>
		</div>,
		{
			...size,
			fonts: [
				{ name: 'Space Grotesk', data: spaceGrotesk, style: 'normal', weight: 700 },
				{ name: 'JetBrains Mono', data: jetBrainsMono, style: 'normal', weight: 600 },
			],
		},
	)
}
