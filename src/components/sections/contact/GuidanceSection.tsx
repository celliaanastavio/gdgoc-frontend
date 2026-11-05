import { staticTip, tipTitles } from '../../../data/contactContent'
import { useFetch } from '../../../hooks/useFetch'
import type { InquiryCategory } from '../../../types'
import SectionLabel from '../../ui/SectionLabel'
import TextLink from '../../ui/TextLink'

export default function GuidanceSection() {
  const { data } = useFetch<InquiryCategory[]>('/inquiry-categories')

  const apiTips = (data ?? [])
    .filter((c) => tipTitles[c.id])
    .map((c) => ({ title: tipTitles[c.id], description: c.guidance }))

  const tips = [...apiTips, staticTip]

  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-20 lg:py-[72px] xl:px-24">
        <div className="flex flex-col items-start gap-5 lg:w-[420px] lg:shrink-0">
          <SectionLabel>A little guidance</SectionLabel>
          <h2 className="text-4xl font-bold leading-[1.12] text-ink md:text-[40px]">
            Help us understand
            <br />
            your idea.
          </h2>
          <TextLink to="/overview">Explore the programs first</TextLink>
        </div>

        <div className="flex flex-1 flex-col gap-[26px]">
          {tips.map((tip) => (
            <div key={tip.title} className="flex flex-col gap-2.5 border-b border-line pb-[26px]">
              <h3 className="text-xl font-bold leading-[1.12] text-ink md:text-[21px]">
                {tip.title}
              </h3>
              <p className="text-base leading-[1.55] text-muted">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}