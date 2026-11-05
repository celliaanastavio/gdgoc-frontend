import type { ComponentType } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import type { LearningFormat } from '../../../types'
import {
  LightbulbIcon,
  ValueBookIcon,
  ValueCodeIcon,
  ValuePeopleIcon,
} from '../../ui/AboutIcons'
import AsyncContent from '../../ui/AsyncContent'
import SectionLabel from '../../ui/SectionLabel'

const formatMeta: Record<
  string,
  {
    order: number
    bestFor: string
    tint: string
    Icon: ComponentType<{ className?: string }>
  }
> = {
  'study-groups': {
    order: 1,
    bestFor: 'Learning the fundamentals',
    tint: 'bg-tint-blue',
    Icon: ValueBookIcon,
  },
  'hands-on-workshops': {
    order: 2,
    bestFor: 'Trying something new',
    tint: 'bg-tint-green',
    Icon: ValueCodeIcon,
  },
  'project-circles': {
    order: 3,
    bestFor: 'Putting skills into practice',
    tint: 'bg-tint-yellow',
    Icon: ValuePeopleIcon,
  },
  'knowledge-sharing': {
    order: 4,
    bestFor: 'Exchanging perspectives',
    tint: 'bg-tint-red',
    Icon: LightbulbIcon,
  },
}

const byFigmaOrder = (a: LearningFormat, b: LearningFormat) =>
  (formatMeta[a.id]?.order ?? 99) - (formatMeta[b.id]?.order ?? 99)

export default function FormatsOverview() {
  const { data, loading, error, refetch } = useFetch<LearningFormat[]>('/formats')

  return (
    <section id="formats" className="scroll-mt-4 bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-9 px-6 py-20 md:px-16 xl:px-24">
        <div className="flex max-w-[800px] flex-col gap-[18px]">
          <SectionLabel>Ways to learn</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
            The format changes. The curiosity stays.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Explore the kinds of experiences that help you move from understanding to doing.
          </p>
        </div>

        <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
          {(formats) => (
            <div className="grid gap-6 md:grid-cols-2">
              {[...formats].sort(byFigmaOrder).map((f) => {
                const meta = formatMeta[f.id]
                const Icon = meta?.Icon
                return (
                  <article key={f.id} className="flex gap-6 rounded-3xl bg-white p-7">
                    <div
                      className={`flex size-[52px] shrink-0 items-center justify-center rounded-[14px] ${
                        meta?.tint ?? 'bg-tint-blue'
                      }`}
                    >
                      {Icon && <Icon className="text-link" />}
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <h3 className="text-[27px] font-bold leading-[1.12] text-ink">{f.name}</h3>
                      <p className="text-base leading-[1.55] text-muted">{f.description}</p>
                      {meta && (
                        <p className="text-[13px] font-medium text-link">
                          Best for • {meta.bestFor}
                        </p>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </AsyncContent>
      </div>
    </section>
  )
}