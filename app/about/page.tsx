import Link from "next/link"

import {
  aboutMissionVision,
  aboutNavigationItems,
  aboutPartners,
  aboutSections,
  aboutTeamMembers,
  aboutTimelineIntro,
  aboutValues,
} from "@/lib/about-data"
import { timelineEntries } from "@/lib/site-data"
import { SectionSubnav } from "@/components/section-subnav"
import { SectionHeading } from "@/components/section-heading"

const executiveDirectors = aboutTeamMembers.filter((member) => member.category === "executive")
const nonExecutiveDirectors = aboutTeamMembers.filter((member) => member.category === "non-executive")

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
            className="group rounded-[30px] border border-slate-200 bg-white/92 p-5 shadow-[0_24px_70px_rgba(37,62,92,0.08)] transition hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="aspect-[4/3] rounded-[24px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.16),transparent_40%),linear-gradient(135deg,#f8fafc,#dbeafe)]" />
            <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{member.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-500">{member.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="About"
            title="A single, scrollable company story built for credibility."
            description="The About experience now consolidates corporate identity, strategy, people, partnerships, governance, and company milestones into one long-form page with faster navigation."
          />
        </div>
      </section>

      <SectionSubnav
        items={aboutNavigationItems.map((item) => ({ href: item.href, label: item.title }))}
      />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        {aboutSections.slice(0, 3).map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="grid scroll-mt-32 gap-8 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)] lg:grid-cols-[0.38fr_0.62fr]"
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

        <section
          id="mission-vision-values"
          className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(10,37,64,0.96),rgba(14,116,144,0.88))] p-8 text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]"
        >
          <div className="grid gap-8 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                  Mission & Vision
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Mission, Vision & Values
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/78">
                <p>{aboutMissionVision.mission}</p>
                <p>{aboutMissionVision.vision}</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {aboutValues.map((value) => (
                <article key={value.title} className="rounded-[26px] border border-white/14 bg-white/8 p-5">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="our-team"
          className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
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
          className="scroll-mt-32 grid gap-8 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)] lg:grid-cols-[0.46fr_0.54fr]"
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
                <article key={highlight} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-700">{highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className="scroll-mt-32 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)]"
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
                className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.95))] p-6"
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

        {aboutSections.slice(3).map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="grid scroll-mt-32 gap-8 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(37,62,92,0.08)] lg:grid-cols-[0.38fr_0.62fr]"
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
