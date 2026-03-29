"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { aboutTeamLookup } from "@/lib/about-data"
import { operationsAssets } from "@/lib/site-data"

type BreadcrumbItem = {
  href?: string
  label: string
}

const assetLabelLookup = Object.fromEntries(operationsAssets.map((asset) => [asset.slug, asset.title]))

function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) {
    return []
  }

  if (segments[0] === "about") {
    const items: BreadcrumbItem[] = [{ href: "/about", label: "About" }]

    if (segments[1] === "team" && segments[2]) {
      items.push({ href: "/about#our-team", label: "Our Team" })
      items.push({ label: aboutTeamLookup[segments[2]]?.name ?? segments[2] })
    }

    return items
  }

  if (segments[0] === "operations") {
    const items: BreadcrumbItem[] = [{ href: "/operations", label: "Operations" }]

    if (segments[1]) {
      const category = segments[1] === "onshore" ? "Onshore Assets" : "Offshore Assets"
      items.push({ href: `/operations#${segments[1]}-assets`, label: category })
    }

    if (segments[2]) {
      items.push({ label: assetLabelLookup[segments[2]] ?? segments[2] })
    }

    return items
  }

  if (segments[0] === "csr") {
    return [{ label: "Corporate Social Responsibility" }]
  }

  if (segments[0] === "news") {
    return [{ label: "News" }]
  }

  if (segments[0] === "contact") {
    return [{ label: "Contact" }]
  }

  return []
}

export function OperationsBreadcrumb() {
  const pathname = usePathname()
  const items = getBreadcrumbs(pathname)

  if (items.length === 0) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-slate-900">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-slate-800" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
