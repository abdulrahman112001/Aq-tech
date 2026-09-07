"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { translations, Language, TranslationType } from "@/data/translations"

interface LanguageContextType {
  language: Language
  t: TranslationType
  toggleLanguage: () => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en"
    const saved = window.localStorage.getItem("aqtech-language") as Language | null
    return saved === "en" || saved === "ar" ? saved : "en"
  })

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "ar" : "en"
      localStorage.setItem("aqtech-language", next)
      return next
    })
  }

  const isRTL = language === "ar"
  const t = translations[language]

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language, isRTL])

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
