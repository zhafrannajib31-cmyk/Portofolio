"use client"

import { useEffect } from "react"
import type { ReactNode } from "react"
import type { Project } from "@/data/projects"
import { useLanguage } from "@/i18n"

type Props = {
  project: Project
  onClose: () => void
}

function CaseSection({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold tracking-wide text-[#0B1B3F]">
        {label}
      </h3>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  )
}

export default function CaseStudyModal({ project, onClose }: Props) {
  const { t } = useLanguage()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)

    window.__lenis?.stop()

    return () => {
      document.removeEventListener("keydown", handler)
      window.__lenis?.start()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Scrollable container */}
      <div className="flex h-full items-center justify-center p-4">
        <div
          className="relative flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white font-inter shadow-2xl animate-[fade-up_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - top right corner of the card */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 shadow-sm transition-colors hover:bg-white hover:text-slate-900"
          >
            ✕
          </button>

          {/* Banner */}
          <div className={`h-64 w-full shrink-0 rounded-t-2xl bg-gradient-to-br ${project.image}`} />

          {/* Content */}
          <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-6 sm:p-8" data-lenis-prevent>
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-[#0B1B3F]/20 bg-[#0B1B3F]/[0.04] px-3 py-1 text-xs font-semibold text-[#0B1B3F] backdrop-blur-md">
              {project.tag}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-extrabold text-[#0B1B3F] sm:text-4xl">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>

            {/* Case study body */}
            <div className="space-y-10">
              {project.role && (
                <CaseSection label={t.projects.modal.role}>
                  <p>{project.role}</p>
                </CaseSection>
              )}

              {project.problem && (
                <CaseSection label={t.projects.modal.problem}>
                  <p>{project.problem}</p>
                </CaseSection>
              )}

              {project.solution && (
                <CaseSection label={t.projects.modal.solution}>
                  <p>{project.solution}</p>
                </CaseSection>
              )}

              {project.features && project.features.length > 0 && (
                <CaseSection label={t.projects.modal.features}>
                  <ul className="list-disc space-y-1.5 pl-5 text-slate-600">
                    {project.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </CaseSection>
              )}

              {project.tech.length > 0 && (
                <CaseSection label={t.projects.modal.technology}>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CaseSection>
              )}

              {project.results && (
                <CaseSection label={t.projects.modal.results}>
                  <p>{project.results}</p>
                </CaseSection>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0B1B3F] hover:text-cyan-500"
                >
                  {`${t.projects.liveDemo} \u2192`}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
