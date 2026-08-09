"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import id, { type Dictionary } from "./id"
import en from "./en"
import type { Language } from "./types"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const dictionaries: Record<Language, Dictionary> = { id, en }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("id")

  useEffect(() => {
    const stored = window.localStorage.getItem("lang")
    if (stored === "id" || stored === "en") {
      setLangState(stored)
    }
  }, [])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    window.localStorage.setItem("lang", next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}