import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Work() {
  const [projects, setProjects] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${baseUrl}/projects`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (e) {
        setProjects([])
      }
    }
    run()
  }, [baseUrl])

  return (
    <section id="work" className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work</h2>
          <p className="text-white/60 max-w-md text-sm">Cards with subtle borders and cover images. Balanced spacing like a Notion gallery.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Card key={i} i={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ title, tags = [], cover }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-[14px] border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
    >
      {cover && (
        <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
          <img src={cover} alt="" className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-base font-semibold text-white/90">{title}</h3>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t, idx) => (
              <span key={idx} className="text-[11px] text-white/70 border border-white/10 rounded-[8px] px-2 py-1">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  )
}
