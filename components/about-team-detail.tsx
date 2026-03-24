import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"

type AboutTeamDetailProps = {
  bio: string[]
  name: string
  title: string
}

export function AboutTeamDetail({ bio, name, title }: AboutTeamDetailProps) {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="grid w-full gap-10 px-6 pb-20 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{name}</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">{title}</p>
          </div>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32">
          <div className="aspect-[4/3] w-full rounded-[32px] border border-white/10 bg-zinc-950" />
        </div>
      </section>
    </main>
  )
}
