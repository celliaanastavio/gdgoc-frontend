import type { Track } from '../../types'

interface Props {
  track: Track
}

export default function TrackCard({ track }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div
        className="flex h-32 items-center justify-center text-5xl"
        style={{ backgroundColor: `${track.color}22` }}
      >
        {track.icon}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: track.color }}>
          {track.tagline}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{track.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{track.description}</p>
        <p className="mt-3 text-xs text-gray-500">{track.skills.join(' · ')}</p>
      </div>
    </article>
  )
}