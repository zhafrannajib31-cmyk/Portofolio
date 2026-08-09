export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  tag: string;
  tagColor: "cyan" | "purple" | "amber" | "green" | "blue";
  featured?: boolean;
  image: string;
  caseStudy: string;
  liveUrl?: string;
  repoUrl?: string;
  role?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  results?: string;
};

export const projects: Project[] = [
  {
    id: "santcaka",
    title: "SANTCAKA Management Systems",
    description:
      "SANTCAKA Management System adalah platform manajemen organisasi berbasis web yang mengintegrasikan pengelolaan anggota, kegiatan, timeline, pengumuman, arsip, logistik, artikel, dan open recruitment dalam satu sistem yang modern dan responsif.",
    tech: ["Laravel", "Tailwind CSS", "Mysql", "Javascript"],
    tag: "LARAVEL",
    tagColor: "purple",
    featured: true,
    image: "from-purple-600 to-blue-600",
    caseStudy: `
      Lorem ipsum dolor sit amet, occaecat aliqua fugiat elit elit aliquip sunt. Officia do in eu cupidatat et et in proident. Magna in et sunt velit irure exercitation aute nisi voluptate esse deserunt.

      Ullamco do officia tempor et magna aliquip est culpa nulla voluptate qui. Irure commodo minim culpa dolore elit excepteur tempor pariatur anim fugiat. Commodo cupidatat labore eu tempor cillum voluptate est ut ea laborum mollit mollit. Exercitation elit tempor irure voluptate eu aliquip eu officia. Anim eu adipiscing in officia non tempor occaecat minim dolor enim. In exercitation laborum nulla in nostrud in velit ut laborum consequat laboris irure.

      Qui enim fugiat dolor tempor in velit dolor mollit. Ullamco voluptate nulla consequat tempor ut cupidatat dolor deserunt. Incididunt quis laborum cupidatat pariatur nulla ut ad duis qui in non tempor. Commodo aute sed est ad laboris id irure irure occaecat est. Nostrud in eu dolore ex officia elit proident ad do ut. Velit fugiat magna ad ea sint do mollit.

      Velit est do eiusmod culpa laboris excepteur pariatur cillum exercitation excepteur officia. Deserunt fugiat fugiat consectetur in enim ea laborum in eu. Duis deserunt dolore ad labore dolore dolore ea veniam veniam eiusmod. Irure proident et cillum dolore ex est nisi aute reprehenderit sed reprehenderit tempor. Dolore in enim et aliquip consequat dolore aute in et. Ut incididunt occaecat deserunt in veniam nulla officia eiusmod consequat aliquip ad.

      Aliqua laborum dolore cillum esse sunt cillum mollit ut. Ut anim mollit pariatur reprehenderit consectetur mollit et. Commodo ea consectetur dolor minim adipiscing sed non commodo. Velit et anim nisi nulla sed adipiscing et duis ut duis ut fugiat. Qui ullamco ex nulla est non dolore eiusmod consectetur irure.

      Esse ad nulla do ut deserunt culpa ullamco id velit enim excepteur. Tempor qui cillum laboris elit labore fugiat laborum quis elit. Incididunt cillum eiusmod proident mollit sunt ut sint laborum proident nisi. Sint anim culpa consequat esse ullamco nulla non eu ex. Ea do sed excepteur in aute cillum sunt. Eu ut sint ut dolore tempor sunt sint elit laborum dolore pariatur.

      Dolor fugiat commodo in est occaecat eu in qui nisi anim ut veniam. Cupidatat deserunt aliquip tempor ut reprehenderit minim duis. Nostrud consequat labore adipiscing cillum elit esse sed exercitation commodo anim sed. Proident quis sed nulla ea in non dolor enim nisi nostrud exercitation. Ut ullamco sed irure eu incididunt mollit dolor duis velit nulla aliqua. Tempor velit ut nisi commodo tempor nostrud dolor consequat reprehenderit.

      Dolore duis nostrud minim incididunt velit aliqua laboris elit fugiat enim tempor. Pariatur ad et est aliquip dolore eiusmod magna magna aliqua consequat laborum veniam. Esse deserunt nulla do ex commodo dolore magna ad. Proident ad ut tempor nulla ut elit in. Eu officia dolore aute duis eiusmod sint occaecat ullamco.

      Dolore eiusmod et pariatur laboris incididunt consequat aliqua do excepteur tempor. Consequat voluptate et eu non eu nisi ut. Minim mollit minim labore minim eu nostrud ut ad. Do irure dolore in commodo in reprehenderit sed occaecat exercitation et dolor.

      Ut nostrud pariatur ut incididunt nisi laborum deserunt ex. Voluptate deserunt culpa irure qui sed laboris dolore tempor incididunt in occaecat aliquip. In quis laboris qui sint magna esse velit nisi. Adipiscing quis excepteur cupidatat consequat aute adipiscing nisi aliqua nostrud enim incididunt.
    `.trim(),
    role: "Software Developer",
    problem:
      "Pengelolaan data anggota, kegiatan, dan pengumuman organisasi sebelumnya dilakukan secara manual (spreadsheet dan chat) sehingga rawan data ganda, timeline tidak terpusat, dan informasi mudah hilang.",
    solution:
      "Membangun platform web terpusat yang mengintegrasikan manajemen anggota, kegiatan, timeline, pengumuman, arsip, logistik, artikel, dan open recruitment dalam satu sistem yang modern dan responsif.",
    features: [
      "Manajemen anggota dengan profil dan status",
      "Jadwal dan timeline kegiatan organisasi",
      "Pengumuman dan arsip dokumen terpusat",
      "Modul logistik dan open recruitment",
      "Dashboard admin yang intuitif dan responsif",
    ],
    results:
      "Mempermudah pengurus dalam mengelola data secara real-time, menyatukan seluruh informasi organisasi, dan menekan risiko kehilangan data.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/project",
  },

  {
    id: "tuntas-ai",
    title: "Tuntas AI",
    description:
      "Deskripsi singkat tentang project kedua Anda. Bisa berupa aplikasi web, mobile, atau open-source library.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    tag: "AI",
    tagColor: "green",
    image: "from-green-500 to-teal-600",
    caseStudy: `
      Tuntas AI adalah platform berbasis kecerdasan buatan yang dirancang untuk membantu menyelesaikan tugas-tugas kompleks secara otomatis.

      Fitur utama:
      - Integrasi dengan berbagai model AI untuk klasifikasi dan analisis data
      - Dashboard real-time dengan visualisasi interaktif
      - API endpoint yang siap diintegrasikan dengan aplikasi lain
      - Sistem autentikasi multi-level

      Proyek ini dibangun menggunakan Next.js untuk frontend yang cepat dan responsif, PostgreSQL untuk penyimpanan data yang andal, serta Prisma sebagai ORM untuk memudahkan pengelolaan database.
    `.trim(),
    role: "Fullstack Developer",
    problem:
      "Banyak tugas yang bersifat berulang dan memakan waktu, seperti klasifikasi dokumen dan analisis data, masih dikerjakan manual sehingga lambat dan rawan kesalahan.",
    solution:
      "Membuat platform AI yang mengotomatisasi tugas-tugas kompleks dengan integrasi berbagai model, dashboard visual real-time, dan API yang mudah diintegrasikan.",
    features: [
      "Integrasi berbagai model AI untuk klasifikasi dan analisis data",
      "Dashboard real-time dengan visualisasi interaktif",
      "API endpoint siap diintegrasikan dengan aplikasi lain",
      "Sistem autentikasi multi-level",
    ],
    results:
      "Mengurangi waktu pengerjaan tugas hingga puluhan kali lipat dan menyediakan insight visual yang mudah dibaca secara real-time.",
    liveUrl: "https://example.com",
  },

  {
    id: "project-ketiga",
    title: "Project Ketiga",
    description:
      "Deskripsi singkat tentang project ketiga Anda. Tambahkan project sebanyak yang Anda mau ke array ini.",
    tech: ["Python", "FastAPI", "Docker"],
    tag: "API",
    tagColor: "amber",
    image: "from-amber-500 to-orange-600",
    caseStudy: `
      Project Ketiga adalah layanan REST API yang dibangun untuk menangani kebutuhan backend dengan performa tinggi.

      Fitur utama:
      - Arsitektur microservice dengan FastAPI
      - Dokumentasi API otomatis menggunakan Swagger/OpenAPI
      - Containerized deployment dengan Docker
      - Rate limiting dan autentikasi JWT
- Caching dengan Redis untuk optimasi respons

      Dengan pendekatan asynchronous Python, API ini mampu menangani ribuan request per detik dengan latensi rendah.
    `.trim(),
    role: "Backend Developer",
    problem:
      "Aplikasi klien membutuhkan backend yang cepat, scalable, dan mudah dideploy namun infrastruktur monolitik sebelumnya sulit dikembangkan dan lambat.",
    solution:
      "Merancang layanan REST API asynchronous dengan arsitektur microservice, dokumentasi otomatis, serta deployment berbasis container.",
    features: [
      "Arsitektur microservice dengan FastAPI",
      "Dokumentasi API otomatis menggunakan Swagger/OpenAPI",
      "Containerized deployment dengan Docker",
      "Rate limiting dan autentikasi JWT",
      "Caching dengan Redis untuk optimasi respons",
    ],
    results:
      "API mampu menangani ribuan request per detik dengan latensi rendah dan mempercepat siklus pengembangan tim.",
    repoUrl: "https://github.com/username/project",
  },
];
