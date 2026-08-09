"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import SectionHeading from "@/components/ui/SectionHeading"
import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

const GLOW_COLOR = '18, 174, 208'
const PARTICLE_COUNT = 12
const SPOTLIGHT_RADIUS = 550
const MOBILE_BREAKPOINT = 768

function createParticle(x: number, y: number): HTMLDivElement {
  const el = document.createElement('div')
  el.style.cssText = `
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(${GLOW_COLOR}, 1);
    box-shadow: 0 0 6px rgba(${GLOW_COLOR}, 0.6);
    pointer-events: none; z-index: 100;
    left: ${x}px; top: ${y}px;
  `
  return el
}

function ParticleCard({
  children, className, style
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isHovered = useRef(false)
  const memoized = useRef<HTMLDivElement[]>([])
  const initialized = useRef(false)

  const initParticles = useCallback(() => {
    if (initialized.current || !cardRef.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    memoized.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(Math.random() * width, Math.random() * height)
    )
    initialized.current = true
  }, [])

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    particlesRef.current.forEach(p => {
      gsap.to(p, {
        scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
        onComplete: () => p.parentNode?.removeChild(p)
      })
    })
    particlesRef.current = []
  }, [])

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHovered.current) return
    if (!initialized.current) initParticles()
    memoized.current.forEach((p, i) => {
      const id = setTimeout(() => {
        if (!isHovered.current || !cardRef.current) return
        const clone = p.cloneNode(true) as HTMLDivElement
        cardRef.current!.appendChild(clone)
        particlesRef.current.push(clone)
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true
        })
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true })
      }, i * 100)
      timeoutsRef.current.push(id)
    })
  }, [initParticles])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const onEnter = () => { isHovered.current = true; animateParticles() }
    const onLeave = () => { isHovered.current = false; clearParticles() }
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      isHovered.current = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      clearParticles()
    }
  }, [animateParticles, clearParticles])

  return (
    <div ref={cardRef} className={`${className} relative overflow-hidden`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  )
}

function GlobalSpotlight({ gridRef }: { gridRef: React.RefObject<HTMLDivElement | null> }) {
  const spotlightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const spot = document.createElement('div')
    spot.style.cssText = `
      position: fixed; width: 800px; height: 800px; border-radius: 50%;
      pointer-events: none; z-index: 200; opacity: 0;
      transform: translate(-50%, -50%); mix-blend-mode: screen;
      background: radial-gradient(circle,
        rgba(${GLOW_COLOR}, 0.15) 0%, rgba(${GLOW_COLOR}, 0.08) 15%,
        rgba(${GLOW_COLOR}, 0.04) 25%, rgba(${GLOW_COLOR}, 0.02) 40%,
        rgba(${GLOW_COLOR}, 0.01) 65%, transparent 70%)
    `
    document.body.appendChild(spot)
    spotlightRef.current = spot

    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const section = gridRef.current.closest('.bento-section')
      const rect = section?.getBoundingClientRect()
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      const cards = gridRef.current.querySelectorAll('.card')
      if (!inside) {
        gsap.to(spot, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        cards.forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'))
        return
      }

      cards.forEach(c => {
        const ce = c as HTMLElement
        const cr = ce.getBoundingClientRect()
        const cx = cr.left + cr.width / 2, cy = cr.top + cr.height / 2
        const d = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2)
        const prox = SPOTLIGHT_RADIUS * 0.5, fade = SPOTLIGHT_RADIUS * 0.75
        let g = 0
        if (d <= prox) g = 1
        else if (d <= fade) g = (fade - d) / (fade - prox)
        const rx = ((e.clientX - cr.left) / cr.width) * 100
        const ry = ((e.clientY - cr.top) / cr.height) * 100
        ce.style.setProperty('--glow-x', `${rx}%`)
        ce.style.setProperty('--glow-y', `${ry}%`)
        ce.style.setProperty('--glow-intensity', g.toString())
        ce.style.setProperty('--glow-radius', `${SPOTLIGHT_RADIUS}px`)
      })

      gsap.to(spot, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(spot, { opacity: 0.8, duration: 0.2, ease: 'power2.out' })
    }

    const onLeave = () => {
      gridRef.current?.querySelectorAll('.card').forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'))
      gsap.to(spot, { opacity: 0, duration: 0.3, ease: 'power2.out' })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
    }
  }, [gridRef])

  return null
}

export default function Experience() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useLanguage()
  const cards = t.experience.cards

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      <style>{`
        .bento-section {
          --glow-x: 50%; --glow-y: 50%; --glow-intensity: 0;
          --glow-radius: 200px; --glow-color: ${GLOW_COLOR};
          --border-color: #D9EAF7; --background-dark: #FFFFFF; --white: hsl(0,0%,100%);
        }
        .card--border-glow::after {
          content: ''; position: absolute; inset: 0; padding: 6px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%,
            rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.4)) 30%, transparent 60%);
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude; pointer-events: none; opacity: 1; transition: opacity .3s; z-index: 1;
        }
        .particle::before {
          content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: rgba(${GLOW_COLOR}, 0.2); border-radius: 50%; z-index: -1;
        }
        .text-clamp-1 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; overflow: hidden; text-overflow: ellipsis; }
        .text-clamp-2 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; overflow: hidden; text-overflow: ellipsis; }
      `}</style>

      <section id="experience" className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl font-poppins">
          <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

          <GlobalSpotlight gridRef={gridRef} />

          <div ref={gridRef} className="bento-section flex justify-center w-full" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}>
            <div className="relative w-full max-w-[900px]">

              {/* Timeline vertical line */}
              <div className="absolute left-[24px] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#12AED0] to-transparent pointer-events-none z-0 sm:left-[34px]" />

              <RevealGroup className="space-y-6">
                {cards.map((card, index) => {
                  const baseClassName = `card flex flex-col justify-between relative min-h-[220px] w-full sm:min-h-[250px] p-6 sm:p-10 rounded-[22px] border border-solid font-light overflow-hidden transition-colors duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] card--border-glow`

                  const cardStyle: React.CSSProperties = {
                    backgroundColor: '#FFFFFF',
                    borderColor: '#D9EAF7',
                    color: '#0B1B3F',
                    '--glow-x': '50%',
                    '--glow-y': '50%',
                    '--glow-intensity': '0',
                    '--glow-radius': '200px'
                  }

                  return (
                    <RevealItem key={index}>
                      <div className="relative ml-[52px] sm:ml-[68px]">
                        {/* Connector line */}
                        <div className="absolute left-[-28px] top-1/2 h-px w-[28px] -translate-y-1/2 bg-gradient-to-r from-[#12AED0]/60 to-transparent z-10 sm:left-[-34px] sm:w-[34px]" />

                        {/* Timeline dot */}
                        <div className="absolute left-[-34px] top-1/2 -translate-y-1/2 z-10 sm:left-[-40px]">
                          <div className="h-3 w-3 rounded-full border-2 border-[#12AED0] bg-white shadow-[0_0_8px_rgba(18,174,208,0.5)]" />
                        </div>

                        <ParticleCard className={baseClassName} style={cardStyle}>
                          <h3 className="text-xl font-semibold text-[#0B1B3F] mb-2">{card.title}</h3>
                          <p className="text-sm font-medium text-[#12AED0] mb-2">{card.subtitle}</p>
                          <span className="block text-xs font-medium uppercase tracking-widest text-[#12AED0]/60 mb-4">{card.period}</span>
                          <p className="text-sm leading-[1.5] text-slate-600">{card.description}</p>
                        </ParticleCard>
                      </div>
                    </RevealItem>
                  )
                })}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
