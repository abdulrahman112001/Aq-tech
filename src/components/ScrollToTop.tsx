"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full gradient-bg text-white shadow-lg shadow-primary/30 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
