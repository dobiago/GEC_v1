import { company } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/75 backdrop-blur">
      <div className="flex w-full flex-col gap-3 px-6 py-10 text-sm text-slate-500 md:px-12 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-medium text-slate-900">{company.footerText}</p>
        <p>{company.office.email}</p>
      </div>
    </footer>
  )
}
