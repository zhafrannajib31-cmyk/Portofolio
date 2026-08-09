"use client"

import SectionHeading from "@/components/ui/SectionHeading"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl font-poppins font-light">
        <SectionHeading
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal y={40} className="md:col-span-2">
            <div className="group h-full min-h-72 overflow-hidden rounded-2xl bg-muted md:min-h-0">
              <img
                src="/MC.jpg"
                alt="Foto Zhafran"
                className="h-[400px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <RevealGroup className="space-y-4 md:col-span-3">
            {t.about.paragraphs.map((paragraph, i) => (
              <RevealItem key={i}>
                <p className="text-base leading-relaxed text-justify text-muted-foreground">
                  {paragraph}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}