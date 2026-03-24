interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="w-full space-y-4">
      <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">{eyebrow}</p>
      <h1 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">{title}</h1>
      {description ? <p className="text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
    </div>
  )
}
