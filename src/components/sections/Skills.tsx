"use client"

import SectionHeading from "@/components/ui/SectionHeading"
import LogoLoop from "@/components/LogoLoop"
import { Reveal } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

export default function Skills() {
  const { t } = useLanguage()
  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS"},
    { node: <svg viewBox="0 0 24 24" fill="#fff" className="h-[var(--logoloop-logoHeight)] w-auto"><path d="M12 1L1 21h22L12 1z"/></svg>, title: "Vercel"},
    { node: <svg viewBox="0 0 24 24" fill="#fff" className="h-[var(--logoloop-logoHeight)] w-auto"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>, title: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", title: "Figma"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", title: "Laravel"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", title: "MySQL"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS"},
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript"},

  ]

  return (
    <section id="skills" className="px-4 py-20 sm:py-28">
      <div className="mx-auto font-poppins max-w-5xl">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <Reveal className="mb-12">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={1}
            scaleOnHover
            ariaLabel="Technology logos"
          />
        </Reveal>
      </div>
    </section>
  )
}
