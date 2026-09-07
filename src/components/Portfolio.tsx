"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { projects, Project } from "@/data/projects"
import { fadeInUp, staggerContainer, viewportOnce } from "./animations"

const categories: Array<Project["category"] | "All"> = ["All", "Web", "Mobile", "AI", "Cloud"]

export default function Portfolio() {
  const { t } = useLanguage()
  const [active, setActive] = useState<(typeof categories)[number]>("All")

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-surface/40">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="section-eyebrow mx-auto mb-6">
            {t.portfolio.eyebrow}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            {t.portfolio.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            {t.portfolio.description}
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "gradient-bg text-white"
                  : "glass text-text-muted hover:text-text"
              }`}
            >
              {cat === "All" ? t.portfolio.all : cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass card-hover rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 gradient-bg opacity-80 flex items-center justify-center overflow-hidden">
                  <span className="text-white/90 text-4xl font-bold tracking-tight">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/30 text-white text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="text-text-muted text-xs">{project.year}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-surface-light text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
