"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { companyData } from "@/data/company"
import { fadeInUp, staggerContainer, viewportOnce } from "./animations"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <motion.div variants={fadeInUp} className="section-eyebrow mb-6">
              {t.about.eyebrow}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              {t.about.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-text-muted text-lg leading-relaxed">
              {t.about.description}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            {companyData.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass card-hover rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 text-center">
            {t.about.valuesTitle}
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {companyData.values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="glass card-hover rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg mb-5" />
                <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
