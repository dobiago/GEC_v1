import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/site-data"

export default function ServicesPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
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
            <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{service.title}</p>
              <p className="mt-5 text-lg leading-8 text-zinc-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
