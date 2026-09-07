"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { companyData } from "@/data/company"
import { fadeInUp, staggerContainer, viewportOnce } from "./animations"

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="section-eyebrow mx-auto mb-6">
            {t.process.eyebrow}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            {t.process.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            {t.process.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {companyData.process.map((step, index) => (
            <motion.div key={step.step} variants={fadeInUp} className="relative">
              <div className="glass card-hover rounded-2xl p-8 h-full">
                <div className="text-5xl font-bold gradient-text mb-6 opacity-80">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < companyData.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
