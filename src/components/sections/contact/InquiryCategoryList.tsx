import type { ComponentType } from 'react'
import type { InquiryCategory } from '../../../types'
import {
  ArrowUpRightGlyph,
  DiamondGlyph,
  PlusGlyph,
  QuestionGlyph,
} from '../../ui/InquiryGlyphs'

const glyphs: Record<string, ComponentType<{ className?: string }>> = {
  'joining-learning': ArrowUpRightGlyph,
  collaboration: PlusGlyph,
  'speaking-sharing': DiamondGlyph,
  'general-inquiry': QuestionGlyph,
}

interface Props {
  categories: InquiryCategory[]
  activeId: string
  onSelect: (id: string) => void
}

export default function InquiryCategoryList({ categories, activeId, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-[18px]">
      {categories.map((c) => {
        const active = c.id === activeId
        const Glyph = glyphs[c.id]
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(c.id)}
            className={`flex w-full items-start gap-[18px] rounded-2xl border p-5 text-left transition-colors ${
              active ? 'border-transparent bg-tint-blue' : 'border-line hover:bg-surface'
            }`}
          >
            <span className="flex h-[30px] w-[27px] shrink-0 items-center justify-center text-link [&>svg]:overflow-visible">
              {Glyph ? <Glyph /> : <span className="text-[25px] font-medium">{c.icon}</span>}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1.5">
              <span className="text-[17px] font-medium text-ink">{c.label}</span>
              <span className="text-sm leading-[1.55] text-muted">{c.description}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}