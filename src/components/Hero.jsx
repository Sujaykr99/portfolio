import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const pages = [
  { label: '01 / Profile', title: 'SUJAY\nKUMAR SINGH', copy: 'Full-stack web developer building production-ready applications with React, Node.js, Express.js, MongoDB, and thoughtful product design.' },
  { label: '02 / Focus', title: 'BUILDING\nUSEFUL THINGS', copy: 'From AI-assisted career guidance to secure marketplaces and portable health-record systems—made for real workflows.' },
  { label: '03 / Available', title: 'LET’S MAKE\nIT REAL', copy: 'Open to internships, web projects, and collaborating with teams who care about clarity, craft, and practical outcomes.' },
]

export default function Hero() {
  const [page, setPage] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const current = pages[page]

  useEffect(() => {
    const timer = window.setInterval(() => setPage((currentPage) => (currentPage + 1) % pages.length), 4000)
    return () => window.clearInterval(timer)
  }, [])

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTilt({ x: ((event.clientY - rect.top) / rect.height - 0.5) * -5, y: ((event.clientX - rect.left) / rect.width - 0.5) * 7 })
  }

  return (
    <section id="work" className="sketch-hero" onPointerMove={handleMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="sketch-hero__wash" />
      <div className="sketch-hero__note">PORTFOLIO / 2026</div>
      <motion.div className="sketch-hero__book" animate={{ rotateX: tilt.x, rotateY: tilt.y }} transition={{ type: 'spring', stiffness: 140, damping: 18 }}>
        <div className="sketch-hero__pages" aria-hidden="true" />
        <div className="sketch-hero__paper">
          <div className="sketch-hero__paper-head"><span>SUJAY’S NOTEBOOK</span><span>{current.label}</span></div>
          <div className="sketch-hero__rule" />
          <motion.div key={page} initial={{ opacity: 0, rotateY: -12, x: -18 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 0.35 }} className="sketch-hero__content">
            <h1>{current.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
