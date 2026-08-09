export type Experience = {
  period: string
  position: string
  company: string
  description: string
}

export const experiences: Experience[] = [
  {
    period: "2024 - Sekarang",
    position: "Frontend Developer",
    company: "Perusahaan A",
    description:
      "Mengembangkan dan memelihara aplikasi web menggunakan React dan Next.js. Berkolaborasi dengan tim desain untuk menciptakan antarmuka yang responsif dan user-friendly."
  },
  {
    period: "2023 - 2024",
    position: "Junior Web Developer",
    company: "Perusahaan B",
    description:
      "Membangun komponen UI reusable, melakukan integrasi API, dan mengoptimalkan performa website. Berkontribusi dalam code review dan sprint planning."
  },
  {
    period: "2022 - 2023",
    position: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Mengerjakan berbagai proyek klien mulai dari landing page hingga aplikasi web full-stack menggunakan teknologi modern."
  },
  {
    period: "2021 - 2022",
    position: "Intern Web Developer",
    company: "Startup C",
    description:
      "Belajar dan berkontribusi dalam pengembangan fitur-fitur baru. Mendapatkan pengalaman langsung dengan Git, CI/CD, dan deployment."
  }
]
