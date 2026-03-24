import Link from "next/link"

type MobileSectionNavItem = {
  href: string
  label: string
}

type MobileSectionNavProps = {
  activeHref?: string
  items: MobileSectionNavItem[]
}

export function MobileSectionNav({ activeHref, items }: MobileSectionNavProps) {
  return (
    <nav aria-label="Section navigation" className="lg:hidden">
      <div className="overflow-x-auto px-6 md:px-12">
        <div className="flex min-w-max items-center gap-6 whitespace-nowrap border-b border-white/10 pb-3">
          {items.map((item) => {
            const isActive = item.href === activeHref

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-2 text-sm uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-white text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
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
