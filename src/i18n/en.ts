import type { Dictionary } from "./id"

const en: Dictionary = {
  nav: {
    brand: "Portfolio",
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    name: "Zhafrannajib Dzahabi Sya'ban",
    role: "Project Manager",
    tagline:
      "Information Systems student passionate about technology, software development, user interfaces, continuous innovation, and project management — building digital experiences that make an impact.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    downloadCv: "Download CV",
    orbitAltPrefix: "Skill logo",
  },
  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    paragraphs: [
      "Hello! I am an Information Systems student deeply passionate about technology, software development, and project management. I also enjoy building innovative digital solutions and exploring new ways to solve problems through code and system design.",
      "I believe effective technology requires more than just technical skills — it requires strategic planning and seamless integration with business goals. I am always excited to learn and contribute to impactful projects. Outside of studies, I collaborate with others and keep up with the latest industry trends to keep growing as an impactful technology professional.",
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "My career journey",
    cards: [
      {
        title: "Operations Commander",
        subtitle: "Santcaka XI Education & Basic Training",
        period: "December 2025",
        description:
          "Led the entire organizing committee of the Santcaka XI Education & Basic Training event. Coordinated the event, PDD (publication and documentation), discipline, public relations, and Longmarch Commander divisions. Responsible for on-field strategic decisions, budget management, and relationships with partner institutions. Ensured the smooth execution of the full event series from student registration to the Basic Training.",
      },
      {
        title: "Events Division (MC)",
        subtitle:
          "WISE (Widyatama Information System Event) INNOVERA 2026 - National UI/UX Competition",
        period: "October 2025 - February 2026",
        description:
          "Served as the master of ceremony and moderator for a National UI/UX Competition with 80-100 participants, demonstrating public speaking, communication, and strong audience engagement. Collaborated with the organizing committee to ensure smooth event execution and a positive participant experience.",
      },
      {
        title: "Intern Software Developer",
        subtitle: "Nakala Digital",
        period: "June 2026 - Present",
        description:
          "Developed web applications using the Laravel framework and Tailwind CSS to support Nakala Digital client needs, contributed to user interface (UI) optimization based on designer assets to create seamless user experiences, and collaborated with the team in an Agile environment to meet feature development targets on time.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Works I have created",
    viewCaseStudy: "View Case Study",
    liveDemo: "Live Demo",
    entries: {
      santcaka: {
        title: "SANTCAKA Management Systems",
        description:
          "SANTCAKA Management System is a web-based organization management platform that integrates member management, activities, timeline, announcements, archives, logistics, articles, and open recruitment into a single modern, responsive system.",
        role: "Software Developer",
        problem:
          "Organization data for members, activities, and announcements was previously managed manually (spreadsheets and chat), which was prone to duplicate records, scattered timelines, and lost information.",
        solution:
          "Built a centralized web platform integrating member management, activities, timeline, announcements, archives, logistics, articles, and open recruitment into one modern, responsive system.",
        features: [
          "Member management with profiles and status",
          "Organization activity schedule and timeline",
          "Centralized announcements and document archive",
          "Logistics and open recruitment modules",
          "Intuitive and responsive admin dashboard",
        ],
        results:
          "Made it easier for the management to process data in real-time, united all organizational information, and reduced the risk of data loss.",
      },
      "tuntas-ai": {
        title: "Tuntas AI",
        description:
          "Tuntas AI is an artificial intelligence platform designed to help complete complex tasks automatically.",
        role: "Fullstack Developer",
        problem:
          "Many repetitive, time-consuming tasks, such as document classification and data analysis, were still done manually, making them slow and error-prone.",
        solution:
          "Built an AI platform that automates complex tasks with model integrations, a real-time visual dashboard, and APIs that are easy to integrate.",
        features: [
          "Integration with various AI models for classification and data analysis",
          "Real-time dashboard with interactive visualizations",
          "API endpoints ready to integrate with other applications",
          "Multi-level authentication system",
        ],
        results:
          "Cut task completion time by several orders of magnitude and provided real-time, easy-to-read visual insights.",
      },
      "project-ketiga": {
        title: "Third Project",
        description:
          "A short description of your third project. Add as many projects as you want to this array.",
        role: "Backend Developer",
        problem:
          "Client applications needed a fast, scalable, easy-to-deploy backend, but the previous monolithic infrastructure was difficult to develop and slow.",
        solution:
          "Designed an asynchronous REST API service with a microservice architecture, automatic documentation, and container-based deployment.",
        features: [
          "Microservice architecture with FastAPI",
          "Automatic API documentation using Swagger/OpenAPI",
          "Containerized deployment with Docker",
          "Rate limiting and JWT authentication",
          "Redis caching for response optimization",
        ],
        results:
          "The API handles thousands of requests per second with low latency and sped up the team's development cycle.",
      },
    },
    modal: {
      role: "My Role",
      problem: "Problem",
      solution: "Solution",
      features: "Key Features",
      technology: "Technology",
      results: "Results & Impact",
    },
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I master",
  },
  contact: {
    title: "Contact Me",
    subtitle: "Send a message if you are interested in collaborating",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "email@example.com",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    submit: "Send Message",
    successTitle: "Message sent successfully!",
    successText: "Thank you, I will get back to you soon.",
  },
  footer: {
    rights: "All rights reserved.",
  },
  meta: {
    title: "Portfolio | Zhafran",
    description: "Portfolio website - Frontend Developer. See my projects and skills.",
  },
}

export default en