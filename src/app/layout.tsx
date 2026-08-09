import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SmoothScroll from "@/components/SmoothScroll"
import BackgroundBlobs from "@/components/BackgroundBlobs"
import { LanguageProvider } from "@/i18n"
import id from "@/i18n/id"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zhafran.dev"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: id.meta.title,
    template: `%s | ${id.meta.title}`,
  },
  description: id.meta.description,
  applicationName: "Portofolio Zhafran",
  authors: [{ name: "Zhafrannajib Dzahabi Sya'ban", url: SITE_URL }],
  keywords: [
    "Zhafrannajib",
    "Zhafrannajib D. Sya'ban",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Portfolio",
    "Portofolio",
    "Web Developer Indonesia",
    "Fullstack Developer",
    "UI/UX",
  ],
  creator: "Zhafrannajib",
  publisher: "Zhafrannajib",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: id.meta.title,
    title: id.meta.title,
    description: id.meta.description,
    images: [
      {
        url: "/Foto%20Formal%20Zhafran.png",
        width: 1200,
        height: 630,
        alt: id.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: id.meta.title,
    description: id.meta.description,
    images: ["/Foto%20Formal%20Zhafran.png"],
  },
  icons: {
    icon: [{ url: "/Logo.png", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zhafrannajib Dzahabi Sya'ban",
              jobTitle: "Software Engineer",
              url: SITE_URL,
              image: `${SITE_URL}/Foto%20Formal%20Zhafran.png`,
              description: id.meta.description,
              knowsAbout: [
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "UI/UX Design",
                "Project Management",
              ],
              sameAs: [],
            }),
          }}
        />
        <BackgroundBlobs />
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
