import { firstMoves } from '../../data/homeContent'
import SectionLabel from '../ui/SectionLabel'

export default function GettingStartedSection() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-16 pt-2 md:px-16 lg:pb-[88px] xl:px-24">
      <div className="flex max-w-[800px] flex-col gap-[18px]">
        <SectionLabel>Make your first move</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          You don’t need to have it all figured out.
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {firstMoves.map((move) => (
          <div key={move.number} className="flex flex-col items-start gap-5">
            <p className="text-[44px] font-bold text-link">{move.number}</p>
            <hr className="w-full border-line" />
            <h3 className="text-[25px] font-bold leading-[1.12] text-ink">{move.title}</h3>
            <p className="text-base leading-[1.55] text-muted">{move.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
