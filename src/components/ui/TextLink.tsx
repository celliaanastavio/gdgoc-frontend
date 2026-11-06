import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

interface Props {
  to: string
  children: ReactNode
}

export default function TextLink({ to, children }: Props) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 text-base font-medium text-link hover:underline"
    >
      {children}
      <ArrowIcon />
    </Link>
  )
}
