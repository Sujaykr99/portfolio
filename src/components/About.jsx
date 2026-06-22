import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certs = [
  { title: 'AI for All', org: 'Ministry of Education & Intel' },
  { title: 'Responsive Web Design', org: 'freeCodeCamp' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[#aaaaaa] text-xs tracking-widest uppercase font-medium">
          About
        </span>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left */}
        <div className="glass-card rounded-2xl p-7">
          <h3 className="text-white font-black text-xl mb-4 tracking-tight">
            SUJAY KUMAR SINGH
          </h3>
          <p className="text-[#aaaaaa] text-sm leading-relaxed mb-6">
            B.Tech in Computer Science &amp; Engineering (AIML) student at ABES
            Engineering College, Ghaziabad - graduating 2027. Currently deepening
            expertise in the MERN stack while leading creative events on campus.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[#aaaaaa]">CGPA</span>
              <span className="ml-auto text-white font-semibold">7.71</span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[#aaaaaa]">Location</span>
              <span className="ml-auto text-white font-semibold">Ghaziabad, UP</span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[#aaaaaa]">Expected Graduation</span>
              <span className="ml-auto text-white font-semibold">2027</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-7">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: '#ffea00', boxShadow: '0 0 6px #ffea00' }}
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{c.title}</p>
                    <p className="text-[#aaaaaa] text-xs">{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">
              Extracurricular
            </h3>
            <p className="text-white text-sm font-medium">
              Event &amp; Decor Head
            </p>
            <p className="text-[#aaaaaa] text-xs mb-2">
              Creative U and Tourism Club - Aug 2025 to Jul 2026
            </p>
            <p className="text-[#aaaaaa] text-xs leading-relaxed">
              Led planning and execution of creative campus events, overseeing
              content writing, promotion, and team coordination.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
