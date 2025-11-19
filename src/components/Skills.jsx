import { motion } from 'framer-motion'
import { Sparkles, Zap, Radar, Infinity } from 'lucide-react'

const skills = [
  { icon: Sparkles, label: 'Design Systems', value: 92 },
  { icon: Zap, label: 'Motion', value: 88 },
  { icon: Radar, label: 'Product Thinking', value: 84 },
  { icon: Infinity, label: 'Frontend', value: 86 },
]

export default function Skills() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-white/60">Neutral bars, subtle motion, clear labels. Calm and legible.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <Bar key={i} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Bar({ icon: Icon, label, value, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[12px] border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 grid place-items-center"><Icon className="h-4 w-4" /></div>
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm">
            <p className="font-medium text-white/90">{label}</p>
            <p className="text-white/60">{value}%</p>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="h-full rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
