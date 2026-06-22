import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import BentoGrid from './components/BentoGrid'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen bg-[#080808]">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-white"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Film grain noise overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <BentoGrid />
        <About />
      </main>
      <Footer />
    </div>
  )
}
