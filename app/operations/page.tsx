import { OperationCategoryCard } from "@/components/operation-category-card"
import { MobileSectionNav } from "@/components/mobile-section-nav"
import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import { operationsIntro, operationsPreviewSections } from "@/lib/site-data"

export default function OperationsPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <MobileSectionNav
        items={[
          { href: "/operations/onshore", label: "Onshore" },
          { href: "/operations/offshore", label: "Offshore" },
          { href: "/operations/gas", label: "Gas Strategy" },
        ]}
      />

      <section className="grid w-full gap-8 overflow-hidden px-6 pb-14 pt-6 md:px-12 lg:h-[calc(100vh-8rem)] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-12 lg:pb-10 lg:pt-0">
        <div className="flex h-full flex-col gap-5 lg:max-w-[52ch] lg:py-4">
          <div className="space-y-2.5">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.2rem]">
              Operations
            </h1>
          </div>
          <div className="h-full overflow-y-auto pr-2 space-y-4 text-sm leading-7 text-zinc-300 sm:text-[15px] lg:text-sm lg:leading-6">
            {operationsIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="hidden h-full flex-col gap-4 lg:flex lg:min-h-0">
          {operationsPreviewSections.map((section) => (
            <div key={section.slug} className="flex-1">
              <OperationCategoryCard href={section.href} title={section.title} imageSrc={section.imageSrc} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
