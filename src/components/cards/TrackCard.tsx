import designArt from '../../assets/track-design.svg'
import developmentArt from '../../assets/track-development.svg'
import researchArt from '../../assets/track-research.svg'
import type { Track } from '../../types'
import TextLink from '../ui/TextLink'

interface Props {
  track: Track
}

const visuals: Record<string, { tint: string; art: string }> = {
  'research-discovery': { tint: 'bg-tint-blue', art: researchArt },
  'design-creativity': { tint: 'bg-tint-yellow', art: designArt },
  development: { tint: 'bg-tint-green', art: developmentArt },
}

export default function TrackCard({ track }: Props) {
  const visual = visuals[track.id]

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white">
      <div
        className={`flex h-[232px] items-start justify-center overflow-hidden ${
          visual?.tint ?? 'bg-surface'
        }`}
      >
        {visual ? (
          <img src={visual.art} alt="" className="-mt-1 size-[252px] max-w-none" />
        ) : (
          <span className="mt-16 text-6xl">{track.icon}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-start gap-[18px] p-7">
        <p className="text-[11px] font-medium uppercase text-link">{track.tagline}</p>
        <h3 className="text-[28px] font-bold leading-[1.12] text-ink">{track.name}</h3>
        <p className="text-base leading-[1.55] text-muted">{track.description}</p>
        <hr className="w-full border-line" />
        <p className="text-[13px] leading-normal text-muted">{track.skills.join(' · ')}</p>
        <div className="mt-auto pt-2">
          <TextLink to={track.explore_link}>Explore this track</TextLink>
        </div>
      </div>
    </article>
  )
}