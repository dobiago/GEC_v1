import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { SectionSubnav } from "@/components/section-subnav"
import {
  gasStrategySections,
  offshoreOperations,
  onshoreOperations,
  operationsOverview,
  operationsPortfolioStats,
  operationsSubnav,
} from "@/lib/site-data"

function StatStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {operationsPortfolioStats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_24px_70px_rgba(37,62,92,0.08)]"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
          <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</p>
        </article>
      ))}
    </div>
  )
}

function AssetSection({
  id,
  title,
  assets,
}: {
  id: string
  title: string
  assets: typeof onshoreOperations
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Asset class</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          The new operations layout shifts away from dense narrative blocks and toward fact-sheet
          presentation with maps, quick stats, and clear asset status signals.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {assets.map((asset) => (
          <article
            key={asset.slug}
            className="grid gap-6 rounded-[30px] border border-slate-200 bg-slate-50/80 p-6 lg:grid-cols-[0.34fr_0.66fr]"
          >
            <div className="space-y-4">
              <div
                className="aspect-[4/3] rounded-[24px] border border-slate-200 bg-slate-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${asset.imageSrc})` }}
              />
              <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Map / location</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{asset.mapLabel}</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                    {asset.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{asset.intro}</p>
                </div>
                <Link
                  href={asset.href}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold tracking-[0.08em] text-slate-800 transition hover:border-slate-400"
                >
                  Asset detail
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {asset.facts.map((fact) => (
                  <div key={`${asset.slug}-${fact.label}`} className="rounded-[22px] border border-slate-200 bg-white p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                    <p className="mt-3 text-base font-semibold leading-7 text-slate-900">{fact.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-base leading-8 text-slate-600">
                {asset.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function OperationsPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Operations"
            title="A portfolio view built for faster understanding."
            description="Operations is now a single scrollable overview page with structured fact-sheet content, quick portfolio metrics, and clear paths into individual asset pages."
          />
        </div>
        <div className="mt-8 max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          {operationsOverview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <SectionSubnav items={operationsSubnav} />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        <section
          id="portfolio-summary"
          className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(10,37,64,0.96),rgba(14,116,144,0.88))] p-8 text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Portfolio Summary</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Aggregate scale at a glance
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/76">
            The new top section gives users the portfolio picture immediately before they move into
            onshore, offshore, and gas strategy detail.
          </p>
          <div className="mt-10">
            <StatStrip />
          </div>
        </section>

        <AssetSection id="onshore-assets" title="Onshore Assets" assets={onshoreOperations} />
        <AssetSection id="offshore-assets" title="Offshore Assets" assets={offshoreOperations} />

        <section
          id="gas-strategy"
          className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Gas Strategy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              A clearer gas-led commercialization narrative
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The revised gas section keeps the strength of the existing strategy narrative while
              removing stale timing references and presenting the story in a cleaner, more structured way.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {gasStrategySections.map((section) => (
              <article
                key={section.title}
                className="rounded-[30px] border border-slate-200 bg-slate-50/85 p-6"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {section.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
