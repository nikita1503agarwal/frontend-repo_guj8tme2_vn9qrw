import { motion } from 'framer-motion'
import { Sparkles, Zap, Radar, Infinity } from 'lucide-react'

const skills = [
  { icon: Sparkles, label: 'Creative Coding', value: 92, hue: 'from-fuchsia-400 to-pink-300' },
  { icon: Zap, label: 'Motion Design', value: 88, hue: 'from-cyan-300 to-sky-300' },
  { icon: Radar, label: 'Systems Thinking', value: 84, hue: 'from-lime-300 to-emerald-300' },
  { icon: Infinity, label: 'Product Design', value: 86, hue: 'from-violet-300 to-fuchsia-300' },
]

export default function Skills() {
  return (
    <section className="relative bg-[#0a0b10] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_100%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight">Skills</h2>
        <p className="mt-4 text-white/60 max-w-2xl">Infographic bars animate on scroll. Each bar encodes proficiency with punchy color gradients.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skills.map((s, i) => (
            <Bar key={i} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Bar({ icon: Icon, label, value, hue, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="relative p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <div className="absolute -inset-20 bg-[conic-gradient(from_90deg,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="relative flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center"><Icon className="h-5 w-5" /></div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <p className="text-lg font-semibold">{label}</p>
            <p className="text-white/70">{value}%</p>
          </div>
          <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }} className={`h-full rounded-full bg-gradient-to-r ${hue}`} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
