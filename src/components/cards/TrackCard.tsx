import designArt from '../../assets/track-design.svg'
import developmentArt from '../../assets/track-development.svg'
import researchArt from '../../assets/track-research.svg'
import type { Track } from '../../types'
import TextLink from '../ui/TextLink'

interface Props {
  track: Track
  highlighted?: boolean
}

const visuals: Record<string, { tint: string; art: string; w: number; h: number; cx: number }> = {
  'research-discovery': { tint: 'bg-tint-blue', art: researchArt, w: 342, h: 443, cx: 198.6 },
  'design-creativity': { tint: 'bg-tint-yellow', art: designArt, w: 337, h: 389, cx: 196 },
  development: { tint: 'bg-tint-green', art: developmentArt, w: 347, h: 452, cx: 198.6 },
}

export default function TrackCard({ track, highlighted = false }: Props) {
  const visual = visuals[track.id]

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white ${
        highlighted ? 'border-brand-blue ring-2 ring-brand-blue' : 'border-line'
      }`}
    >
      <div className={`relative h-[232px] shrink-0 ${visual?.tint ?? 'bg-surface'}`}>
        {visual ? (
          <img
            src={visual.art}
            alt=""
            className="pointer-events-none absolute max-w-none"
            style={{
              width: visual.w,
              height: visual.h,
              left: `calc(50% - ${visual.cx}px)`,
              top: 0,
            }}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-6xl">
            {track.icon}
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col items-start gap-[18px] p-7">
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
