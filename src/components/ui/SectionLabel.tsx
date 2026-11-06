import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-medium uppercase leading-[15px] tracking-[1.4px] text-muted">
      <svg
        viewBox="0 0 7 7"
        aria-hidden="true"
        className="size-[7px] shrink-0 overflow-visible text-brand-blue"
      >
        <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
      </svg>
      {children}
    </p>
  )
}