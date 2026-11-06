import { BelongingSpark } from '../ui/AboutIcons'

export default function BelongingBanner() {
  return (
    <section className="bg-tint-green">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 py-12 md:px-16 lg:flex-row lg:items-center lg:gap-16 lg:py-16 xl:px-24">
        <BelongingSpark className="size-[100px] shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <h2 className="text-3xl font-bold leading-[1.12] text-ink md:text-[40px]">
            Different majors. Different starting points.
            <br />A place for all of them.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            You don’t have to be the most experienced person in the room. Curiosity, kindness, and a
            willingness to learn are a good place to start.
          </p>
        </div>
      </div>
    </section>
  )
}
