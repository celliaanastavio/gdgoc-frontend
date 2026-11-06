import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { parseSort, type SortOrder, type TrackFilters } from '../utils/trackFilters'

export function useTrackFilters() {
  const [params, setParams] = useSearchParams()
  const [queryInput, setQueryInput] = useState(() => params.get('q') ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const filters = useMemo<TrackFilters>(
    () => ({
      query: params.get('q') ?? '',
      skills: params.getAll('skill'),
      sort: parseSort(params.get('sort')),
    }),
    [params],
  )

  function update(mutate: (next: URLSearchParams) => void) {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        mutate(next)
        return next
      },
      { replace: true },
    )
  }

  function setQuery(value: string) {
    setQueryInput(value)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      update((p) => (value.trim() ? p.set('q', value) : p.delete('q')))
    }, 250)
  }

  function toggleSkill(skill: string) {
    update((p) => {
      const current = p.getAll('skill')
      p.delete('skill')
      const next = current.includes(skill)
        ? current.filter((s) => s !== skill)
        : [...current, skill]
      next.forEach((s) => p.append('skill', s))
    })
  }

  function setSort(value: SortOrder) {
    update((p) => (value === 'default' ? p.delete('sort') : p.set('sort', value)))
  }

  function reset() {
    clearTimeout(timer.current)
    setQueryInput('')
    setParams(new URLSearchParams(), { replace: true })
  }

  const hasActiveFilters = filters.query.trim() !== '' || filters.skills.length > 0

  return {
    filters,
    queryInput,
    hasActiveFilters,
    setQuery,
    toggleSkill,
    setSort,
    reset,
  }
}