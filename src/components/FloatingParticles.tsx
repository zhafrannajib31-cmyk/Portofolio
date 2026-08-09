"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "motion/react"

type Particle = {
  left: string
  top: string
  size: number
  duration: number
  delay: number
  drift: number
}

export default function FloatingParticles({ count = 14 }: { count?: number }) {
  const reduce = useReducedMotion()

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 37 + 11) % 92}%`,
        top: `${(i * 13 + 8) % 85}%`,
        size: 3 + ((i * 5) % 4),
        duration: 7 + ((i * 3) % 8),
        delay: (i % 6) * 0.9,
        drift: 14 + ((i * 7) % 18),
      })),
    [count]
  )

  if (reduce) {
    return null
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#12AED0]/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(18, 174, 208, 0.5)",
          }}
          animate={{
            y: [0, -p.drift, 0],
            x: [0, p.drift / 2, 0],
            opacity: [0.1, 0.55, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}