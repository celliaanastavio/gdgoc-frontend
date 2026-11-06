import type { Track } from '../types'

export type SortOrder = 'default' | 'az' | 'za'

export interface TrackFilters {
  query: string
  skills: string[]
  sort: SortOrder
}

const SORT_ORDERS: readonly SortOrder[] = ['default', 'az', 'za']

export function parseSort(value: string | null): SortOrder {
  return SORT_ORDERS.find((order) => order === value) ?? 'default'
}

/** Semua skill unik dari seluruh track, urut abjad. */
export function collectSkills(tracks: Track[]): string[] {
  return [...new Set(tracks.flatMap((track) => track.skills))].sort((a, b) => a.localeCompare(b))
}

export function applyTrackFilters(tracks: Track[], filters: TrackFilters): Track[] {
  const query = filters.query.trim().toLowerCase()

  const result = tracks.filter((track) => {
    // Filter skill: track cocok kalau punya minimal satu skill yang dipilih
    if (filters.skills.length > 0 && !track.skills.some((s) => filters.skills.includes(s))) {
      return false
    }

    if (!query) return true
    const haystack = [
      track.name,
      track.tagline,
      track.description,
      track.what_you_do,
      ...track.skills,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(query)
  })

  if (filters.sort === 'default') return result
  result.sort((a, b) => a.name.localeCompare(b.name))
  return filters.sort === 'az' ? result : result.reverse()
}
