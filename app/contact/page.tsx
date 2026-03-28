import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { company, contactHighlights } from "@/lib/site-data"

export default function ContactPage() {
  return (
    <main className="pt-[76px] text-slate-900">
      <section className="px-6 pb-20 pt-16 md:px-12 md:pb-24 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Commercial, technical, partnership, and media enquiries."
              description="The contact page now removes the incorrect physical address from the public-facing experience and routes enquiries through the correct email-based contact paths."
            />

            <div className="rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-6 shadow-[0_30px_80px_rgba(58,0,30,0.08)]">
              <div className="space-y-5">
                {contactHighlights.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-slate-200 bg-[linear-gradient(135deg,rgba(58,0,30,0.96),rgba(90,10,50,0.88))] p-6 text-white shadow-[0_30px_90px_rgba(37,62,92,0.16)]">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-200">Corporate identity</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{company.heroTagline}</p>
              <p className="mt-4 text-base leading-8 text-white/78">{company.overview}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
