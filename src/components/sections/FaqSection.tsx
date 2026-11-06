import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import type { Faq } from '../../types'
import EmptyState from '../ui/EmptyState'
import ErrorMessage from '../ui/ErrorMessage'
import { ChevronIcon } from '../ui/Icons'
import SectionLabel from '../ui/SectionLabel'
import Spinner from '../ui/Spinner'
import TextLink from '../ui/TextLink'

export default function FaqSection() {
  const { data, loading, error, refetch } = useFetch<Faq[]>('/faqs')
  const [closedIds, setClosedIds] = useState<string[]>([])

  function toggle(id: string) {
    setClosedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const faqs = data?.slice(0, 3) ?? []

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-24 lg:py-[88px] xl:px-24">
      <div className="flex flex-col items-start gap-5 lg:w-[400px] lg:shrink-0">
        <SectionLabel>A few good questions</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          Wondering where
          <br />
          to begin?
        </h2>
        <TextLink to="/contact">Ask us a question</TextLink>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-6">
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} onRetry={refetch} />}
        {!loading && !error && faqs.length === 0 && <EmptyState message="No questions yet." />}
        {!loading &&
          !error &&
          faqs.map((faq) => {
            const isOpen = !closedIds.includes(faq.id)
            return (
              <div key={faq.id} className="flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 text-left"
                >
                  <span className="flex-1 text-xl font-medium text-ink">{faq.question}</span>
                  <ChevronIcon
                    className={`shrink-0 text-link transition-transform ${isOpen ? '' : '-rotate-90'}`}
                  />
                </button>
                {isOpen && <p className="text-base leading-[1.55] text-muted">{faq.answer}</p>}
                <hr className="border-line" />
              </div>
            )
          })}
      </div>
    </section>
  )
}
