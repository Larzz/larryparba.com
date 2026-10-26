import type { ReactNode } from 'react'
import styles from './halloween-logo.module.css'

import { HALLOWEEN_ENABLED } from '@/lib/seasonal-theme'

export function HalloweenLogo({ children }: { children: ReactNode }) {
  if (!HALLOWEEN_ENABLED) return <>{children}</>

  return (
    <span className={styles.logo}>
      {children}
      <svg className={styles.pumpkin} viewBox='0 0 32 32' aria-hidden='true' focusable='false'>
        <path d='M16 10c-1-4 1-7 4-8' fill='none' stroke='#526c32' strokeWidth='3' strokeLinecap='round' />
        <path d='M16 9c-3-4-8-4-10-2 2 4 6 5 10 2' fill='#6c853f' />
        <ellipse cx='10' cy='19' rx='8' ry='10' fill='#e87819' />
        <ellipse cx='22' cy='19' rx='8' ry='10' fill='#e87819' />
        <ellipse cx='16' cy='19' rx='9' ry='11' fill='#fa982c' />
        <path d='m8 18 4-5 2 5zm10 0 2-5 4 5zM9 22h5v2h4v-2h5c-3 7-11 7-14 0' fill='#512d20' />
      </svg>
    </span>
  )
}
