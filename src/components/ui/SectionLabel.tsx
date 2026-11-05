import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-medium uppercase text-muted">
      <span className="size-[7px] shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
      {children}
    </p>
  )
}