import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 82 },
  { name: 'Node.js', level: 72 },
  { name: 'MongoDB', level: 75 },
  { name: 'C++', level: 78 },
  { name: 'HTML/CSS', level: 92 },
  { name: 'Git', level: 75 },
]

function SkillBar({ skill, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-white/80">{skill.name}</span>
        <span className="text-[#aaaaaa]">{skill.level}%</span>
      </div>
      <div className="h-px w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.08 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #ff0000, #ffea00)' }}
        />
      </div>
    </div>
  )
}

export default function BentoGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-px bg-yellow-acc" />
        <span className="text-[#aaaaaa] text-xs tracking-widest uppercase font-medium">
          Metrics &amp; Skills
        </span>
      </div>
      <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight mb-12">
        WHAT I BRING
      </h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* --- Highlight Box (left, 1/3 width tall) --- */}
        <motion.div
          variants={itemVariants}
          className="red-glow-border rounded-2xl p-7 flex flex-col justify-between md:row-span-2"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(255,0,0,0.06) 0%, #0e0e0e 70%)' }}
        >
          <div>
            <span className="text-[10px] tracking-widest uppercase text-red-acc font-semibold">
              Metrics
            </span>
            <div className="mt-6">
              <p
                className="font-black text-white leading-none"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)' }}
              >
                250+
              </p>
              <p className="text-white font-bold text-sm tracking-wider uppercase mt-2">
                LeetCode Problems Solved
              </p>
            </div>
          </div>
          <p className="text-[#aaaaaa] text-xs leading-relaxed mt-6">
            Data structures and algorithms across arrays, trees, graphs, and
            dynamic programming.
          </p>
        </motion.div>

        {/* --- MERN Stack Box (top right) --- */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#aaaaaa] font-medium">
                01
              </span>
              <h3 className="text-white font-bold text-base tracking-tight mt-1">
                MERN STACK &amp; FRONTEND
              </h3>
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,234,0,0.08)', border: '1px solid rgba(255,234,0,0.15)' }}>
              <svg className="w-4 h-4 text-yellow-acc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>

          <div className="space-y-2.5 mt-2">
            {skills.slice(0, 4).map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'JWT', 'Vercel'].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* --- Core Languages Box (bottom right) --- */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#aaaaaa] font-medium">
                02
              </span>
              <h3 className="text-white font-bold text-base tracking-tight mt-1">
                CORE LANGUAGES &amp; TOOLS
              </h3>
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,0,0,0.08)', border: '1px solid rgba(255,0,0,0.15)' }}>
              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
          </div>

          <div className="space-y-2.5 mt-2">
            {skills.slice(4).map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {['C++', 'Java', 'C', 'Git', 'VS Code', 'Canva'].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
