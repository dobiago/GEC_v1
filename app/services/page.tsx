import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/site-data"

export default function ServicesPage() {
  return (
    <main className="w-full pt-28 text-slate-900">
      <section className="w-full px-6 pb-16 md:px-12">
        <SectionHeading
          eyebrow="Services"
          title="Capabilities across the upstream value chain."
          description="Our teams work across subsurface screening, drilling execution, and operating performance with a bias toward clear technical decision-making."
        />
      </section>

      <section className="w-full px-6 pb-24 md:px-12">
        <div className="grid w-full gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-7 shadow-[0_24px_70px_rgba(58,0,30,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{service.title}</p>
              <p className="mt-5 text-lg leading-8 text-slate-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
