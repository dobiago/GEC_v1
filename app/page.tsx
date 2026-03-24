import { Globe } from "@/components/ui/cobe-globe"
import { globeArcs, globeMarkers } from "@/lib/site-data"

export default function Home() {
  return (
    <main className="overflow-hidden bg-black pt-32 text-white">
      <section className="relative h-[calc(100vh-8rem)] w-full overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(94,126,168,0.2),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

        <div className="relative grid h-full items-center gap-6 md:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 flex flex-col justify-center space-y-5 pb-12 md:pb-8 lg:order-1 lg:max-w-[34rem] lg:pb-0">
            <h1 className="text-5xl font-medium tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
              GEC Petroleum Development Company
            </h1>
            <p className="hidden max-w-[32rem] text-base leading-8 text-zinc-400 sm:text-lg md:block">
              GEC Petroleum Development Company Limited (GPDC) was founded in 1991 and has over the years metamorphosed from a service contractor to major oil companies in Nigeria into an active explorer and developer of oil and gas resources.
            </p>
          </div>

          <div className="order-1 flex h-full items-center justify-center overflow-visible pt-4 lg:order-2 lg:justify-end lg:pt-0">
            <div className="relative w-[130%] max-w-none shrink-0 sm:w-[120%] lg:w-[138%] lg:translate-x-[16%]">
              <div className="absolute inset-y-[16%] left-[14%] right-[4%] rounded-full bg-[radial-gradient(circle,rgba(113,157,203,0.2),transparent_58%)] blur-3xl" />
              <Globe
                className="drop-shadow-[0_0_90px_rgba(82,126,168,0.22)]"
                markers={globeMarkers}
                arcs={globeArcs}
                showMarkerLabels={false}
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
    </main>
  )
}
