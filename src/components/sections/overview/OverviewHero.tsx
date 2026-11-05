import researchArt from '../../../assets/track-research.svg'
import SectionLabel from '../../ui/SectionLabel'

export default function OverviewHero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-14 pt-16 md:px-16 lg:flex-row lg:items-center lg:gap-16 xl:px-24">
      <div className="flex max-w-[920px] flex-1 flex-col gap-6">
        <SectionLabel>Overview • Programs &amp; learning tracks</SectionLabel>
        <h1 className="text-5xl font-bold leading-[1.08] text-ink md:text-7xl">
          Find your spark.
          <br />
          <span className="text-link">Build your own path.</span>
        </h1>
        <p className="text-lg leading-[1.55] text-muted md:text-[21px]">
          Explore how research, creativity, and development connect. Start with one interest.
          Grow through practice and the people around you.
        </p>
      </div>
      <img src={researchArt} alt="" className="size-[220px] shrink-0 lg:size-[280px]" />
    </section>
  )
}