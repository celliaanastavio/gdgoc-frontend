import SectionLabel from '../ui/SectionLabel'
import TextLink from '../ui/TextLink'

const attributes = ['Student-led', 'Peer-powered', 'Curiosity-first']

export default function IntroSection() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-24 lg:py-[88px] xl:px-24">
      <div className="flex flex-col items-start gap-5 lg:w-[490px] lg:shrink-0">
        <SectionLabel>A campus. A community.</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          Not just learning tech.
          <br />
          Finding your people.
        </h2>
        <TextLink to="/about">More about GDGoC UGM</TextLink>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
        <p className="text-lg leading-[1.55] text-muted md:text-[21px]">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around
          one simple idea: we can go <strong className="font-bold">further</strong> when we{' '}
          <strong className="font-bold">learn</strong> with each other.
        </p>
        <p className="text-lg leading-[1.55] text-muted">
          From your first line of code to your next product idea, there’s room to ask questions,
          share what you know, and try something new.
        </p>
        <div className="flex flex-wrap gap-3">
          {attributes.map((item) => (
            <span
              key={item}
              className="rounded-full bg-surface px-3.5 py-2 text-[13px] font-bold text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
