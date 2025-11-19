import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2])

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0b10] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b10]/30 to-[#0a0b10]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <motion.h1 style={{ y, opacity }} className="text-[9vw] leading-[0.9] font-extrabold tracking-[-0.04em] select-none">
          <span className="block bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
            FUTURE-MODE
          </span>
          <span className="block text-white/90">PORTFOLIO</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }} className="mt-8 max-w-2xl text-lg md:text-2xl text-white/70">
          Digital artist crafting interactive, cinematic web experiences. I design in motion, code with emotion.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4">
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#work" className="pointer-events-auto group relative inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-semibold text-black bg-gradient-to-r from-lime-300 via-cyan-300 to-fuchsia-300">
            <span>View Work</span>
            <span className="h-2 w-2 rounded-full bg-black/70 group-hover:scale-150 transition-transform" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#contact" className="pointer-events-auto inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 hover:ring-white/40">
            Get in touch
          </motion.a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
