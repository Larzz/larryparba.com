import Link from 'next/link'
import Image from 'next/image'

interface AuthorLink {
	label: string
	href: string
}

interface AuthorCardProps {
	name: string
	role: string
	bio: string
	avatarSrc: string
	links: AuthorLink[]
}

export function AuthorCard ({
	name,
	role,
	bio,
	avatarSrc,
	links,
}: AuthorCardProps) {
	return (
		<section className='rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm'>
			<div className='flex items-center gap-4'>
				<Image
					src={avatarSrc}
					alt={name}
					width={72}
					height={72}
					className='rounded-full border border-zinc-200 object-cover'
				/>
				<div>
					<h2 className='text-base font-semibold text-zinc-900'>{name}</h2>
					<p className='text-sm text-zinc-500'>{role}</p>
				</div>
			</div>

			<p className='mt-4 text-sm leading-6 text-zinc-600'>{bio}</p>

			<div className='mt-4 flex flex-wrap gap-3 border-t border-zinc-100 pt-4'>
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className='text-sm text-zinc-600 transition-colors hover:text-zinc-900'
					>
						{link.label}
					</Link>
				))}
			</div>
		</section>
	)
}
