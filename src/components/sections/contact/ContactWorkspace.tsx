import { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import type { InquiryCategory } from '../../../types'
import AsyncContent from '../../ui/AsyncContent'
import CommunityUpdates from './CommunityUpdates'
import ContactForm from './ContactForm'
import InquiryCategoryList from './InquiryCategoryList'

export default function ContactWorkspace() {
  const { data, loading, error, refetch } = useFetch<InquiryCategory[]>('/inquiry-categories')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const categories = data ?? []
  const activeId = selectedId ?? categories[0]?.id ?? ''

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 pb-20 md:px-16 lg:flex-row lg:items-start lg:gap-16 xl:px-24">
      <div className="flex flex-col gap-8 lg:w-[456px] lg:shrink-0">
        <div className="flex flex-col gap-[18px]">
          <h2 className="text-[28px] font-bold leading-[1.12] text-ink">What brings you here?</h2>
          <p className="text-base leading-[1.55] text-muted">
            Pick the closest topic in the form. We’ll take it from there.
          </p>
          <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
            {(items) => (
              <InquiryCategoryList
                categories={items}
                activeId={activeId}
                onSelect={setSelectedId}
              />
            )}
          </AsyncContent>
        </div>
        <CommunityUpdates />
      </div>

      <ContactForm categories={categories} categoryId={activeId} onCategoryChange={setSelectedId} />
    </section>
  )
}
