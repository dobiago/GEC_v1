import Link from "next/link"

type OperationCategoryCardProps = {
  href: string
  title: string
  imageSrc?: string
}

export function OperationCategoryCard({ href, title, imageSrc }: OperationCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[170px] items-end overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.05] sm:min-h-[190px] lg:min-h-0 lg:p-8"
    >
      <div
        className="absolute inset-0 bg-zinc-900 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-90"
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-90" />
      <p className="relative z-10 text-xl font-medium tracking-[-0.04em] text-white sm:text-2xl">
        {title}
      </p>
    </Link>
  )
}
