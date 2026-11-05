import { outcomes } from '../../../data/overviewContent'

const cols = 'md:grid-cols-[250px_1fr_1fr] md:gap-7'

export default function OutcomesTable() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pb-20 md:px-16 xl:px-24">
      <h2 className="text-3xl font-bold leading-[1.12] text-ink md:text-4xl">
        From an interest to something you can show.
      </h2>
      <div className="overflow-hidden rounded-[20px] border border-line">
        <div className={`hidden bg-surface px-7 py-5 text-xs font-medium text-muted md:grid ${cols}`}>
          <p>Pathway</p><p>What you can practice</p><p>A possible outcome</p>
        </div>
        {outcomes.map((o) => (
          <div key={o.pathway} className={`grid gap-2 border-t border-line p-7 first:border-t-0 md:first:border-t ${cols}`}>
            <p className="text-lg font-medium text-ink">{o.pathway}</p>
            <p className="text-base leading-[1.55] text-muted">{o.practice}</p>
            <p className="text-base leading-[1.55] text-muted">{o.outcome}</p>
          </div>
        ))}
      </div>
      <p className="text-[13px] text-muted">
        Illustrative learning outcomes. Topics and opportunities are shared through community updates.
      </p>
    </section>
  )
}