"use client"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"

type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <RevealGroup className="mb-12 text-center">
      <RevealItem>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </RevealItem>
      {subtitle && (
        <RevealItem>
          <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
        </RevealItem>
      )}
    </RevealGroup>
  )
}