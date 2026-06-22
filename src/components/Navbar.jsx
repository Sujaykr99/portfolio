import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['Work', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <span className="text-white font-black text-sm tracking-[0.2em] uppercase">
        Portfolio
      </span>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`relative text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
              link === 'Work'
                ? 'text-white'
                : 'text-[#aaaaaa] hover:text-white'
            }`}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:sujaykrsingh999@gmail.com?subject=Resume%20Request"
          className="hidden sm:inline-flex items-center justify-center border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:border-white/35 hover:text-white"
        >
          Resume
        </a>
        <a href="mailto:sujaykrsingh999@gmail.com">
          <button className="hire-btn uppercase tracking-widest">
            Hire Me
          </button>
        </a>
      </div>
    </motion.header>
  )
}
