import { notFound } from "next/navigation"

import { OperationAssetDetail } from "@/components/operation-asset-detail"
import { onshoreOperations } from "@/lib/site-data"

export function generateStaticParams() {
  return onshoreOperations.map((asset) => ({ asset: asset.slug }))
}

export default async function OnshoreAssetPage({
  params,
}: {
  params: Promise<{ asset: string }>
}) {
  const { asset } = await params
  const entry = onshoreOperations.find((item) => item.slug === asset)

  if (!entry) {
    notFound()
  }

  return <OperationAssetDetail title={entry.title} paragraphs={entry.paragraphs} imageSrc={entry.imageSrc} />
}
