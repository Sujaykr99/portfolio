import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certs = [
  { title: 'AWS Academy Graduate - Cloud Architecting', org: 'AWS Academy' },
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
            Full-stack web developer and B.Tech Computer Science &amp; Engineering
            (AIML) student at ABES Engineering College, Ghaziabad. I build
            production-ready applications from responsive UI through APIs and deployment.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[#aaaaaa]">CGPA</span>
              <span className="ml-auto text-white font-semibold">7.74</span>
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
          <div className="mt-6 border-t border-white/5 pt-5">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">Education</h4>
            <div className="space-y-3 text-xs">
              <p className="text-[#aaaaaa]"><span className="font-medium text-white">B.Tech CSE (AIML), ABES Engineering College</span><br />2023–2027 · CGPA 7.74</p>
              <p className="text-[#aaaaaa]"><span className="font-medium text-white">Kendriya Vidyalaya, Patna · CBSE</span><br />Class 12: 82.00% · 2022 &nbsp;|&nbsp; Class 10: 85.00% · 2020</p>
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
              Creative U and Tourism Club - Aug 2025 to Aug 2026
            </p>
            <p className="text-[#aaaaaa] text-xs leading-relaxed">
              Led three campus-wide creative events, coordinating 20 members across
              content, logistics, and promotion for 300+ attendees.
            </p>
            <div className="mt-5 border-t border-white/5 pt-4">
              <p className="text-white text-sm font-medium">Volunteer</p>
              <p className="text-[#aaaaaa] text-xs">Minerva Club, Literary Society - Aug 2024 to Aug 2025</p>
              <p className="mt-2 text-[#aaaaaa] text-xs leading-relaxed">Contributed to content writing and debating activities, supporting literary initiatives.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
