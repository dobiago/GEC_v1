interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="w-full space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{eyebrow}</p>
      <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h1>
      {description ? <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}
