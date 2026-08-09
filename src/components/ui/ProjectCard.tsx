"use client"

import { useState } from "react"
import type { Project } from "@/data/projects"
import { useLanguage } from "@/i18n"

type Props = {
  project: Project
  onViewCaseStudy?: () => void
}

export default function ProjectCard({ project, onViewCaseStudy }: Props) {
  const { t } = useLanguage()
  const [inside, setInside] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setInside(true) }}
      onMouseLeave={() => { setInside(false) }}
      onClick={() => onViewCaseStudy?.()}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(18,174,208,0.15)]"
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: inside
            ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(18,174,208,0.12) 0%, transparent 60%)`
            : "transparent",
          transition: inside ? "none" : "background 0.4s",
        }}
      />

      {/* Banner placeholder */}
      <div
        className={`h-48 w-full bg-gradient-to-br ${project.image}`}
      />

      {/* Content */}
      <div className="relative z-20 space-y-3 p-5">
        {/* Tag badge */}
        <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-md">
          {project.tag}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#0B1B3F]">{project.title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-1">
          {onViewCaseStudy && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onViewCaseStudy?.()
              }}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              {`${t.projects.viewCaseStudy} \u2192`}
            </button>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              {`${t.projects.liveDemo} \u2192`}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
