import { company } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="flex w-full flex-col gap-4 px-6 py-10 text-sm text-zinc-500 md:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-zinc-200">{company.legal}</p>
          <p>{company.office.headquarters}</p>
        </div>
        <div className="text-zinc-400">
          <p>{company.office.phone}</p>
        </div>
      </div>
    </footer>
  )
}
