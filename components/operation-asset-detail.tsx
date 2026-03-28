import { existsSync } from "fs"
import { join } from "path"

import Image from "next/image"

import type { AssetDetailMediaSlot } from "@/lib/site-data"

import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"

type OperationAssetDetailProps = {
  detailMediaSlots: AssetDetailMediaSlot[]
  detailParagraphs: string[]
  imageSrc?: string
  title: string
}

function assetMediaPath(src: string) {
  return join(process.cwd(), "public", src.replace(/^\//, "").replaceAll("/", "\\"))
}

export function OperationAssetDetail({
  detailMediaSlots,
  detailParagraphs,
  imageSrc,
  title,
}: OperationAssetDetailProps) {
  return (
    <main className="w-full pt-28 text-slate-900">
      <section className="grid w-full gap-10 px-6 pb-20 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <OperationsBreadcrumb />
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h1>
          </div>
          <div className="space-y-5 rounded-sm border border-slate-200 bg-[#EDE9D0]/80 p-8 text-base leading-8 text-slate-600 shadow-[0_30px_80px_rgba(58,0,30,0.08)]">
            {detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="rounded-sm border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(58,0,30,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8271B]">Document images</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Asset page visuals</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {detailMediaSlots.map((slot) => {
                const imageExists = existsSync(assetMediaPath(slot.src))

                return imageExists ? (
                  <div
                    key={slot.fileName}
                    className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#EDE9D0]/50 shadow-[0_20px_60px_rgba(58,0,30,0.08)]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image src={slot.src} alt={slot.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                  </div>
                ) : (
                  <div
                    key={slot.fileName}
                    className="flex aspect-[16/10] flex-col justify-between rounded-[24px] border border-dashed border-slate-300 bg-[#EDE9D0]/50 p-6 text-sm leading-7 text-slate-600"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Placeholder</p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-900">{slot.fileName}</p>
                    </div>
                    <p>Add this image at <span className="font-semibold text-slate-900">public/operations/detail/{slot.fileName}</span> to display it on this page.</p>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <div className="lg:sticky lg:top-32">
          <div
            className="aspect-[4/3] w-full rounded-[32px] border border-slate-200 bg-slate-100 bg-cover bg-center shadow-[0_30px_80px_rgba(58,0,30,0.08)]"
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
          />
        </div>
      </section>
    </main>
  )
}
