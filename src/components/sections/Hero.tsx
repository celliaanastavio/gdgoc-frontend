import heroArt from '../../assets/hero-art.png'
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

const dots = ['#EA4335', '#F9AB00', '#34A853', '#4284F4']

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-12 md:px-16 xl:flex-row xl:pb-16 xl:pl-24 xl:pr-16 xl:pt-[72px]">
      <div className="flex w-full flex-col items-start gap-7 xl:w-[620px] xl:shrink-0">
        <SectionLabel>GDGoC UGM • 2026/2027</SectionLabel>

        <h1 className="text-5xl font-bold leading-[1.05] text-ink md:text-7xl xl:text-[80px]">
          Big ideas.
          <br />
          <span className="text-link">Built together.</span>
        </h1>

        <p className="text-lg leading-[1.55] text-muted md:text-[21px]">
          A place for curious minds at{' '}
          <strong className="font-bold">Universitas Gadjah Mada</strong> to learn,
          connect, and build technology that matters.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button to="/overview">Find your learning track</Button>
          <Button to="/about" variant="secondary">
            Get to know us
          </Button>
        </div>

        <div className="flex items-center gap-2.5 text-sm text-muted">
          <span className="flex" aria-hidden="true">
            {dots.map((color, i) => (
              <span
                key={color}
                className={`size-4 rounded-full border-2 border-white ${i > 0 ? '-ml-[3px]' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </span>
          Different backgrounds. A shared curiosity.
        </div>
      </div>

      <img
        src={heroArt}
        alt="Ilustrasi kaca: kode, riset, dan ide yang bertemu"
        className="aspect-[620/530] w-full min-w-0 xl:max-w-[620px] xl:flex-1"
      />
    </section>
  )
}