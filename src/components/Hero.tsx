"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { fadeInUp, staggerContainer, buttonHover } from "./animations"
import LazyHeroScene from "./three/LazyHeroScene"

export default function Hero() {
  const { t, isRTL } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 grid-pattern"
    >
      <div className="glow-orb w-[32rem] h-[32rem] bg-primary/40 -top-32 -left-32" />
      <div className="glow-orb w-[28rem] h-[28rem] bg-accent/30 bottom-0 right-0" />

      <div className="absolute inset-0 opacity-70">
        <LazyHeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`max-w-4xl mx-auto text-center ${isRTL ? "" : ""}`}
        >
          <motion.div variants={fadeInUp} className="section-eyebrow mx-auto mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            {t.hero.titleLine1}{" "}
            <span className="gradient-text block md:inline">{t.hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 gradient-bg rounded-full text-white font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </motion.button>
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-4 glass rounded-full text-text font-semibold w-full sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-text-muted text-xs z-10"
      >
        <span>{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
