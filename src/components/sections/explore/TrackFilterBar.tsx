import { parseSort, type SortOrder, type TrackFilters } from '../../../utils/trackFilters'
import { ChevronIcon } from '../../ui/Icons'

interface Props {
  filters: TrackFilters
  query: string
  allSkills: string[]
  shownCount: number
  totalCount: number
  hasActiveFilters: boolean
  onQueryChange: (value: string) => void
  onToggleSkill: (skill: string) => void
  onSortChange: (value: SortOrder) => void
  onReset: () => void
}

const inputClass =
  'h-[54px] w-full rounded-lg border border-line bg-white px-4 text-[15px] text-ink placeholder:text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'

export default function TrackFilterBar({
  filters,
  query,
  allSkills,
  shownCount,
  totalCount,
  hasActiveFilters,
  onQueryChange,
  onToggleSkill,
  onSortChange,
  onReset,
}: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-surface p-6 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <label htmlFor="track-search" className="sr-only">
            Search tracks
          </label>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
          >
            <path
              d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            id="track-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by name, skill, or topic…"
            className={`${inputClass} pl-12`}
          />
        </div>

        <div className="relative lg:w-[220px]">
          <label htmlFor="track-sort" className="sr-only">
            Sort tracks
          </label>
          <select
            id="track-sort"
            value={filters.sort}
            onChange={(e) => onSortChange(parseSort(e.target.value))}
            className={`${inputClass} appearance-none pr-12`}
          >
            <option value="default">Default order</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
          <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase text-muted">Filter by skill</p>
        <ul className="flex flex-wrap gap-2" aria-label="Filter by skill">
          {allSkills.map((skill) => {
            const active = filters.skills.includes(skill)
            return (
              <li key={skill}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => onToggleSkill(skill)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active
                      ? 'border-transparent bg-brand-blue text-white'
                      : 'border-line bg-white text-muted hover:border-brand-blue hover:text-link'
                  }`}
                >
                  {skill}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line pt-4 text-sm text-muted">
        <p role="status" aria-live="polite">
          Showing <strong className="font-bold text-ink">{shownCount}</strong> of {totalCount}{' '}
          tracks
        </p>
        {hasActiveFilters && (
          <button type="button" onClick={onReset} className="font-medium text-link hover:underline">
            Reset filters
          </button>
        )}
      </div>
    </div>
  )
}
