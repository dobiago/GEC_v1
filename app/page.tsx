import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { PlatformTimeline } from "@/components/ui/platform-timeline"
import { WaveHalftone } from "@/components/ui/wave-halftone"
import { homeSections, homeStats, newsItems } from "@/lib/site-data"

export default function Home() {
  return (
    <main className="overflow-hidden pt-[76px] text-slate-900">
      <section className="relative isolate min-h-[90vh] px-6 pb-18 pt-16 md:px-12 md:pb-24 md:pt-24">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_15%_20%,rgba(14,116,144,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.18),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0))]" />
        <WaveHalftone
          className="absolute inset-0 z-0"
          dotColor="rgba(180,180,180,0.35)"
          waveColor="rgba(200,200,200,0.7)"
          interactive={true}
        />
        <div className="relative z-10 flex h-full min-h-[90vh] items-center">
          <div className="max-w-2xl space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
              {homeSections.hero.eyebrow}
            </p>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">
                {homeSections.hero.title}
              </h1>
              <p className="text-xl font-medium text-amber-700 sm:text-2xl">
                Indigenous Energy. Enduring Impact.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {homeSections.hero.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-sm bg-slate-950 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-slate-800"
              >
                Explore About GPDC
              </Link>
              <Link
                href="/operations"
                className="rounded-sm border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-slate-800 transition hover:border-slate-400"
              >
                View Operations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-18 md:px-12 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat) => (
            <article key={stat.label} className="border-l-2 border-amber-500 pl-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              <p className="mt-4 text-4xl font-bold tracking-[-0.05em] text-slate-950">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PlatformTimeline />

      <section className="px-6 pb-20 md:px-12 md:pb-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="GEC In The News"
            title="A living surface for company progress and industry relevance."
            description={homeSections.newsTeaser}
          />
          <Link
            href="/news"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 transition hover:text-slate-900"
          >
            View all news
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border border-slate-200 bg-white/92 p-6 shadow-[0_24px_70px_rgba(37,62,92,0.08)]"
            >
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.excerpt}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 transition hover:text-slate-900"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
