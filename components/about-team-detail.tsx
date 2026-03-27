import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"

type AboutTeamDetailProps = {
  bio: string[]
  name: string
  title: string
}

export function AboutTeamDetail({ bio, name, title }: AboutTeamDetailProps) {
  return (
    <main className="w-full pt-28 text-slate-900">
      <section className="grid w-full gap-10 px-6 pb-20 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{name}</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{title}</p>
          </div>
          <div className="space-y-5 rounded-[32px] border border-slate-200 bg-white/90 p-8 text-base leading-8 text-slate-600 shadow-[0_30px_80px_rgba(37,62,92,0.08)]">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32">
          <div className="aspect-[4/3] w-full rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.18),transparent_45%),linear-gradient(135deg,#f8fafc,#e2e8f0)] shadow-[0_30px_80px_rgba(37,62,92,0.08)]" />
        </div>
      </section>
    </main>
  )
}
