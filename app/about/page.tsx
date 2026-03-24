import { AboutSectionNav } from "@/components/about-section-nav"
import { MobileSectionNav } from "@/components/mobile-section-nav"
import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import { aboutWhoWeAre } from "@/lib/about-data"

export default function AboutPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <MobileSectionNav
        items={[
          { href: "/about/strategic-focus", label: "Strategic Focus" },
          { href: "/about/values", label: "Our Values" },
          { href: "/about/team", label: "Our Team" },
          { href: "/about/governance", label: "Corporate Governance" },
          { href: "/about/careers", label: "Careers" },
        ]}
      />

      <section className="grid w-full gap-8 overflow-hidden px-6 pb-14 pt-6 md:px-12 lg:h-[calc(100vh-8rem)] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-12 lg:pb-10 lg:pt-0">
        <div className="flex h-full flex-col gap-5 lg:max-w-[52ch] lg:py-4">
          <div className="space-y-2.5">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.2rem]">
              {aboutWhoWeAre.title}
            </h1>
          </div>
          <div className="h-full space-y-4 overflow-y-auto pr-2 text-sm leading-7 text-zinc-300 sm:text-[15px] lg:text-sm lg:leading-6">
            {aboutWhoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="hidden h-full flex-col gap-4 lg:flex lg:min-h-0">
          <AboutSectionNav />
        </div>
      </section>
    </main>
  )
}
