import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { homeSections, homeStats, newsItems, timelineEntries } from "@/lib/site-data"

export default function Home() {
  return (
    <main className="overflow-hidden pt-[76px] text-slate-900">
      <section className="relative px-6 pb-18 pt-16 md:px-12 md:pb-24 md:pt-24">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_15%_20%,rgba(14,116,144,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.18),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0))]" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-8">
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
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-slate-800"
              >
                Explore About GPDC
              </Link>
              <Link
                href="/operations"
                className="rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-slate-800 transition hover:border-slate-400"
              >
                View Operations
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.22),transparent_46%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.22),transparent_42%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(14,116,144,0.8)),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_20%)] p-8 text-white shadow-[0_40px_120px_rgba(37,62,92,0.18)]">
              <div className="grid gap-4">
                <div className="grid grid-cols-6 gap-2 opacity-75">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <div key={index} className="aspect-square rounded-full border border-white/12 bg-white/6" />
                  ))}
                </div>
                <div className="space-y-4 rounded-[28px] border border-white/12 bg-white/8 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-100/80">Modern energy platform</p>
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    A lighter, cleaner identity for portfolio, partnerships, and progress.
                  </p>
                  <p className="max-w-lg text-sm leading-7 text-sky-50/80">
                    The redesigned hero replaces the heavier black globe aesthetic with a brighter,
                    data-led visual language that feels contemporary and forward-looking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-18 md:px-12 md:pb-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[30px] border border-slate-200 bg-white/88 p-6 shadow-[0_24px_70px_rgba(37,62,92,0.08)]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-18 md:px-12 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]">
            <SectionHeading
              eyebrow="About Us"
              title="A more credible, scrollable company story."
              description={homeSections.about}
            />
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-slate-800 transition hover:border-slate-400"
            >
              Read the full About page
            </Link>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(10,37,64,0.96),rgba(14,116,144,0.88))] p-8 text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">Timeline teaser</p>
            <p className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em]">
              From 1991 to 2026, the site now tells a clearer story of growth and repositioning.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              {homeSections.timelineTeaser}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {timelineEntries.slice(0, 4).map((entry) => (
                <article key={entry.year} className="rounded-[24px] border border-white/14 bg-white/8 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-amber-200">{entry.year}</p>
                  <h2 className="mt-3 text-xl font-semibold">{entry.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/72">{entry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              className="rounded-[32px] border border-slate-200 bg-white/92 p-6 shadow-[0_24px_70px_rgba(37,62,92,0.08)]"
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
