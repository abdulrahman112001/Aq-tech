"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { companyData } from "@/data/company"
import { fadeInUp, staggerContainer, viewportOnce } from "./animations"
import Icon from "./Icon"

type Status = "idle" | "sending" | "success" | "error"

export default function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // NOTE: Wire this up to a real endpoint (e.g. an API route or email
    // service like Resend/Formspree) before launch. For now it just
    // simulates a submission.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const infoItems = [
    { icon: "mail" as const, label: t.contact.emailLabel, value: companyData.email, href: `mailto:${companyData.email}` },
    { icon: "phone" as const, label: t.contact.phoneLabel, value: companyData.phone, href: `tel:${companyData.phone.replace(/\s/g, "")}` },
    { icon: "map-pin" as const, label: t.contact.locationLabel, value: `${companyData.location} · ${companyData.locationNote}` },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="section-eyebrow mx-auto mb-6">
            {t.contact.eyebrow}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            {t.contact.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-5">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium hover:text-secondary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                {[
                  { icon: "linkedin" as const, href: companyData.linkedin },
                  { icon: "twitter" as const, href: companyData.twitter },
                  { icon: "github" as const, href: companyData.github },
                  { icon: "instagram" as const, href: companyData.instagram },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-secondary transition-colors"
                  >
                    <Icon name={s.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-text-muted mb-2">{t.contact.formName}</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-2">{t.contact.formEmail}</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-2">{t.contact.formSubject}</label>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-2">{t.contact.formMessage}</label>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-surface-light/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 gradient-bg rounded-xl text-white font-semibold shadow-lg shadow-primary/25 disabled:opacity-60"
            >
              {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
            </motion.button>

            {status === "success" && (
              <p className="text-success text-sm text-center">{t.contact.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{t.contact.formError}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
