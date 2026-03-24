"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { aboutNavigationItems, aboutTeamMembers } from "@/lib/about-data"
import { offshoreOperations, onshoreOperations, operationsPreviewSections } from "@/lib/site-data"

type BreadcrumbItem = {
  href?: string
  label: string
}

const categoryLabels = Object.fromEntries(
  operationsPreviewSections.map((section) => [section.slug, section.title]),
)

const assetLabels = Object.fromEntries(
  [...onshoreOperations, ...offshoreOperations].map((asset) => [asset.slug, asset.title]),
)

const aboutSectionLabels = Object.fromEntries(
  aboutNavigationItems
    .filter((item) => item.slug !== "who-we-are")
    .map((item) => [item.slug, item.title]),
)

const aboutTeamLabels = Object.fromEntries(aboutTeamMembers.map((member) => [member.slug, member.name]))

function getOperationsBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)

  if (segments[0] !== "operations") {
    return []
  }

  const items: BreadcrumbItem[] = [{ label: "Operations" }]

  if (segments.length === 1) {
    return items
  }

  items[0].href = "/operations"

  const category = segments[1]
  const categoryLabel = categoryLabels[category]

  if (!categoryLabel) {
    return items
  }

  items.push({
    href: segments.length > 2 ? `/operations/${category}` : undefined,
    label: categoryLabel,
  })

  if (segments.length > 2) {
    items.push({ label: assetLabels[segments[2]] ?? segments[2] })
  }

  return items
}

function getAboutBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)

  if (segments[0] !== "about") {
    return []
  }

  const items: BreadcrumbItem[] = [{ label: "About" }]

  if (segments.length === 1) {
    return items
  }

  items[0].href = "/about"

  const section = segments[1]

  if (section === "team") {
    items.push({
      href: segments.length > 2 ? "/about/team" : undefined,
      label: "Our Team",
    })

    if (segments.length > 2) {
      items.push({ label: aboutTeamLabels[segments[2]] ?? segments[2] })
    }

    return items
  }

  const sectionLabel = aboutSectionLabels[section]

  if (!sectionLabel) {
    return items
  }

  items.push({ label: sectionLabel })

  return items
}

export function OperationsBreadcrumb() {
  const pathname = usePathname()
  const items = getOperationsBreadcrumbs(pathname).length
    ? getOperationsBreadcrumbs(pathname)
    : getAboutBreadcrumbs(pathname)

  if (items.length === 0) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.24em] text-zinc-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors duration-200 hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-zinc-300" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
