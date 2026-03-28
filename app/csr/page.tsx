import { SectionHeading } from "@/components/section-heading"
import { SectionSubnav } from "@/components/section-subnav"
import { csrSections } from "@/lib/site-data"

const csrNav = csrSections.map((section) => ({
  href: `#${section.id}`,
  label: section.title,
}))

export default function CSRPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Corporate Social Responsibility"
            title="A new CSR platform with six clear pillars."
            description="CSR is now a dedicated top-level destination with a structure designed for future approved content, host-community storytelling, and a more contemporary sustainability narrative."
          />
        </div>
      </section>

      <SectionSubnav items={csrNav} />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        {csrSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="grid scroll-mt-32 gap-8 rounded-sm border border-slate-200 p-8 shadow-[0_30px_90px_rgba(58,0,30,0.08)] lg:grid-cols-[0.34fr_0.66fr]"
            style={{
              background:
                index % 2 === 0
                  ? "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240,249,255,0.95))"
                  : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(254,249,195,0.92))",
            }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">CSR Pillar</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-base leading-8 text-slate-600">{section.body}</p>
              <div className="rounded-sm border border-slate-200 bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Implementation note</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  This layout is ready to receive approved project photography, icons, and final
                  pillar-specific copy from the GEC team without another IA change.
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
