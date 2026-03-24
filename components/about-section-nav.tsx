import Link from "next/link"

import { aboutNavigationItems } from "@/lib/about-data"

type AboutSectionNavProps = {
  currentHref?: string
}

export function AboutSectionNav({ currentHref }: AboutSectionNavProps) {
  return (
    <nav aria-label="About section navigation" className="flex h-full flex-col justify-center">
      <div className="border-y border-white/10">
        {aboutNavigationItems
          .filter((item) => item.slug !== "who-we-are")
          .map((item) => {
            const isActive = item.href === currentHref

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 border-b border-white/10 px-1 py-5 text-left transition-colors duration-200 last:border-b-0 hover:text-white"
              >
                <span className="flex items-center gap-4">
                  <span aria-hidden="true" className="text-2xl">
                    {item.emoji}
                  </span>
                  <span className={isActive ? "text-white" : "text-zinc-300"}>{item.title}</span>
                </span>
                <span className={isActive ? "text-zinc-300" : "text-zinc-600"} aria-hidden="true">
                  /
                </span>
              </Link>
            )
          })}
      </div>
    </nav>
  )
}
