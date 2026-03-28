"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type SectionSubnavItem = {
  href: string
  label: string
}

type SectionSubnavProps = {
  items: SectionSubnavItem[]
  topClassName?: string
}

export function SectionSubnav({ items, topClassName }: SectionSubnavProps) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "sticky z-30 border-y border-slate-200/80 bg-white/80 backdrop-blur-xl",
        "top-[76px]",
        topClassName,
      )}
    >
      <div className="overflow-x-auto px-6 md:px-12">
        <div className="flex min-w-max items-center gap-3 py-3">
          {items.map((item) => {
            const isPageLink = item.href.startsWith("/")
            const isActive = isPageLink ? pathname === item.href : false

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
