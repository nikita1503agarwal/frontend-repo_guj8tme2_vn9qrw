import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { k: 'Who', v: 'Designer–developer focused on clean systems and thoughtful details.' },
    { k: 'Approach', v: 'Less, but better. Clear hierarchy, generous spacing, polite motion.' },
    { k: 'Focus', v: 'Product design, interfaces, and design systems.' },
    { k: 'Now', v: 'Available for select collaborations and freelance.' },
  ]

  return (
    <section id="about" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
          <p className="text-white/60 max-w-md text-sm">Simple, modular blocks arranged like a Notion page for effortless readability.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-[12px] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-white/50">{it.k}</p>
              <p className="mt-2 text-base text-white/90">{it.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
