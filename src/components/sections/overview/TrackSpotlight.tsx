import { useEffect, useRef } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import type { Track } from '../../../types'
import ErrorMessage from '../../ui/ErrorMessage'
import Spinner from '../../ui/Spinner'

interface Props {
  trackId: string
  onClose: () => void
}

export default function TrackSpotlight({ trackId, onClose }: Props) {
  const { data, loading, error, refetch } = useFetch<Track>(`/tracks/${trackId}`)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Track spotlight"
      className="flex flex-col items-start gap-5 rounded-3xl border border-line bg-white p-7 sm:p-9"
    >
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {data && (
        <>
          <span
            className="h-1 w-9 rounded-sm"
            style={{ backgroundColor: data.color }}
            aria-hidden="true"
          />
          <p className="text-[11px] font-medium uppercase tracking-[1.4px] text-link">
            Selected track • {data.tagline}
          </p>
          <h3 className="text-[32px] font-bold leading-[1.12] tracking-[-0.4px] text-ink">
            {data.name}
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[1.4px] text-muted">
              What you’ll do
            </p>
            <p className="max-w-[720px] text-lg leading-[1.55] text-muted">{data.what_you_do}</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Skills you will grow">
            {data.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}

      <button
        type="button"
        onClick={onClose}
        className="text-base font-medium text-link hover:underline"
      >
        Clear selection
      </button>
    </section>
  )
}