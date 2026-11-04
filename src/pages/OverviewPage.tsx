import TrackCard from '../components/cards/TrackCard'
import EmptyState from '../components/ui/EmptyState'
import ErrorMessage from '../components/ui/ErrorMessage'
import Spinner from '../components/ui/Spinner'
import { useFetch } from '../hooks/useFetch'
import type { Track } from '../types'

export default function OverviewPage() {
  const { data, loading, error, refetch } = useFetch<Track[]>('/tracks')

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Find your spark. <span className="text-blue-600">Build your own path.</span>
      </h1>

      <div className="mt-10">
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