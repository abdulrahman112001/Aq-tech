"use client"

import { useLanguage } from "@/context/LanguageContext"
import { companyData } from "@/data/company"
import { services } from "@/data/services"

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="border-t border-white/10 bg-surface/60 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">
                AQ
              </span>
              {companyData.name}
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              {["about", "services", "portfolio", "process", "contact"].map((id) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="hover:text-text transition-colors">
                    {t.nav[id as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-text-muted">
          <span>
            © {year} {companyData.legalName}. {t.footer.rights}
          </span>
          <a href={`mailto:${companyData.email}`} className="hover:text-text transition-colors">
            {companyData.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
