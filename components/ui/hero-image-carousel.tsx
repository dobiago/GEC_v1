import Image from "next/image"

type HeroImageCarouselProps = {
  className?: string
  images: string[]
}

export function HeroImageCarousel({ className = "", images }: HeroImageCarouselProps) {
  const duplicatedImages = [...images, ...images]

  return (
    <div aria-hidden="true" className={`pointer-events-none relative z-[1] w-full ${className}`}>
      <div className="px-6 md:px-12">
        <div className="relative overflow-hidden">
          <div className="hero-carousel-edge hero-carousel-edge-left" />
          <div className="hero-carousel-edge hero-carousel-edge-right" />

          <div className="group/hero-carousel pointer-events-auto relative">
            <div className="hero-carousel-track flex w-max gap-4 pr-4 md:gap-5 md:pr-5">
              {duplicatedImages.map((src, index) => (
                <article
                  key={`${src}-${index}`}
                  className="relative aspect-[1.78/1] w-[52vw] max-w-[320px] min-w-[190px] overflow-hidden border border-white/25 bg-[#d8cfb4]/55 shadow-[0_24px_60px_rgba(58,0,30,0.10)] sm:w-[36vw] md:w-[22vw] lg:w-[16vw]"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 22vw, (min-width: 640px) 36vw, 52vw"
                    className="object-cover object-center"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,233,208,0.04),rgba(58,0,30,0.08))]" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
