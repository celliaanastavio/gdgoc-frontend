import SectionLabel from '../../ui/SectionLabel'
import TextLink from '../../ui/TextLink'

export default function StartingPoint() {
  return (
    <section id="start" className="scroll-mt-4 bg-tint-yellow">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 md:px-16 lg:flex-row lg:items-center lg:gap-16 xl:px-24">
        <div className="flex flex-col gap-4 lg:w-[460px] lg:shrink-0">
          <SectionLabel>Start where you are</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink">
            New to tech?
            <br />
            That’s a starting point, too.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-lg leading-[1.55] text-muted">
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re
            curious about. If you’re unsure, tell us what interests you and we can start a
            conversation.
          </p>
          <TextLink to="/contact">Ask about getting started</TextLink>
        </div>
      </div>
    </section>
  )
}
