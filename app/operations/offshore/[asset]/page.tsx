import { notFound } from "next/navigation"

import { OperationAssetDetail } from "@/components/operation-asset-detail"
import { offshoreOperations } from "@/lib/site-data"

export function generateStaticParams() {
  return offshoreOperations.map((asset) => ({ asset: asset.slug }))
}

export default async function OffshoreAssetPage({
  params,
}: {
  params: Promise<{ asset: string }>
}) {
  const { asset } = await params
  const entry = offshoreOperations.find((item) => item.slug === asset)

  if (!entry) {
    notFound()
  }

  return (
    <OperationAssetDetail
      title={entry.title}
      detailParagraphs={entry.detailParagraphs}
      detailMediaSlots={entry.detailMediaSlots}
      imageSrc={entry.imageSrc}
    />
  )
}
