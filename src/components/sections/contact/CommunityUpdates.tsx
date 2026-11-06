import { useFetch } from '../../../hooks/useFetch'
import type { Stats } from '../../../types'
import ArrowIcon from '../../ui/ArrowIcon'
import SectionLabel from '../../ui/SectionLabel'

export default function CommunityUpdates() {
  const { data } = useFetch<Stats>('/stats')
  const handle = data?.social.instagram ?? '@gdgoc.ugm'
  const url = `https://www.instagram.com/${handle.replace('@', '')}`

  return (
    <aside className="flex flex-col items-start gap-4 rounded-3xl bg-tint-yellow p-[26px]">
      <SectionLabel>Stay curious, stay connected</SectionLabel>
      <h3 className="text-[26px] font-bold leading-[1.12] text-ink">
        Looking for community updates?
      </h3>
      <p className="text-base leading-[1.55] text-muted">
        Follow <strong className="font-bold">{handle}</strong> for learning opportunities and what’s
        happening in the community.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 text-base font-medium text-link hover:underline"
      >
        Find {handle}
        <ArrowIcon />
      </a>
    </aside>
  )
}
