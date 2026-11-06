import heroArt from '../../../assets/about-hero-art.png'
import SectionLabel from '../../ui/SectionLabel'

export default function AboutHero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 md:px-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20 xl:px-24">
      <div className="flex flex-1 flex-col gap-[26px]">
        <SectionLabel>About GDGoC UGM</SectionLabel>
        <h1 className="text-5xl font-bold leading-[1.08] text-ink md:text-7xl">
          Built by students.
          <br />
          <span className="text-link">For what’s next.</span>
        </h1>
        <p className="text-xl leading-[1.55] text-muted md:text-[22px]">
          We’re a community of learners and makers at Universitas Gadjah Mada, connected by
          curiosity and the belief that technology can do good.
        </p>
        <p className="text-[13px] uppercase text-muted">Universitas Gadjah Mada • 2026/2027</p>
      </div>

      <img
        src={heroArt}
        alt=""
        className="w-full max-w-[464px] self-center lg:w-[464px] lg:shrink-0"
      />
    </section>
  )
}
