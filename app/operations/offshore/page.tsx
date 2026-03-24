import { OperationAssetCard } from "@/components/operation-asset-card"
import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import { offshoreOperations } from "@/lib/site-data"

export default function OffshoreOperationsPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="w-full px-6 pb-16 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:overflow-hidden">
        <div className="space-y-3">
          <OperationsBreadcrumb />
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
            Offshore Assets
          </h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offshoreOperations.map((asset) => (
            <OperationAssetCard
              key={asset.slug}
              href={`/operations/offshore/${asset.slug}`}
              title={asset.title}
              imageSrc={asset.imageSrc}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
