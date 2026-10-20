'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

const aiHosts: Record<string, string> = {
	'chatgpt.com': 'ChatGPT',
	'chat.openai.com': 'ChatGPT',
	'perplexity.ai': 'Perplexity',
	'gemini.google.com': 'Gemini',
	'copilot.microsoft.com': 'Microsoft Copilot',
	'claude.ai': 'Claude',
}

function platformFromHost (host: string) {
	const normalizedHost = host.toLowerCase().replace(/^www\./, '')
	return Object.entries(aiHosts).find(([knownHost]) => normalizedHost === knownHost || normalizedHost.endsWith(`.${knownHost}`))?.[1]
}

function getAiPlatform () {
	const source = new URLSearchParams(window.location.search).get('utm_source')
	const sourcePlatform = source ? platformFromHost(source) : undefined
	if (sourcePlatform) return sourcePlatform

	try {
		return document.referrer ? platformFromHost(new URL(document.referrer).hostname) : undefined
	} catch {
		return undefined
	}
}

export function AiReferralTracker () {
	const pathname = usePathname()

	useEffect(() => {
		const platform = getAiPlatform()
		if (!platform) return

		const eventKey = `ai-referral:${platform}:${pathname}`
		if (sessionStorage.getItem(eventKey)) return

		sendGAEvent('event', 'ai_referral_visit', {
			ai_platform: platform,
			page_path: pathname,
			transport_type: 'beacon',
		})
		sessionStorage.setItem(eventKey, '1')
	}, [pathname])

	return null
}
