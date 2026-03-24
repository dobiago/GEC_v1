import Link from "next/link"

type OperationAssetCardProps = {
  href: string
  title: string
  imageSrc?: string
}

export function OperationAssetCard({ href, title, imageSrc }: OperationAssetCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full min-h-[220px] flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div
        className="aspect-video w-full rounded-[22px] border border-white/10 bg-zinc-950 bg-cover bg-center"
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      />
      <p className="mt-5 text-xl font-medium tracking-[-0.03em] text-white">{title}</p>
    </Link>
  )
}
