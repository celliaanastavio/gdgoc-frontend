import { useFetch } from '../../../hooks/useFetch'
import type { Role } from '../../../types'
import AsyncContent from '../../ui/AsyncContent'
import SectionLabel from '../../ui/SectionLabel'
import TextLink from '../../ui/TextLink'

export default function RolesSection() {
  const { data, loading, error, refetch } = useFetch<Role[]>('/roles')

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-16 md:px-16 lg:flex-row lg:gap-24 lg:pb-[88px] xl:px-24">
      <div className="flex flex-col gap-[22px] lg:w-[400px] lg:shrink-0">
        <SectionLabel>People, not labels</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          There’s more than one way to contribute.
        </h2>
        <p className="text-lg leading-[1.55] text-muted">
          You can be learning one day and helping someone else the next. A community grows through
          both.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-7">
        <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
          {(roles) => (
            <>
              {roles.map((r) => (
                <div key={r.id} className="flex flex-col gap-3.5 border-b border-line pb-7">
                  <h3 className="text-[28px] font-bold leading-[1.12] text-ink">{r.title}</h3>
                  <p className="text-[17px] leading-[1.55] text-muted">{r.description}</p>
                </div>
              ))}
            </>
          )}
        </AsyncContent>
        <div>
          <TextLink to="/contact">Let’s talk about getting involved</TextLink>
        </div>
      </div>
    </section>
  )
}
