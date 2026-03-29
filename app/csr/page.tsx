import Image from "next/image"

import { SectionHeading } from "@/components/section-heading"
import { SectionSubnav } from "@/components/section-subnav"
import { csrSections } from "@/lib/site-data"

const orderedCsrSections = [
  ...csrSections.filter((section) => section.id === "health-safety"),
  ...csrSections.filter((section) => section.id !== "health-safety"),
]

const csrNav = orderedCsrSections.map((section) => ({
  href: `#${section.id}`,
  label: section.title,
}))

export default function CSRPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="relative min-h-[480px] overflow-hidden bg-[#EDE9D0] px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-20">
        <div className="absolute inset-y-0 left-1/2 right-0 hidden md:block">
          <Image
            src="/csr-hero.png"
            alt="CSR hero"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#EDE9D0_0%,rgba(237,233,208,0.92)_18%,rgba(237,233,208,0.72)_36%,rgba(237,233,208,0.32)_58%,rgba(237,233,208,0)_100%)]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <SectionHeading
            eyebrow="Corporate Social Responsibility"
            title="Sustainability and responsible operations across every part of the business."
            description="GPDC is a responsible corporate citizen and sustainability is at the heart of all our operations. We have developed a multilayered approach which emphasizes responsible stewardship of the environment, efficient use of ecological resources, best practice health and safety standards and sustainable community infrastructural development."
          />
        </div>
      </section>

      <SectionSubnav items={csrNav} />

      <div className="space-y-8 px-6 py-10 md:px-12 md:py-14">
        {orderedCsrSections.map((section) => {
          const isHealthSafety = section.id === "health-safety"

          return (
            <section
              key={section.id}
              id={section.id}
              className={`grid scroll-mt-32 gap-8 rounded-sm border border-slate-200 p-8 lg:grid-cols-[0.34fr_0.66fr] ${
                isHealthSafety
                  ? "bg-[linear-gradient(135deg,rgba(58,0,30,0.96),rgba(90,10,50,0.88))] text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]"
                  : "bg-[#EDE9D0]/80 shadow-[0_30px_90px_rgba(58,0,30,0.08)]"
              }`}
            >
              <div className="w-full max-w-none space-y-6" style={{ gridColumn: "1 / -1" }}>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                    isHealthSafety ? "text-amber-200" : "text-[#D8271B]"
                  }`}
                >
                  {section.eyebrow}
                </p>

                {isHealthSafety ? (
                  <>
                    <p className="text-base leading-8 text-white/80">{section.body[0]}</p>
                    {section.items?.length ? (
                      <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                          Key Components
                        </p>
                        <ul className="space-y-3 text-sm leading-7 text-white/80">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="text-amber-400" aria-hidden="true">
                                {"\u2022"}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                    {section.items?.length ? (
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Key components</p>
                        <ul className="space-y-3 text-sm leading-7 text-slate-700">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
