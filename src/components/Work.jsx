import { motion } from 'framer-motion'

const projects = [
  { title: 'MetaBloom', tags: ['gen-art', 'branding', 'webgl'], img: '/covers/metabloom.jpg' },
  { title: 'NEON/GRID', tags: ['threejs', 'shaders'], img: '/covers/neongrid.jpg' },
  { title: 'FOLD', tags: ['typography', 'motion'], img: '/covers/fold.jpg' },
  { title: 'Aether', tags: ['r&d', 'ai'], img: '/covers/aether.jpg' },
  { title: 'Vortex', tags: ['webgl', 'audio'], img: '/covers/vortex.jpg' },
  { title: 'Ghost UI', tags: ['design system'], img: '/covers/ghost.jpg' },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-[#0a0b10] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">Selected work</h2>
          <p className="text-white/60 max-w-sm">Interactive cards with depth and parallax respond to your cursor — hover to explore.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} i={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ title, tags, img, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
    >
      <div className="absolute inset-0">
        <img src={img} alt="" className="h-full w-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      </div>
      <div className="relative h-full w-full p-6 flex flex-col justify-end">
        <div className="mb-3 flex gap-2 flex-wrap">
          {tags.map((t, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-wider text-white/70 bg-white/10 rounded-full px-2 py-1">{t}</span>
          ))}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px 200px at var(--x) var(--y), rgba(168,85,247,0.20), transparent 40%)' }} />
    </motion.a>
  )
}
