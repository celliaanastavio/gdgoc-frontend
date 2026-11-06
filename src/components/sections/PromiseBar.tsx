const promises = [
  { label: 'Learn by doing', color: 'bg-brand-blue' },
  { label: 'Connect across disciplines', color: 'bg-brand-red' },
  { label: 'Build with purpose', color: 'bg-brand-green' },
]

export default function PromiseBar() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-x-8 gap-y-3 px-6 py-[26px] md:px-16 xl:px-24">
        {promises.map((item) => (
          <p key={item.label} className="flex items-center gap-3.5 text-lg font-medium text-ink">
            <span className={`size-2 shrink-0 ${item.color}`} aria-hidden="true" />
            {item.label}
          </p>
        ))}
      </div>
    </section>
  )
}
