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
      className="group flex h-full min-h-[260px] flex-col justify-between rounded-sm border border-slate-200 bg-white/92 p-5 shadow-[0_24px_70px_rgba(37,62,92,0.08)] transition duration-300 hover:-translate-y-1 hover:border-slate-300"
    >
      <div
        className="aspect-video w-full rounded-[24px] border border-slate-200 bg-slate-100 bg-cover bg-center"
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      />
      <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</p>
    </Link>
  )
}
