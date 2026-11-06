import { useFetch } from '../../../hooks/useFetch'
import { useTrackFilters } from '../../../hooks/useTrackFilters'
import type { Track } from '../../../types'
import { applyTrackFilters, collectSkills } from '../../../utils/trackFilters'
import TrackCard from '../../cards/TrackCard'
import AsyncContent from '../../ui/AsyncContent'
import EmptyState from '../../ui/EmptyState'
import TrackFilterBar from './TrackFilterBar'

export default function ExploreTracks() {
  const { data, loading, error, refetch } = useFetch<Track[]>('/tracks')
  const tf = useTrackFilters()

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pb-20 md:px-16 xl:px-24">
      <AsyncContent data={data} loading={loading} error={error} onRetry={refetch}>
        {(tracks) => {
          const shown = applyTrackFilters(tracks, tf.filters)
          return (
            <>
              <TrackFilterBar
                filters={tf.filters}
                query={tf.queryInput}
                allSkills={collectSkills(tracks)}
                shownCount={shown.length}
                totalCount={tracks.length}
                hasActiveFilters={tf.hasActiveFilters}
                onQueryChange={tf.setQuery}
                onToggleSkill={tf.toggleSkill}
                onSortChange={tf.setSort}
                onReset={tf.reset}
              />

              {shown.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {shown.map((track) => (
                    <TrackCard key={track.id} track={track} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 rounded-3xl border border-line px-6 py-8 text-center">
                  <EmptyState message="No tracks match these filters." />
                  <button
                    type="button"
                    onClick={tf.reset}
                    className="text-base font-medium text-link hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </>
          )
        }}
      </AsyncContent>
    </section>
  )
}
