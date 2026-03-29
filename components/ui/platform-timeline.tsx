import Image from "next/image"

import { timelineEntries } from "@/lib/site-data"
import { TimelineYear } from "@/components/ui/timeline-year"

export function PlatformTimeline() {
  return (
    <section className="relative w-full">
      <div className="relative h-[52vh] min-h-[420px] w-full overflow-hidden md:h-[60vh]">
        <Image
          src="/platform.jpg"
          alt="Offshore platform"
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative -mt-[16vh] px-6 pb-20 md:-mt-[24vh] md:px-12 md:pb-28">
        <div className="mx-auto mb-10 max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
            History
          </p>
        </div>

        <div className="mx-auto hidden max-w-7xl lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-300/80" />
            <div
              className="grid gap-8 xl:gap-10"
              style={{ gridTemplateColumns: `repeat(${timelineEntries.length}, minmax(0, 1fr))` }}
            >
              {timelineEntries.map((entry, index) => {
                const isTop = index % 2 === 0

                return (
                  <article
                    key={entry.year}
                    className={`grid min-h-[320px] grid-rows-[1fr_auto_1fr] ${
                      isTop ? "text-left" : "text-left"
                    }`}
                  >
                    <div className={isTop ? "self-end pb-10" : ""}>
                      {isTop ? (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
                            <TimelineYear year={entry.year} />
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                            {entry.title}
                          </h3>
                          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                            {entry.description}
                          </p>
                        </>
                      ) : null}
                    </div>

                    <div className="relative flex items-center justify-start">
                      <span className="relative z-10 h-4 w-4 rounded-full border-4 border-white bg-amber-500" />
                    </div>

                    <div className={isTop ? "" : "pt-10"}>
                      {!isTop ? (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
                            <TimelineYear year={entry.year} />
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                            {entry.title}
                          </h3>
                          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                            {entry.description}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:hidden">
          <div className="relative pl-14">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-300/80" />
            <div className="space-y-12">
              {timelineEntries.map((entry) => (
                <article key={entry.year} className="relative">
                  <span className="absolute -left-10 top-2 h-4 w-4 rounded-full border-4 border-white bg-amber-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
                    <TimelineYear year={entry.year} />
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{entry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
