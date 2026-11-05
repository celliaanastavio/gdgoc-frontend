import { sectionLinks } from '../../../data/overviewContent'

export default function SectionNav() {
  return (
    <nav aria-label="Bagian halaman" className="border-y border-line">
      <ul className="mx-auto flex max-w-[1440px] gap-12 overflow-x-auto px-6 py-6 text-[15px] md:px-16 xl:px-24">
        {sectionLinks.map((l) => (
          <li key={l.href} className="shrink-0">
            <a href={l.href} className="flex gap-2.5 text-muted hover:text-link">
              {l.label} <span className="text-link">↓</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}