import { company } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#EDE9D0]/80 backdrop-blur">
      <div className="flex w-full px-6 py-10 text-sm text-slate-500 md:px-12">
        <p className="font-medium text-slate-900">{company.footerText}</p>
      </div>
    </footer>
  )
}
