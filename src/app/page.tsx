import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Portfolio from "@/components/Portfolio"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
