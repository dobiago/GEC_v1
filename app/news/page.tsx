import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { newsItems } from "@/lib/site-data"

const categories = ["Operations", "Partnerships", "Community", "Awards"]

export default function NewsPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-20 pt-16 md:px-12 md:pb-24 md:pt-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="GEC In The News"
            title="A new top-level news surface that keeps the site active."
            description="This section is set up for company announcements, partnership stories, awards, and progress milestones, with a layout that can grow into category filtering as volume increases."
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-6 shadow-[0_24px_70px_rgba(58,0,30,0.08)]"
            >
              <div className="aspect-[16/10] rounded-[24px] border border-slate-200 bg-[linear-gradient(135deg,#3A001E,#7a1040)]" />
              <div className="mt-6 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.excerpt}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#D8271B] transition hover:text-[#3A001E]"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
