export default function Footer() {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/Sujaykr99',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sujay-kumar-singh-1b56b829b',
    },
    {
      label: 'Email',
      href: 'mailto:sujaykrsingh999@gmail.com',
    },
  ]

  return (
    <footer
      id="contact"
      className="border-t border-white/5 px-6 md:px-12 py-12 mt-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl p-7 md:p-8 mb-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-yellow-acc font-semibold">
              Contact
            </span>
            <h2 className="mt-3 text-white font-black text-3xl md:text-4xl tracking-tight">
              LET'S BUILD SOMETHING USEFUL
            </h2>
            <p className="mt-3 text-[#aaaaaa] text-sm leading-relaxed max-w-2xl">
              Frontend and MERN stack learner based in Ghaziabad, Uttar Pradesh.
              Open to web projects, internships, and collaborative builds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <a
              href="mailto:sujaykrsingh999@gmail.com"
              className="inline-flex items-center justify-center bg-yellow-acc text-black px-5 py-3 rounded-lg text-xs font-black tracking-widest uppercase hover:bg-white transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Sujaykr99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/10 text-white px-5 py-3 rounded-lg text-xs font-black tracking-widest uppercase hover:border-white/35 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <span className="text-white font-black text-sm tracking-[0.2em] uppercase">
              Sujay Kumar Singh
            </span>
            <span className="text-[#aaaaaa] text-[10px] tracking-widest uppercase">
              Ghaziabad, Uttar Pradesh
            </span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaaaaa] hover:text-white text-[10px] tracking-widest uppercase font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-[#666666] text-[10px] tracking-widest uppercase text-center md:text-left mt-5">
          &copy; 2026 Sujay Kumar Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
