import SectionLabel from '../../ui/SectionLabel'

export default function ContactHero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pb-14 pt-16 md:px-16 lg:pt-[72px] xl:px-24">
      <SectionLabel>Contact • Let’s connect</SectionLabel>
      <h1 className="text-5xl font-bold leading-[1.08] text-ink md:text-7xl">
        Good things start with <span className="text-link">hello.</span>
      </h1>
      <p className="max-w-[770px] text-xl leading-[1.55] text-muted md:text-[22px]">
        A question, a collaboration, or an idea for the community? Tell us what’s on your mind.
      </p>
    </section>
  )
}
