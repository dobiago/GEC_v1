import Image from "next/image"
import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { SectionSubnav } from "@/components/section-subnav"
import {
  gasStrategyContent,
  offshoreOperations,
  onshoreOperations,
  operationsOverview,
  operationsPortfolioStats,
  operationsSubnav,
} from "@/lib/site-data"

function StatStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {operationsPortfolioStats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-sm border border-white/10 bg-white/5 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">{stat.label}</p>
          <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
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
      className="scroll-mt-32 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)]"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">Asset class</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {assets.map((asset) => (
          <article
            key={asset.slug}
            className="grid gap-5 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-4 shadow-[0_18px_50px_rgba(58,0,30,0.08)] sm:p-5 lg:gap-6 lg:p-6 lg:shadow-none lg:grid-cols-[0.34fr_0.66fr]"
          >
            <div className="space-y-4">
              <div className="w-full">
                <Link
                  href={asset.href}
                  className="block w-full transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/60 focus-visible:ring-offset-2"
                >
                  <div
                    className="aspect-[16/9] w-full rounded-sm border border-slate-200 bg-slate-100 bg-cover bg-center md:aspect-[4/3]"
                    style={{ backgroundImage: `url(${asset.imageSrc})` }}
                  />
                </Link>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950 lg:text-3xl">
                    {asset.title}
                  </h3>
                  <div className="hidden md:block">
                    <p className="mt-2 max-w-2xl text-[0.95rem] leading-7 text-slate-600 lg:mt-3 lg:text-base lg:leading-8">
                      {asset.intro}
                    </p>
                  </div>
                </div>
                <Link
                  href={asset.href}
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600 transition hover:text-amber-700 md:pt-1"
                >
                  Asset detail <span aria-hidden="true">{"\u2192"}</span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:gap-4 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2">
                  {asset.facts.map((fact) => (
                    <div
                      key={`${asset.slug}-${fact.label}`}
                      className="min-w-[13rem] snap-start rounded-[20px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(237,233,208,0.72))] p-4 shadow-[0_14px_34px_rgba(58,0,30,0.06)] md:min-w-0 md:rounded-sm md:bg-white md:p-5 md:shadow-none"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600 md:tracking-[0.18em] md:text-slate-500">
                        {fact.label}
                      </p>
                      <p className="mt-3 text-base font-semibold leading-7 text-slate-900">{fact.value}</p>
                    </div>
                  ))}
                </div>
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
      <section className="relative min-h-[480px] overflow-hidden bg-[#EDE9D0] px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="absolute inset-y-0 left-1/2 right-0 hidden md:block">
          <Image
            src="/platform2.png"
            alt="Offshore platform"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#EDE9D0_0%,rgba(237,233,208,0.92)_18%,rgba(237,233,208,0.72)_36%,rgba(237,233,208,0.32)_58%,rgba(237,233,208,0)_100%)]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <SectionHeading
            eyebrow="Operations"
            title="How we create value"
          />
        </div>
        <div className="relative z-10 mt-8 max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          {operationsOverview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <SectionSubnav items={operationsSubnav} />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        <section
          id="portfolio-summary"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-[linear-gradient(135deg,rgba(58,0,30,0.96),rgba(90,10,50,0.88))] p-8 text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Portfolio Summary</p>
          <div className="mt-6">
            <StatStrip />
          </div>
        </section>

        <AssetSection id="offshore-assets" title="Offshore Assets" assets={offshoreOperations} />
        <AssetSection id="onshore-assets" title="Onshore Assets" assets={onshoreOperations} />

        <section
          id="gas-strategy"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)]"
        >
          <div className="w-full max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">Gas Strategy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {gasStrategyContent.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {gasStrategyContent.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
