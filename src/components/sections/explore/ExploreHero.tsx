import SectionLabel from '../../ui/SectionLabel'

export default function ExploreHero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pb-10 pt-16 md:px-16 lg:pt-[72px] xl:px-24">
      <SectionLabel>Explore • Find your track</SectionLabel>
      <h1 className="text-5xl font-bold leading-[1.08] text-ink md:text-7xl">
        Find the track that <span className="text-link">fits you.</span>
      </h1>
      <p className="max-w-[770px] text-xl leading-[1.55] text-muted md:text-[22px]">
        Search, filter by skill, and compare every learning track in one place.
      </p>
    </section>
  )
}