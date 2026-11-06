import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

interface Props {
  to: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

const styles = {
  primary: 'bg-brand-blue text-white hover:bg-[#3374e0]',
  secondary: 'border border-line bg-white text-link hover:bg-tint-blue',
}

export default function Button({ to, variant = 'primary', children }: Props) {
  return (
    <Link
      to={to}
      className={`inline-flex h-[52px] items-center gap-4 whitespace-nowrap rounded-lg px-6 text-base font-medium transition-colors ${styles[variant]}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  )
}
