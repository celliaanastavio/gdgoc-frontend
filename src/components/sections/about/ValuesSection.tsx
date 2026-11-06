import type { ComponentType } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import type { Value } from '../../../types'
import { ValueBookIcon, ValueCodeIcon, ValueHeartIcon, ValuePeopleIcon } from '../../ui/AboutIcons'
import AsyncContent from '../../ui/AsyncContent'
import SectionLabel from '../../ui/SectionLabel'

const valueIcons: Record<string, ComponentType<{ className?: string }>> = {
  'stay-curious': ValueBookIcon,
  'make-room': ValuePeopleIcon,
  'learn-by-building': ValueCodeIcon,
  'give-something-back': ValueHeartIcon,
}

export default function ValuesSection() {
  const { data, loading, error, refetch } = useFetch<Value[]>('/values')

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:py-[88px] xl:px-24">
      <div className="flex max-w-[800px] flex-col gap-[18px]">
        <SectionLabel>What guides us</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          Good technology starts with good company.
        </h2>
      </div>

      <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
        {(values) => (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = valueIcons[v.id]
              return (
                <article
                  key={v.id}
                  className="flex flex-col items-start gap-[22px] rounded-3xl border border-line p-[26px]"
                >
                  <span className="h-1 w-9 rounded-sm" style={{ backgroundColor: v.color }} />
                  {Icon && <Icon className="text-link" />}
                  <h3 className="text-2xl font-bold leading-[1.12] tracking-[-0.4px] text-ink">
                    {v.title}
                  </h3>
                  <p className="text-base leading-[1.55] text-muted">{v.description}</p>
                </article>
              )
            })}
          </div>
        )}
      </AsyncContent>
    </section>
  )
}
