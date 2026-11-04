import { useFetch } from '../../hooks/useFetch'
import type { Track } from '../../types'
import TrackCard from '../cards/TrackCard'
import EmptyState from '../ui/EmptyState'
import ErrorMessage from '../ui/ErrorMessage'
import SectionLabel from '../ui/SectionLabel'
import Spinner from '../ui/Spinner'
import TextLink from '../ui/TextLink'

export default function TracksSection() {
  const { data, loading, error, refetch } = useFetch<Track[]>('/tracks')

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-4 md:px-16 lg:px-24 lg:pb-[88px]">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-[800px] flex-col gap-[18px]">
          <SectionLabel>Find your starting point</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-5xl">
            Many interests. One shared journey.
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Follow what excites you. Explore a track, then connect the dots with others.
          </p>
        </div>
        <TextLink to="/overview">See the overview</TextLink>
      </div>

      <div className="mt-9">
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} onRetry={refetch} />}
        {!loading && !error && (!data || data.length === 0) && <EmptyState />}
        {!loading && !error && data && data.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {data.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}