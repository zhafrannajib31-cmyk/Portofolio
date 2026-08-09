"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { useLanguage } from "@/i18n"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("#hero")
  const reduce = useReducedMotion()

  const NAV_ITEMS = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects", "skills", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector<HTMLElement>(href)
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80, duration: 1.5 })
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.header
      initial={reduce ? false : { y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200/40 bg-white/95 backdrop-blur-sm shadow-sm md:bg-white/60 md:backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero") }}
          className="block"
        >
          <span className="text-lg sm:text-xl font-poppins font-bold text-[#12AED0]">
            {t.nav.brand}
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
                  className="relative py-1 text-sm font-poppins font-medium text-[#0B1B3F] transition-colors hover:text-[#12AED0]"
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#12AED0] transition-transform duration-300 ${active === item.href ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <button onClick={() => setOpen(!open)} className="flex items-center text-[#0B1B3F] md:hidden" aria-label="Toggle menu">
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="space-y-1 px-4 pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition ${active === item.href ? "bg-slate-100 text-[#12AED0]" : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}