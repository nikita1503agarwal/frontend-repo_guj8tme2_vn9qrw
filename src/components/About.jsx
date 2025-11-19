import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { k: 'Origin Story', v: 'Raised on glitch art and midnight code. I design interfaces like music.' },
    { k: 'Method', v: 'Rapid prototyping, shader-first visuals, ruthless simplicity.' },
    { k: 'Belief', v: 'Beauty = function x risk. If it feels safe, it’s not finished.' },
    { k: 'Now', v: 'Exploring haptics in web, tactile motion systems, humane AI tools.' },
  ]

  return (
    <section id="about" className="relative bg-[#0a0b10] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              About me —
            </h2>
            <p className="mt-6 text-white/70">
              I craft immersive stories for brands and products. Non-linear layouts, cinematic type, and playful physics are my comfort zone.
            </p>
          </motion.div>
          <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((it, i) => (
              <motion.li key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group relative p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:bg-cyan-400/10 transition-colors" />
                <p className="text-xs uppercase tracking-widest text-white/50">{it.k}</p>
                <p className="mt-2 text-lg leading-relaxed">{it.v}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
