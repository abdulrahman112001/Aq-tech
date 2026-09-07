"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { services } from "@/data/services"
import { fadeInUp, staggerContainer, viewportOnce } from "./animations"
import Icon from "./Icon"

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24 md:py-32 bg-surface/40">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="section-eyebrow mx-auto mb-6">
            {t.services.eyebrow}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            {t.services.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            {t.services.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="glass card-hover rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Icon name={service.icon as never} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                    <Icon name="check" className="w-4 h-4 text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
