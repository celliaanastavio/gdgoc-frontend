import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import type { Track } from '../../../types'
import TrackCard from '../../cards/TrackCard'
import AsyncContent from '../../ui/AsyncContent'
import SectionLabel from '../../ui/SectionLabel'
import TextLink from '../../ui/TextLink'
import TrackSpotlight from './TrackSpotlight'

export default function TracksOverview() {
  const { data, loading, error, refetch } = useFetch<Track[]>('/tracks')
  const [params, setParams] = useSearchParams()
  const requestedId = params.get('track')

  function clearSelection() {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.delete('track')
        return next
      },
      { replace: true },
    )
  }

  return (
    <section
      id="tracks"
      className="mx-auto flex max-w-[1440px] scroll-mt-4 flex-col gap-9 px-6 py-20 md:px-16 xl:px-24"
    >
      <div className="flex max-w-[800px] flex-col gap-[18px]">
        <SectionLabel>Explore your interests</SectionLabel>
        <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="text-lg leading-[1.55] text-muted">
          These pathways are starting points, not boxes. Follow one deeply or bring different skills
          together.
        </p>
      </div>

      <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
        {(tracks) => {
          const selected = tracks.find((track) => track.id === requestedId)
          return (
            <>
              {selected && (
                <TrackSpotlight key={selected.id} trackId={selected.id} onClose={clearSelection} />
              )}
              <div className="grid gap-6 md:grid-cols-3">
                {tracks.map((track) => (
                  <TrackCard key={track.id} track={track} highlighted={track.id === selected?.id} />
                ))}
              </div>
            </>
          )
        }}
      </AsyncContent>

      <div>
        <TextLink to="/explore">Search and filter all tracks</TextLink>
      </div>
    </section>
  )
}
