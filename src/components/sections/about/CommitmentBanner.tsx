import { CommitmentSpark } from '../../ui/AboutIcons'

export default function CommitmentBanner() {
  return (
    <section className="bg-tint-yellow">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 md:px-16 lg:flex-row lg:items-center lg:gap-16 xl:px-24">
        <CommitmentSpark className="shrink-0 text-brand-yellow" />
        <div className="flex flex-col gap-3.5">
          <h2 className="text-[32px] font-bold leading-[1.12] text-ink">
            A space to learn. A responsibility to care.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            We want every conversation and learning experience to be respectful, inclusive, and
            constructive. Be kind, give credit, and make room for people who are just getting started.
          </p>
        </div>
      </div>
    </section>
  )
}