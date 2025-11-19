import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center py-16 md:py-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Minimal. Calm. Precise.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              A Notion-inspired portfolio on a pure black canvas. Clean blocks, soft cards, and tasteful icons showcase work without distraction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-[10px] border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">View work</a>
              <a href="#contact" className="rounded-[10px] border border-white/10 px-4 py-2 text-sm hover:bg-white/10">Contact</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-[14px] border border-white/10 bg-white/5 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-15${i}000000-0a0a0a0a0a0a?auto=format&fit=crop&w=800&q=60`} alt="" className="h-full w-full object-cover opacity-90" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
