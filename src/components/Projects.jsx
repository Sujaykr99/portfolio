import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: '01',
    title: 'HANDART MARKETPLACE',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    desc: 'Full-stack online marketplace for handcrafted products, enabling sellers to list items and buyers to securely complete purchases with a responsive, intuitive UI.',
    year: '2025',
    gradient: 'from-red-900/20 to-transparent',
    accentColor: '#ff0000',
    liveUrl: 'https://handcraft-mu.vercel.app/',
    githubUrl: 'https://github.com/Sujaykr99/handcraft',
    preview: ['Artisan storefront', 'Seller studio', 'Cart checkout'],
  },
  {
    id: '02',
    title: 'SCANLY HEALTH RECORDS',
    tags: ['Next.js', 'Express.js', 'QR'],
    desc: 'Portable digital health records system using QR-powered access, secure authentication, and a clean full-stack workflow for storing and sharing patient data.',
    year: '2025',
    gradient: 'from-yellow-900/20 to-transparent',
    accentColor: '#ffea00',
    liveUrl: 'https://scanly-rho.vercel.app/',
    preview: ['QR record access', 'Patient profile', 'Secure uploads'],
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div
        className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${project.accentColor}15 0%, #111 100%)`,
        }}
      >
        {/* Abstract grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}30 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}30 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          className="relative z-10 w-[78%] max-w-sm overflow-hidden rounded-lg border border-white/10 bg-black/45 shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0.82, y: 12, rotateX: 0 }}
          whileHover={{ opacity: 1, y: 0, rotateX: 3 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="flex h-8 items-center gap-2 border-b border-white/10 px-3">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="ml-2 text-[9px] font-bold uppercase tracking-widest text-white/35">
              Preview
            </span>
          </div>
          <div className="space-y-3 p-4">
            <motion.div
              className="h-7 rounded bg-white/12"
              whileHover={{ width: '88%' }}
              style={{ width: '68%' }}
            />
            {project.preview.map((item, itemIndex) => (
              <motion.div
                key={item}
                className="flex items-center gap-3"
                initial={false}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25, delay: itemIndex * 0.03 }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: project.accentColor }}
                />
                <span className="h-px flex-1 bg-white/15" />
                <span className="text-[9px] font-semibold uppercase tracking-widest text-white/45">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <span
          className="absolute bottom-3 right-5 font-black select-none"
          style={{
            fontSize: '5rem',
            color: `${project.accentColor}12`,
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {project.id}
        </span>
        <div
          className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
          style={{
            background: `${project.accentColor}15`,
            border: `1px solid ${project.accentColor}30`,
            color: project.accentColor,
          }}
        >
          {project.year}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-white font-black text-lg tracking-tight mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-[#aaaaaa] text-sm leading-relaxed">{project.desc}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-white/10 px-3 py-2 text-[10px] font-semibold tracking-widest uppercase text-white/55 transition-colors hover:border-white/35 hover:text-white"
          >
            Live
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded border border-white/10 px-3 py-2 text-[10px] font-semibold tracking-widest uppercase text-white/35 transition-colors hover:border-white/35 hover:text-white"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-red-acc" />
          <span className="text-[#aaaaaa] text-xs tracking-widest uppercase font-medium">
            Selected Work
          </span>
        </div>
        <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight">
          PROJECTS
        </h2>
      </motion.div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
