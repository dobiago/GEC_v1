import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import type { AboutContentBlock } from "@/lib/about-data"

type AboutContentPageProps = {
  blocks: AboutContentBlock[]
  imageSrc: string
  title: string
}

export function AboutContentPage({ blocks, imageSrc, title }: AboutContentPageProps) {
  const content = (
    <div className="space-y-10 text-base leading-8 text-zinc-300">
      {blocks.map((block, index) => (
        <div key={`${title}-${index}`} className="space-y-5">
          {block.heading ? (
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">{block.heading}</h2>
          ) : null}
          {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {block.bullets ? (
            <ul className="space-y-4 pl-5 marker:text-zinc-500">
              {block.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  )

  return (
    <main className="overflow-hidden bg-black pt-32 text-white">
      <section className="lg:hidden">
        <div className="h-[160px] w-full">
          <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="px-6 pb-12 pt-6 md:px-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <OperationsBreadcrumb />
              <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{title}</h1>
            </div>
            {content}
          </div>
        </div>
      </section>

      <section className="hidden h-[calc(100vh-8rem)] w-full overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 flex h-full items-center justify-start px-6 py-8 md:px-12 lg:order-1 lg:py-0">
          <div className="flex h-full max-w-[680px] flex-col space-y-6 overflow-hidden">
            <div className="space-y-3">
              <OperationsBreadcrumb />
              <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{title}</h1>
            </div>
            <div className="flex-1 overflow-y-auto pr-2">{content}</div>
          </div>
        </div>

        <div className="order-1 flex h-full items-start justify-end px-6 pt-8 md:px-12 lg:order-2 lg:pt-0">
          <div className="h-[85%] w-[90%]">
            <img src={imageSrc} alt={title} className="h-full w-full object-contain" />
          </div>
        </div>
      </section>
    </main>
  )
}
