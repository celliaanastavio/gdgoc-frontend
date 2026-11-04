import { learningFormats } from '../../data/homeContent'
import SectionLabel from '../ui/SectionLabel'

export default function FormatsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:py-20 xl:px-24">
        <div className="flex max-w-[800px] flex-col gap-[18px]">
          <SectionLabel>More than a classroom</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
            Less watching. More making.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Learn in a way that turns a new concept into something you can actually use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {learningFormats.map(({ title, description, detail, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-start gap-5 rounded-3xl bg-white p-8"
            >
              <Icon className="text-link" />
              <h3 className="text-[28px] font-bold leading-[1.12] text-ink">{title}</h3>
              <p className="text-base leading-[1.55] text-muted">{description}</p>
              <hr className="w-full border-line" />
              <p className="text-[13px] font-medium text-link">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}