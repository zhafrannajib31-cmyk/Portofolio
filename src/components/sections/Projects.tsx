"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import SectionHeading from "@/components/ui/SectionHeading"
import ProjectCard from "@/components/ui/ProjectCard"
import CaseStudyModal from "@/components/ui/CaseStudyModal"
import type { Project } from "@/data/projects"
import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useLanguage } from "@/i18n"

export default function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const localizedProjects: Project[] = projects.map((meta) => {
    const text = t.projects.entries[meta.id as keyof typeof t.projects.entries]
    return {
      ...meta,
      title: text?.title ?? meta.title,
      description: text?.description ?? meta.description,
      role: text?.role,
      problem: text?.problem,
      solution: text?.solution,
      features: text?.features,
      results: text?.results,
    }
  })

  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto font-poppins max-w-6xl">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <RevealGroup className="grid gap-6 font-poppins font-light text-sm sm:grid-cols-2 lg:grid-cols-3">
          {localizedProjects.map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard
                project={project}
                onViewCaseStudy={() => setSelectedProject(project)}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
