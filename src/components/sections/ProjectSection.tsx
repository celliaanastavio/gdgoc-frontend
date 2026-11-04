import SectionLabel from '../ui/SectionLabel'
import TextLink from '../ui/TextLink'

export default function ProjectSection() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-16 lg:py-[88px] xl:px-24">
      <div className="w-full shrink-0 rounded-[32px] bg-tint-yellow p-6 sm:p-10 lg:w-[592px]">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted">IDEA → PROTOTYPE</p>
          <p className="text-2xl text-link">{'</>'}</p>
        </div>

        <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-line bg-white p-[26px]">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-brand-red" />
            <span className="size-2 rounded-full bg-brand-yellow" />
            <span className="size-2 rounded-full bg-brand-green" />
          </div>
          <p className="text-2xl font-bold leading-[1.12] text-ink sm:text-[32px]">
            A little less friction.
            <br />
            A better campus day.
          </p>
          <div className="flex gap-3">
            <span className="flex-1 rounded-xl bg-tint-blue p-4 text-[13px] font-bold text-black">
              Discover
            </span>
            <span className="flex-1 rounded-xl bg-tint-green p-4 text-[13px] font-bold text-black">
              Connect
            </span>
            <span className="flex-1 rounded-xl bg-[#fdedea] p-4 text-[13px] font-bold text-black">
              Share
            </span>
          </div>
          <p className="text-[13px] leading-[1.55] text-muted">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>

        <p className="mt-6 text-[11px] text-muted">
          EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
        <SectionLabel>Build something that matters</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          Your next project could start on campus.
        </h2>
        <p className="text-lg leading-[1.55] text-muted">
          What if finding a study partner, sharing resources, or navigating campus felt easier?
          Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="text-base leading-[1.55] text-muted">
          Bring research, design, and development together. Try an idea, get feedback, and make
          the next version better.
        </p>
        <TextLink to="/overview">Explore project-based learning</TextLink>
      </div>
    </section>
  )
}