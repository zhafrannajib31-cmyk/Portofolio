const id = {
  nav: {
    brand: "Portofolio",
    home: "Beranda",
    about: "Tentang",
    experience: "Pengalaman",
    projects: "Proyek",
    skills: "Skill",
    contact: "Kontak",
  },
  hero: {
    name: "Zhafrannajib Dzahabi Sya'ban",
    role: "Manajer Proyek",
    tagline:
      "Mahasiswa Sistem Informasi yang suka dalam hal teknologi, pengembangan perangkat lunak, antarmuka pengguna, inovasi berkelanjutan, dan manajemen proyek untuk menciptakan pengalaman digital yang berdampak.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    downloadCv: "Unduh CV",
    orbitAltPrefix: "Logo skill",
  },
  about: {
    title: "Tentang Saya",
    subtitle: "Kenali saya lebih dekat",
    paragraphs: [
      "Halo! Saya seorang mahasiswa Sistem Informasi yang penuh semangat dengan ketertarikan mendalam pada teknologi, pengembangan perangkat lunak, dan manajemen proyek. Saya juga menyukai proses membangun solusi digital yang inovatif dan menjelajahi cara-cara baru untuk memecahkan masalah melalui kode dan desain sistem.",
      "Saya percaya bahwa teknologi yang efektif membutuhkan lebih dari sekadar keterampilan teknis, teknologi membutuhkan perencanaan strategis dan integrasi yang mulus dengan tujuan bisnis. Saya selalu bersemangat untuk belajar dan berkontribusi pada proyek-proyek yang berdampak. Di luar studi, saya juga berkolaborasi dengan orang lain, dan terus mengikuti tren industri terbaru untuk terus berkembang sebagai profesional teknologi yang berdampak.",
    ],
  },
  experience: {
    title: "Pengalaman",
    subtitle: "Perjalanan karir saya",
    cards: [
      {
        title: "Komandan Operasi",
        subtitle: "Pendidikan & Latihan Dasar Santcaka XI",
        period: "Desember 2025",
        description:
          "Memimpin seluruh panitia acara Pendidikan & Latihan Dasar Santcaka XI. Mengkoordinasikan divisi acara, PDD, tata tertib, humas, dan Komandan Longmarch. Bertanggung jawab atas pengambilan keputusan strategis di lapangan, pengelolaan anggaran, dan hubungan dengan institusi mitra. Memastikan kelancaran seluruh rangkaian kegiatan dari pendaftaran siswa hingga Pendidikan Dasar.",
      },
      {
        title: "Divisi Acara (MC)",
        subtitle:
          "WISE (Widyatama Information System Event) INNOVERA 2026 - Kompetisi UI/UX Nasional",
        period: "Oktober 2025 - Februari 2026",
        description:
          "Menjadi pembawa acara dan moderator acara Kompetisi UI/UX Nasional dengan jumlah peserta antara 80 - 100 orang. Menunjukkan kemampuan berbicara di depan umum, komunikasi, dan keterlibatan audiens yang kuat. Berkolaborasi dengan panitia penyelenggara untuk memastikan kelancaran pelaksanaan acara dan pengalaman peserta yang positif.",
      },
      {
        title: "Magang Software Developer",
        subtitle: "Nakala Digital",
        period: "Juni 2026 - Sekarang",
        description:
          "Mengembangkan aplikasi berbasis web menggunakan Framework Laravel dan Tailwind CSS untuk mendukung kebutuhan klien Nakala Digital, berkontribusi dalam optimasi antarmuka pengguna (UI) berdasarkan aset dari tim desainer untuk menciptakan pengalaman pengguna yang mulus, dan bekerja sama dengan tim dalam lingkungan Agile untuk mencapai target pengembangan fitur secara tepat waktu.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Karya yang pernah saya buat",
    viewCaseStudy: "Lihat Studi Kasus",
    liveDemo: "Live Demo",
    entries: {
      santcaka: {
        title: "SANTCAKA Management Systems",
        description:
          "SANTCAKA Management System adalah platform manajemen organisasi berbasis web yang mengintegrasikan pengelolaan anggota, kegiatan, timeline, pengumuman, arsip, logistik, artikel, dan open recruitment dalam satu sistem yang modern dan responsif.",
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
      },
      "tuntas-ai": {
        title: "Tuntas AI",
        description:
          "Tuntas AI adalah platform berbasis kecerdasan buatan yang dirancang untuk membantu menyelesaikan tugas-tugas kompleks secara otomatis.",
        role: "Fullstack Developer",
        problem:
          "Banyak tugas yang bersifat berulang dan memakan waktu, seperti klasifikasi dokumen dan analisis data, masih dikerjakan secara manual sehingga lambat dan rawan kesalahan.",
        solution:
          "Membuat platform AI yang mengotomatisasi tugas-tugas kompleks dengan integrasi berbagai model, dashboard visual real-time, dan API yang mudah diintegrasikan.",
        features: [
          "Integrasi dengan berbagai model AI untuk klasifikasi dan analisis data",
          "Dashboard real-time dengan visualisasi interaktif",
          "API endpoint yang siap diintegrasikan dengan aplikasi lain",
          "Sistem autentikasi multi-level",
        ],
        results:
          "Mengurangi waktu pengerjaan tugas hingga puluhan kali lipat dan menyediakan insight visual yang mudah dibaca secara real-time.",
      },
      "project-ketiga": {
        title: "Project Ketiga",
        description:
          "Deskripsi singkat tentang project ketiga Anda. Tambahkan project sebanyak yang Anda mau ke array ini.",
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
      },
    },
    modal: {
      role: "Peran Saya",
      problem: "Masalah",
      solution: "Solusi",
      features: "Fitur Utama",
      technology: "Teknologi",
      results: "Hasil dan Dampak",
    },
  },
  skills: {
    title: "Skills",
    subtitle: "Teknologi yang saya kuasai",
  },
  contact: {
    title: "Hubungi Saya",
    subtitle: "Silakan kirim pesan jika tertarik bekerja sama",
    name: "Nama",
    namePlaceholder: "Nama Anda",
    email: "Email",
    emailPlaceholder: "email@example.com",
    message: "Pesan",
    messagePlaceholder: "Tulis pesan Anda di sini...",
    submit: "Kirim Pesan",
    successTitle: "Pesan berhasil dikirim!",
    successText: "Terima kasih, saya akan menghubungi Anda segera.",
  },
  footer: {
    rights: "Semua hak cipta dilindungi.",
  },
  meta: {
    title: "Portfolio | Zhafran",
    description: "Portfolio website - Frontend Developer. Lihat project dan skill saya.",
  },
} satisfies Record<string, unknown>

export type Dictionary = typeof id
export default id