import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import { gasOperations } from "@/lib/site-data"

export default function GasOperationsPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="w-full">
        <div className="h-[160px] w-full md:h-[22vh]">
          <img
            src="/operations/gas-assets-card.png"
            alt="Gas Strategy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 pb-24 md:px-12">
          <div className="mt-12 space-y-14">
            <div className="space-y-3">
              <OperationsBreadcrumb />
              <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                Gas Strategy
              </h1>
            </div>

            {gasOperations.map((section) => (
              <article key={section.title} className="space-y-5 border-t border-white/10 pt-10">
                <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">
                  {section.title}
                </h2>
                <div className="space-y-5 text-base leading-8 text-zinc-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-4 pl-5 text-base leading-8 text-zinc-300 marker:text-zinc-500">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
