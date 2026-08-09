"use client"

import { useLanguage } from "@/i18n"
import type { Language } from "@/i18n"

const LANGS: Language[] = ["id", "en"]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex items-center overflow-hidden rounded-full border border-[#12AED0]/40 text-xs font-poppins font-medium"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 transition-colors duration-300 ${
            lang === l
              ? "bg-[#12AED0] text-white"
              : "bg-white/60 text-[#0B1B3F] hover:bg-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}