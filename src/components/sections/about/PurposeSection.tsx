import SectionLabel from '../../ui/SectionLabel'

export default function PurposeSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-24 lg:py-20 xl:px-24">
        <div className="flex flex-col gap-5 lg:w-[400px] lg:shrink-0">
          <SectionLabel>Why we come together</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
            A bridge from
            <br />
            <span className="text-link">“I wonder”</span> to
            <br />
            <span
              className="inline-block text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #1967D2 58.65%, #6FACFF 100%)',
                backgroundSize: '100% 3.36em',
                backgroundPosition: '0 -2.24em',
                backgroundRepeat: 'no-repeat',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              “I made this.”
            </span>
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-6 leading-[1.55]">
          <p className="text-2xl text-ink">
            Learning feels different when there’s someone to exchange ideas with, a problem you
            care about, and the space to give it a try.
          </p>
          <p className="text-lg text-muted">
            That’s the spirit of Google Developer Groups on Campus at UGM. We create room for
            students to explore technology, develop practical skills, and learn from one another.
          </p>
          <p className="text-lg text-muted">
            Our campus is the starting point. The questions we ask and the things we build can
            reach beyond it.
          </p>
        </div>
      </div>
    </section>
  )
}