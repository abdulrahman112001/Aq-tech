"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { companyData } from "@/data/company"

const navKeys = ["home", "about", "services", "portfolio", "process", "contact"] as const

export default function Navbar() {
  const { t, isRTL, language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white text-base">
            AQ
          </span>
          <span>{companyData.name}</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navKeys.slice(0, -1).map((key) => (
            <button
              key={key}
              onClick={() => handleNavClick(key === "home" ? "home" : key)}
              className="text-text-muted hover:text-text transition-colors text-sm font-medium"
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full glass text-sm font-semibold text-text-muted hover:text-text transition-colors"
            aria-label="Toggle language"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2.5 rounded-full gradient-bg text-white text-sm font-semibold shadow-lg shadow-primary/25"
          >
            {t.nav.cta}
          </motion.button>
        </div>

        <button
          className="lg:hidden p-2 text-text"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass overflow-hidden"
          >
            <div className={`flex flex-col gap-1 px-4 py-4 ${isRTL ? "items-end" : "items-start"}`}>
              {navKeys.slice(0, -1).map((key) => (
                <button
                  key={key}
                  onClick={() => handleNavClick(key)}
                  className="w-full text-text-muted hover:text-text transition-colors text-sm font-medium py-2"
                >
                  {t.nav[key]}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-text-muted hover:text-text transition-colors text-sm font-medium py-2"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full mt-2 px-5 py-2.5 rounded-full gradient-bg text-white text-sm font-semibold text-center"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
