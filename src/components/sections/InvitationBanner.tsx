import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'
import TextLink from '../ui/TextLink'

export default function InvitationBanner() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-16 lg:py-16 xl:px-24">
      <div className="flex flex-col gap-8 rounded-[32px] bg-tint-blue p-6 sm:p-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <SectionLabel>Your next chapter</SectionLabel>
          <h2 className="text-3xl font-bold leading-[1.12] text-ink md:text-[44px]">
            Bring your curiosity.
            <br />
            We’ll build from there.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:w-[260px] lg:shrink-0">
          <Button to="/overview">Explore the overview</Button>
          <TextLink to="/contact">Talk to the community</TextLink>
        </div>
      </div>
    </section>
  )
}
