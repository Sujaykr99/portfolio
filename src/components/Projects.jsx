import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CircularCarousel from './effects/CircularCarousel'

const projects = [
  {
    id: '01',
    title: 'Counter',
    subtitle: 'React fundamentals',
    desc: 'A focused counter app exploring React state and event handling.',
    tags: ['React', 'JavaScript'],
    href: 'https://github.com/Sujaykr99/web-dev/tree/main/01-JSproject',
    image: 'photo-1555066931-4365d14bab8c',
    color: '#8b5cf6',
  },
  {
    id: '02',
    title: 'Movie Explorer',
    subtitle: 'Discover films',
    desc: 'A movie discovery project for browsing titles and exploring film details.',
    tags: ['React', 'API'],
    href: 'https://github.com/Sujaykr99/web-dev/tree/main/02-JSproject',
    image: 'photo-1489599849927-2ee91cede3ba',
    color: '#f97316',
  },
  {
    id: '03',
    title: 'Learn React',
    subtitle: 'Learning repository',
    desc: 'Hands-on examples and exercises built while learning React.',
    tags: ['React', 'JavaScript'],
    href: 'https://github.com/Sujaykr99/LearnReact',
    image: 'photo-1633356122544-f134324a6cee',
    color: '#22d3ee',
  },
  {
    id: '04',
    title: 'Shayari Card',
    subtitle: 'Creative web project',
    desc: 'A small visual experience for sharing shayari in a card format.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Sujaykr99/web-dev/tree/main/06-Shayaricard',
    image: 'photo-1519682337058-a94d519337bc',
    color: '#fb7185',
  },
  {
    id: '05',
    title: 'Data Structures & Algorithms',
    subtitle: 'Practice and problem solving',
    desc: 'A growing collection of DSA solutions and implementation practice.',
    tags: ['C++', 'DSA', 'LeetCode'],
    href: 'https://github.com/Sujaykr99/DSA',
    image: 'photo-1515879218367-8466d910aaa4',
    color: '#facc15',
  },
  {
    id: '06',
    title: 'Matrix',
    subtitle: 'Career prediction & roadmap',
    desc: 'An AI-assisted career guidance platform for role predictions, readiness scoring, and personalized roadmaps.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Python'],
    href: 'https://github.com/Sujaykr99/4th_year_major_project',
    image: 'photo-1451187580459-43490279c0fa',
    color: '#22d3ee',
  },
  {
    id: '07',
    title: 'Handcraft',
    subtitle: 'Handmade marketplace',
    desc: 'A full-stack marketplace with buyer and seller workflows, product discovery, carts, wishlists, and order management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    href: 'https://github.com/Sujaykr99/handcraft',
    image: 'photo-1452860606245-08befc0ff44b',
    color: '#f97316',
  },
  {
    id: '08',
    title: 'Thristix Studio',
    subtitle: 'Animated studio experience',
    desc: 'An expressive React studio website with smooth GSAP animations and an immersive visual interface.',
    tags: ['React', 'GSAP', 'Animation'],
    href: 'https://github.com/Sujaykr99/web-dev/tree/main/05-ReactProject',
    image: 'photo-1497366754035-f200968a6e72',
    color: '#a78bfa',
  },
  {
    id: '09',
    title: 'Scanly',
    subtitle: 'Portable health records',
    desc: 'A QR-based health records platform with patient, doctor, and admin access, QR generation, and secure medical file uploads.',
    tags: ['Node.js', 'Express', 'MongoDB', 'QR'],
    href: 'https://github.com/Sujaykr99',
    image: 'photo-1576091160399-112ba8d25d1d',
    color: '#34d399',
  },
]

const carouselItems = projects.map((project) => ({
  src: `https://images.unsplash.com/${project.image}?w=900&q=85&auto=format&fit=crop`,
  alt: `${project.title} — ${project.subtitle}`,
  title: project.title,
  subtitle: project.subtitle,
  href: project.href,
}))

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="project-tile group relative min-h-[270px] overflow-hidden rounded-2xl border border-white/10 bg-[#101010] p-5"
      style={{ '--project-accent': project.color }}
    >
      <img
        src={`https://images.unsplash.com/${project.image}?w=900&q=85&auto=format&fit=crop`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-[#080808]/15" />
      <span className="relative text-xs font-bold tracking-[0.25em] text-white/50">{project.id}</span>
      <div className="absolute inset-x-5 bottom-5 z-10">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: project.color }}>{project.subtitle}</p>
        <h3 className="text-xl font-black tracking-tight text-white">{project.title}</h3>
        <p className="mt-2 max-w-lg text-xs leading-relaxed text-white/65">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/70">{tag}</span>)}
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">{project.collection ? 'View GitHub' : 'Open repository'} <span aria-hidden="true">↗</span></span>
      </div>
    </motion.a>
  )
}

function DeveloperShuffle() {
  const [label, setLabel] = useState('developer')

  useEffect(() => {
    const alphabet = '01<>/{}[]#$%'
    const word = 'developer'
    const timers = []
    let step = 0

    const start = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        step += 1
        const settled = Math.min(word.length, Math.floor(step / 2))
        const scrambled = word.split('').map((letter, index) =>
          index < settled ? letter : alphabet[Math.floor(Math.random() * alphabet.length)],
        ).join('')
        setLabel(scrambled)
        if (settled === word.length) {
          window.clearInterval(interval)
          window.setTimeout(() => setLabel('developer'), 1100)
        }
      }, 75)
      timers.push(interval)
    }, 850)

    return () => {
      window.clearTimeout(start)
      timers.forEach(window.clearInterval)
    }
  }, [])

  return (
    <div className="my-12 flex items-center justify-center gap-4 text-center" aria-label="Developer">
      <span className="h-px w-10 bg-white/15 sm:w-20" />
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">Built by a</span>
      <span className="developer-shuffle min-w-[9ch] font-mono text-lg font-bold tracking-wide text-[#ffea00] sm:text-xl" aria-hidden="true">{label}</span>
      <span className="h-px w-10 bg-white/15 sm:w-20" />
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const openRepository = (item) => {
    if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-8 bg-red-acc" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#aaaaaa]">Selected Work</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">PROJECTS</h2>
        </motion.div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/55"><span className="text-2xl font-black text-[#ffea00]">09</span> featured projects</p>
      </div>

      <div className="relative mb-14 h-[410px] overflow-hidden rounded-3xl border border-white/10 bg-[#080808] sm:h-[500px] md:h-[580px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#080808] to-transparent" />
        <CircularCarousel
          items={carouselItems}
          preset="cylinder"
          intro="rise"
          cardWidth={230}
          aspectRatio={0.86}
          gap={22}
          autoplay="drift"
          speed={8}
          captions
          fadeColor="#080808"
          cornerRadius={18}
          onItemClick={openRepository}
          className="h-full w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      <DeveloperShuffle />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  )
}
