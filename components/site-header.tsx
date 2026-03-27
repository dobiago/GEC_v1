"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { company, navigation } from "@/lib/site-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
        setMobileDropdownOpen(null)
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/88 shadow-[0_20px_60px_rgba(39,66,94,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="flex h-[76px] w-full items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center leading-none">
          <Image
            src="/gec-logo.png"
            alt={company.name}
            width={220}
            height={64}
            priority
            className="h-auto w-[150px] sm:w-[180px] lg:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm tracking-[0.06em] text-slate-600 transition hover:text-slate-950"
                >
                  {item.label}
                  <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
                </Link>
                <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="min-w-[260px] rounded-3xl border border-slate-200 bg-white/95 p-2 shadow-[0_20px_60px_rgba(39,66,94,0.14)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-2xl px-4 py-3 text-sm tracking-[0.03em] text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-[0.06em] text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 transition hover:border-slate-400 hover:text-slate-950 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 shadow-[0_12px_40px_rgba(39,66,94,0.08)] md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.href} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-sm tracking-[0.06em] text-slate-700 transition hover:text-slate-950"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600"
                      onClick={() =>
                        setMobileDropdownOpen((value) => (value === item.href ? null : item.href))
                      }
                    >
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition",
                          mobileDropdownOpen === item.href ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  </div>
                  {mobileDropdownOpen === item.href ? (
                    <div className="ml-3 flex flex-col gap-2 border-l border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm tracking-[0.03em] text-slate-500 transition hover:text-slate-900"
                          onClick={() => {
                            setOpen(false)
                            setMobileDropdownOpen(null)
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-[0.06em] text-slate-700 transition hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
