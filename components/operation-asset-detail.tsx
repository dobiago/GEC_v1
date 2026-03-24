import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"

type OperationAssetDetailProps = {
  title: string
  paragraphs: string[]
  imageSrc?: string
}

export function OperationAssetDetail({ title, paragraphs, imageSrc }: OperationAssetDetailProps) {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="grid w-full gap-10 px-6 pb-20 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{title}</h1>
          </div>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32">
          <div
            className="aspect-[4/3] w-full rounded-[32px] border border-white/10 bg-zinc-950 bg-cover bg-center"
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
          />
        </div>
      </section>
    </main>
  )
}
