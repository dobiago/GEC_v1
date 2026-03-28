import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"

type OperationAssetDetailProps = {
  title: string
  paragraphs: string[]
  imageSrc?: string
}

export function OperationAssetDetail({ title, paragraphs, imageSrc }: OperationAssetDetailProps) {
  return (
    <main className="w-full pt-28 text-slate-900">
      <section className="grid w-full gap-10 px-6 pb-20 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h1>
          </div>
          <div className="space-y-5 rounded-sm border border-slate-200 bg-white/90 p-8 text-base leading-8 text-slate-600 shadow-[0_30px_80px_rgba(37,62,92,0.08)]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32">
          <div
            className="aspect-[4/3] w-full rounded-[32px] border border-slate-200 bg-slate-100 bg-cover bg-center shadow-[0_30px_80px_rgba(37,62,92,0.08)]"
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
          />
        </div>
      </section>
    </main>
  )
}
