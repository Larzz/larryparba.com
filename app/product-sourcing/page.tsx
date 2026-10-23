import type { Metadata } from 'next'
import SourcingWorkspace from './workspace'

export const metadata: Metadata = {
  title: 'Sourceful — Find it from a photo',
  description: 'A product sourcing workspace. Start with a photo, explore similar products, and keep your favorites in one place.',
  alternates: { canonical: '/product-sourcing' },
}

export default function ProductSourcingPage() {
  return <SourcingWorkspace />
}
