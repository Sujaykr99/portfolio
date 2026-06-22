import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const backgroundLabels = ['REACT', 'NODE', 'API', 'UI', 'MERN', 'GIT']

export default function Hero() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(44)
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.16), rgba(255,255,255,0.055) 34%, transparent 68%)`

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100)
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Background radial gradient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.045) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        animate={{ x: ['-2%', '2%', '-2%'], y: ['1%', '-1%', '1%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'repeating-linear-gradient(115deg, transparent 0 72px, rgba(255,255,255,0.25) 73px, transparent 74px)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[18, 42, 68].map((top, index) => (
          <motion.span
            key={top}
            className="absolute left-[-20%] h-px w-[140%] bg-white/10"
            style={{ top: `${top}%` }}
            animate={{ x: ['-8%', '8%', '-8%'], opacity: [0.04, 0.16, 0.04] }}
            transition={{
              duration: 7 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {backgroundLabels.map((label, index) => (
          <motion.span
            key={label}
            className="absolute text-[10px] font-bold uppercase tracking-[0.45em] text-white/10"
            style={{
              top: `${22 + (index % 3) * 20}%`,
              left: `${8 + index * 14}%`,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.05, 0.16, 0.05] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.35,
            }}
          >
            {label}
          </motion.span>
        ))}
      </div>

      {/* Big background text */}
      <motion.div
        className="pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        animate={{ y: ['-50%', '-52%', '-50%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontSize: 'clamp(5.5rem, 18vw, 15rem)',
          fontWeight: 900,
          letterSpacing: 0,
          color: 'rgba(255,255,255,0.055)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        ENGINEERING
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-6xl text-center"
      >
        <div className="relative mx-auto min-h-[280px] flex items-center justify-center pt-10">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-[0.7em] uppercase text-white/45 font-bold">
            Sujay Kumar Singh
          </span>
          <span className="absolute top-9 md:top-8 left-[20%] h-2 w-16 bg-white/75" />
          <motion.h1
            className="relative font-black uppercase leading-none text-white"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              fontSize: 'clamp(4.5rem, 13vw, 11rem)',
              letterSpacing: 0,
              textShadow:
                '0 18px 28px rgba(0,0,0,0.72)',
            }}
          >
            DEVELOPER
          </motion.h1>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/55 font-bold">
            Engineering portfolio
          </span>
        </div>
      </motion.div>

      {/* Hero subtext */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex items-start gap-4 max-w-2xl mt-10"
      >
        <div
          className="shrink-0 mt-1"
          style={{
            width: '3px',
            height: '72px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0))',
            borderRadius: '2px',
          }}
        />
        <p className="text-[#aaaaaa] text-sm leading-relaxed font-light">
          Computer Science &amp; Engineering student building responsive,
          user-friendly web interfaces and full-stack projects. Focused on{' '}
          <span className="text-white font-medium">React, JavaScript</span>, and{' '}
          <span className="text-white font-medium">MERN</span> architectures.
        </p>
      </motion.div>

      {/* View projects CTA */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 mt-8 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors group"
      >
        View Projects
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </motion.a>
    </section>
  )
}
