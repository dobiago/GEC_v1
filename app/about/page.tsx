"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import {
  aboutNavigationItems,
  aboutPartners,
  aboutSections,
  aboutTeamMembers,
  aboutTimelineIntro,
} from "@/lib/about-data"
import { timelineEntries } from "@/lib/site-data"
import { SectionSubnav } from "@/components/section-subnav"
import { ValuesSection } from "@/components/ui/values-section"

const executiveDirectors = aboutTeamMembers.filter((member) => member.category === "executive")
const nonExecutiveDirectors = aboutTeamMembers.filter((member) => member.category === "non-executive")
const [strategicFocusSection, ...remainingAboutSections] = aboutSections

function TeamGrid({
  title,
  members,
}: {
  title: string
  members: typeof aboutTeamMembers
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{members.length} profiles</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/about/team/${member.slug}`}
            className="group rounded-sm border border-slate-200 bg-white/92 p-5 shadow-[0_24px_70px_rgba(37,62,92,0.08)] transition hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.16),transparent_40%),linear-gradient(135deg,#f8fafc,#dbeafe)]">
              {member.imageSrc ? (
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                />
              ) : null}
            </div>
            <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{member.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-500">{member.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(false)
  const [isStrategicFocusExpanded, setIsStrategicFocusExpanded] = useState(false)

  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="w-full space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">About Us</p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Who are we
          </h1>
          <p
            className={`text-base leading-7 text-slate-600 sm:text-lg lg:line-clamp-none ${
              isIntroExpanded ? "block" : "line-clamp-3"
            }`}
          >
            GEC Petroleum Development Company Limited (GPDC) is a Nigerian indigenous Independent
            actively exploring and developing oil and gas resources in the Niger Delta and Anambra
            basins. It is the wholly owned E & P subsidiary of Global Energy Company Limited (GEC),
            an Energy Resources and Infrastructure Group focused on Africa for over 23 years. GPDC
            holds a prime portfolio of five (5) oil and gas assets with an acreage footprint in
            excess of 5,200 km2 and an estimated reserves/resources base of + 6.4Tcf gas, and
            +1.3b barrels of oil and condensates. Our assets comprise of OML 149, OML 151, OPL
            2010, OPL 907 and OPL 917. GPDC is the Operator of four (4) of these licenses. GPDC's
            asset portfolio is well diversified, consisting of 3 onshore &amp; 2 offshore blocks.
            GPDC's successful drilling campaigns have proved up significant reserves and brought two
            (2) of its assets to development stages. First oil and gas from two (2) fields, (Adofi
            River and Afiando) is achievable within 18-24 months respectively.
          </p>
          <button
            type="button"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 lg:hidden"
            onClick={() => setIsIntroExpanded((value) => !value)}
            aria-expanded={isIntroExpanded}
          >
            {isIntroExpanded ? "Show less" : "Read more"}
          </button>
        </div>
      </section>

      <SectionSubnav
        items={aboutNavigationItems.map((item) => ({ href: item.href, label: item.title }))}
      />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        <section
          id={strategicFocusSection.id}
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(37,62,92,0.08)]"
        >
          <div className="w-full space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
              {strategicFocusSection.title}
            </p>
            <div
              className={`space-y-4 overflow-hidden lg:max-h-none lg:overflow-visible ${
                isStrategicFocusExpanded ? "max-h-[999px]" : "max-h-[5.25rem]"
              }`}
            >
              {strategicFocusSection.body.map((paragraph) => (
                <p key={paragraph} className="pl-4 text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <button
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 lg:hidden"
              onClick={() => setIsStrategicFocusExpanded((value) => !value)}
              aria-expanded={isStrategicFocusExpanded}
            >
              {isStrategicFocusExpanded ? "Show less" : "Read more"}
            </button>
          </div>
        </section>

        <ValuesSection />

        <section
          id="our-team"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Leadership</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The team section has been re-framed for clarity, with executive and non-executive
              groupings and profile cards that can accept updated bios and headshots as soon as the
              GEC team confirms the final roster.
            </p>
          </div>
          <div className="mt-10 space-y-10">
            <TeamGrid title="Executive Directors" members={executiveDirectors} />
            <TeamGrid title="Non-Executive Directors" members={nonExecutiveDirectors} />
          </div>
        </section>

        <section
          id="partners"
          className="scroll-mt-32 grid gap-8 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)] lg:grid-cols-[0.46fr_0.54fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Partnerships</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              {aboutPartners.title}
            </h2>
          </div>
          <div className="space-y-5">
            <div className="space-y-5 text-base leading-8 text-slate-600">
              {aboutPartners.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {aboutPartners.highlights.map((highlight) => (
                <article key={highlight} className="rounded-sm border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-700">{highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Milestones</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Company Timeline
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{aboutTimelineIntro}</p>
          <div className="mt-10 grid gap-5 xl:grid-cols-4">
            {timelineEntries.map((entry) => (
              <article
                key={entry.year}
                className="rounded-sm border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.95))] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  {entry.year}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {entry.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{entry.description}</p>
              </article>
            ))}
          </div>
        </section>

        {remainingAboutSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="grid scroll-mt-32 gap-8 rounded-sm border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)] lg:grid-cols-[0.38fr_0.62fr]"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                {section.kicker}
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
