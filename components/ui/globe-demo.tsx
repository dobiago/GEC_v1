"use client"

import Link from "next/link"

import { Globe } from "@/components/ui/cobe-globe"
import { globeArcs, globeMarkers, operationsPreviewSections } from "@/lib/site-data"

const quickLinks = [
  { href: "/operations", label: "Operations", description: "Onshore, offshore, and gas strategy detail." },
  { href: "/services", label: "Services", description: "Subsurface, wells, production, and advisory scope." },
  { href: "/about", label: "About", description: "Company profile, leadership, and operating model." },
]

export default function GlobeDemo() {
  return (
    <main className="bg-black text-white">
      <section className="relative w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,169,122,0.14),transparent_32%),radial-gradient(circle_at_80%_35%,rgba(74,122,176,0.18),transparent_30%)]" />
        <div className="grid min-h-screen w-full items-center gap-12 px-6 pb-20 pt-28 md:px-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 w-full space-y-8 lg:order-1">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.36em] text-zinc-500">Upstream oil and gas</p>
              <h1 className="text-5xl font-medium tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                Operating upstream assets with technical control.
              </h1>
              <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                GEC Petroleum Development Company screens, develops, and operates oil and gas
                positions across offshore, shelf, and unconventional basins.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/operations"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium tracking-[0.08em] text-black transition hover:bg-zinc-200"
              >
                View Operations
              </Link>
              <div className="inline-flex h-12 items-center rounded-full border border-white/10 px-5 text-sm tracking-[0.08em] text-zinc-300">
                Active in 5 core operating regions
              </div>
            </div>

            <div className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl tracking-[-0.05em] text-white">5</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-zinc-500">Licensed assets</p>
              </div>
              <div>
                <p className="text-3xl tracking-[-0.05em] text-white">{operationsPreviewSections.length}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-zinc-500">Operating clusters</p>
              </div>
              <div>
                <p className="text-3xl tracking-[-0.05em] text-white">24/7</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-zinc-500">Operations support</p>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center overflow-hidden lg:order-2 lg:justify-end">
            <div className="relative w-[150%] shrink-0 translate-x-[20%] sm:w-[135%] sm:translate-x-[24%] lg:w-[145%] lg:translate-x-[38%]">
              <div className="absolute inset-y-[12%] left-[8%] right-0 rounded-full bg-[radial-gradient(circle,rgba(113,157,203,0.16),transparent_58%)] blur-3xl" />
              <Globe
                className="drop-shadow-[0_0_80px_rgba(82,126,168,0.2)]"
                markers={globeMarkers}
                arcs={globeArcs}
                markerColor={[0.72, 0.78, 0.88]}
                baseColor={[0.64, 0.67, 0.73]}
                arcColor={[0.76, 0.64, 0.42]}
                glowColor={[0.12, 0.12, 0.13]}
                dark={1}
                mapBrightness={3}
                markerSize={0.04}
                markerElevation={0.03}
                arcWidth={0.7}
                arcHeight={0.18}
                speed={0.0025}
                theta={0.18}
                diffuse={1.1}
                mapSamples={12000}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-white/10 bg-white/[0.02]">
        <div className="grid w-full gap-10 px-6 py-14 md:px-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Who we are</p>
            <p className="text-xl leading-8 tracking-[-0.03em] text-zinc-200">
              GEC Petroleum Development Company is a technically led operator working across
              selected hydrocarbon provinces with direct focus on subsurface clarity, well
              delivery, and production performance.
            </p>
          </div>
          <div className="grid gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-200">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
