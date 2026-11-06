import { useFetch } from '../../../hooks/useFetch'
import type { JourneyStep } from '../../../types'
import AsyncContent from '../../ui/AsyncContent'
import SectionLabel from '../../ui/SectionLabel'

export default function JourneySection() {
  const { data, loading, error, refetch } = useFetch<JourneyStep[]>('/journey')

  return (
    <section
      id="journey"
      className="mx-auto flex max-w-[1440px] scroll-mt-4 flex-col gap-10 px-6 py-20 md:px-16 xl:px-24"
    >
      <div className="flex flex-col gap-[18px]">
        <SectionLabel>Progress, not perfection</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          A journey you can keep building on.
        </h2>
      </div>
      <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
        {(steps) => (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[...steps]
              .sort((a, b) => a.step - b.step)
              .map((s) => (
                <div key={s.id} className="flex flex-col items-start gap-5">
                  <p className="text-[38px] font-bold text-link">
                    {String(s.step).padStart(2, '0')}
                  </p>
                  <hr className="w-full border-line" />
                  <h3 className="text-[26px] font-bold leading-[1.12] text-ink">{s.title}</h3>
                  <p className="text-base leading-[1.55] text-muted">{s.description}</p>
                </div>
              ))}
          </div>
        )}
      </AsyncContent>
    </section>
  )
}
