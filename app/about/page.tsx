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
import { TimelineYear } from "@/components/ui/timeline-year"
import { ValuesSection } from "@/components/ui/values-section"

const executiveDirectors = aboutTeamMembers.filter((member) => member.category === "executive")
const nonExecutiveDirectors = aboutTeamMembers.filter(
  (member) => member.category === "non-executive" && member.slug !== "nnamdi-a-obiago",
)
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
      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/about/team/${member.slug}`}
            className="group rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-5 shadow-[0_24px_70px_rgba(58,0,30,0.08)] transition hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(58,0,30,0.10),transparent_40%),linear-gradient(135deg,#EDE9D0,#DF9A8B30)]">
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
      <section className="relative min-h-[480px] overflow-hidden bg-[#EDE9D0] px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="absolute inset-y-0 left-1/2 right-0 hidden md:block">
          <Image
            src="/about-hero.png"
            alt="About hero"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#EDE9D0_0%,rgba(237,233,208,0.92)_18%,rgba(237,233,208,0.72)_36%,rgba(237,233,208,0.32)_58%,rgba(237,233,208,0)_100%)]" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">About Us</p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Who are we
          </h1>
          <p
            className={`text-base leading-7 text-slate-600 sm:text-lg lg:line-clamp-none ${
              isIntroExpanded ? "block" : "line-clamp-3"
            }`}
          >
            GEC Petroleum Development Company Limited (GPDC) is a Nigerian indigenous exploration
            and production company, developing oil and gas resources across the Niger Delta and
            Anambra basins. GPDC is a wholly owned E&amp;P subsidiary of Global Energy Company
            Limited (GEC), an energy resources and infrastructure group with 35 years of operations
            in Africa. GPDC holds a portfolio of five oil and gas assets spanning over 8,300
            square kilometres of onshore and offshore acreages. Our assets, OML 149, OML 151, OPL
            2010, OPL 907, and OPL 917, include three onshore and two offshore blocks. GPDC serves
            as operator on four of the five licences. Successful drilling campaigns have proved up
            significant reserves and advanced two assets to development stage, with the Adofi River
            and Afiando fields positioned for first oil and gas.
          </p>
          <button
            type="button"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B] lg:hidden"
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
        <ValuesSection />

        <section
          id={strategicFocusSection.id}
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_24px_70px_rgba(58,0,30,0.08)]"
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
              className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B] lg:hidden"
              onClick={() => setIsStrategicFocusExpanded((value) => !value)}
              aria-expanded={isStrategicFocusExpanded}
            >
              {isStrategicFocusExpanded ? "Show less" : "Read more"}
            </button>
          </div>
        </section>

        <section
          id="our-team"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)]"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">Leadership</p>
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
            <TeamGrid title="Executive Management & Directors" members={executiveDirectors} />
            <TeamGrid title="Non-Executive Directors" members={nonExecutiveDirectors} />
          </div>
        </section>

        <section
          id="partners"
          hidden
          className="scroll-mt-32 grid gap-8 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)] lg:grid-cols-[0.46fr_0.54fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">Partnerships</p>
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
                <article key={highlight} className="rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-5">
                  <p className="text-sm leading-7 text-slate-700">{highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className="scroll-mt-32 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">History</p>
          <div className="mt-10 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-300/80" />
              <div
                className="grid gap-8 xl:gap-10"
                style={{ gridTemplateColumns: `repeat(${timelineEntries.length}, minmax(0, 1fr))` }}
              >
                {timelineEntries.map((entry, index) => {
                  const isTop = index % 2 === 0

                  return (
                    <article key={entry.year} className="grid min-h-[320px] grid-rows-[1fr_auto_1fr] text-left">
                      <div className={isTop ? "self-end pb-10" : ""}>
                        {isTop ? (
                          <>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                              <TimelineYear year={entry.year} />
                            </p>
                            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                              {entry.title}
                            </h3>
                            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                              {entry.description}
                            </p>
                          </>
                        ) : null}
                      </div>

                      <div className="relative flex items-center justify-start">
                        <span className="relative z-10 h-4 w-4 rounded-full border-4 border-white bg-amber-500" />
                      </div>

                      <div className={isTop ? "" : "pt-10"}>
                        {!isTop ? (
                          <>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                              <TimelineYear year={entry.year} />
                            </p>
                            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                              {entry.title}
                            </h3>
                            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                              {entry.description}
                            </p>
                          </>
                        ) : null}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 lg:hidden">
            <div className="relative pl-14">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-300/80" />
              <div className="space-y-12">
                {timelineEntries.map((entry) => (
                  <article key={entry.year} className="relative">
                    <span className="absolute -left-10 top-2 h-4 w-4 rounded-full border-4 border-white bg-amber-500" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                      <TimelineYear year={entry.year} />
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{entry.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {remainingAboutSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            hidden={section.id === "governance"}
            className="grid scroll-mt-32 gap-8 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)] lg:grid-cols-[0.38fr_0.62fr]"
          >
            {section.id === "careers" ? (
              <div className="w-full space-y-5" style={{ gridColumn: "1 / -1" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">
                  {section.kicker}
                </p>
                <div className="space-y-5 text-base leading-8 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">
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
              </>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
