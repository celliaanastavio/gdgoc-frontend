import { useState } from 'react'
import { sectionLinks } from '../../../data/overviewContent'
import { ArrowDownGlyph } from '../../ui/AboutIcons'

export default function SectionNav() {
  const [active, setActive] = useState(sectionLinks[0].href)

  return (
    <nav aria-label="Bagian halaman" className="border-y border-line">
      <ul className="mx-auto flex max-w-[1440px] gap-12 overflow-x-auto px-6 py-6 text-[15px] md:px-16 xl:px-24">
        {sectionLinks.map((l) => {
          const isActive = l.href === active
          return (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`flex items-start gap-2.5 whitespace-nowrap leading-[19px] ${
                  isActive ? 'font-bold text-link' : 'text-muted hover:text-link'
                }`}
              >
                {l.label}
                <span className="flex h-[19px] w-4 items-center justify-center text-link">
                  <ArrowDownGlyph />
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}