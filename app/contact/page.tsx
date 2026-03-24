import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { company } from "@/lib/site-data"

export default function ContactPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="w-full px-6 pb-24 md:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Contact"
              title="Commercial, technical, and asset enquiries."
              description="For project screening, field support, or partnership discussions, contact the GEC Petroleum Development Company team directly."
            />

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-600">Head office</p>
                  <p className="mt-2 leading-7 text-zinc-300">{company.office.headquarters}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-600">Technical office</p>
                  <p className="mt-2 leading-7 text-zinc-300">{company.office.technical}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-600">Contact</p>
                  <p className="mt-2 text-zinc-300">{company.office.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
