"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import OrbitImages from "@/components/OrbitImages"
import FloatingParticles from "@/components/FloatingParticles"
import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

const orbitImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
]

export default function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    setIsMobile(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start px-4 pt-20 pb-20 overflow-hidden"
    >
      <FloatingParticles />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F0F7FF] z-[5] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-10 pl-6 pr-6 sm:pl-16 lg:flex-row lg:max-w-none lg:items-center lg:justify-between lg:gap-12 lg:pl-40">
        <RevealGroup className="flex-1 max-w-xl">
          <RevealItem>
            <h1 className="text-4xl font-poppins font-bold tracking-normal text-[#0b1b3f] sm:text-5xl">
              {t.hero.name}
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-xl font-poppins text-[#12AED0] font-semibold">
              {t.hero.role}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 text-base font-poppins font-light text-slate-600 leading-relaxed">
              {t.hero.tagline}
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex flex-col items-stretch gap-3 font-poppins sm:flex-row sm:items-center sm:justify-start sm:gap-5">
            <button
              type="button"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="rounded-[20px] bg-[#12AED0] px-6 py-3.5 text-sm font-poppins font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#12AED0]/80 sm:w-auto"
            >
              {t.hero.viewProjects}
            </button>

            <div
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="cursor-pointer"
            >
              <button
                type="button"
                className="w-full rounded-[20px] border border-[rgba(18,174,208,0.5)] bg-white/70 px-6 py-3.5 text-sm font-poppins font-medium text-[#0B1B3F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
              >
                {t.hero.contactMe}
              </button>
            </div>

            <a
              href="/CV%20ZHAFRAN.pdf"
              download
              className="w-full rounded-[20px] border border-[#12AED0] px-6 py-3.5 text-sm font-poppins font-medium text-[#0B1B3F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:w-auto"
            >
              {t.hero.downloadCv}
            </a>
            </div>
          </RevealItem>
        </RevealGroup>

        <div
        aria-hidden
        className="pointer-events-none relative w-full max-w-[19rem] sm:max-w-[24rem] lg:absolute lg:right-40 lg:top-1/2 lg:z-[1] lg:-translate-y-1/2 lg:w-[24rem] lg:max-w-none xl:right-44 xl:w-[30rem]"
      >
        <motion.div
          animate={reduce || isMobile ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <OrbitImages
          images={orbitImages}
          altPrefix={t.hero.orbitAltPrefix}
          shape="ellipse"
          radiusX={560}
          radiusY={460}
          radius={160}
          rotation={-8}
          itemSize={100}
          duration={30}
          direction="normal"
          fill
          showPath
          pathColor="rgba(11, 27, 63, 0.45)"
          pathWidth={2}
          responsive
          paused={isMobile}
          centerContent={
            <div className="h-[42vh] w-40 sm:h-[48vh] sm:w-48 lg:h-[62vh] lg:w-56 xl:w-64">
              <img
                src="/Foto%20Formal%20Zhafran.png"
                alt="Foto Zhafran"
                draggable={false}
                className="h-full w-full object-cover object-top"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 130% 115% at 50% 28%, black 55%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 130% 115% at 50% 28%, black 55%, transparent 100%)",
                }}
              />
            </div>
          }
          />
        </motion.div>
      </div>
      </div>
    </section>
  )
}
