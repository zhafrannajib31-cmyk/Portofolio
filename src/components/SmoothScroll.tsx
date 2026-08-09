"use client"

import Lenis from "lenis"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    __lenis: Lenis
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
    })

    window.__lenis = lenis

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      const header = document.querySelector("header.fixed")
      if (header) {
        if (scroll > 20) {
          header.classList.add("h-16")
          header.classList.remove("h-20")
        } else {
          header.classList.remove("h-16")
          header.classList.add("h-20")
        }
      }
    })

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e: Event) => {
        const href = (anchor as HTMLAnchorElement).getAttribute("href")
        if (href === "#" || !href) return
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          lenis.scrollTo(target, { offset: -80, duration: 1.5 })
        }
      })
    })

    return () => {
      lenis.destroy()
      initialized.current = false
    }
  }, [])

  return (
    <>
      <style>{`
        html.lenis, html.lenis body { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto !important; }
        .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
        .lenis.lenis-stopped { overflow: hidden; }
        .lenis.lenis-smooth iframe { pointer-events: none; }
      `}</style>
      {children}
    </>
  )
}
