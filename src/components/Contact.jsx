import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0a0b10] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_100%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">Let’s make something iconic</h2>
          <p className="mt-4 text-white/70">Brief me with a few lines. I’ll reply within 24h.</p>
        </div>

        <form onSubmit={submit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name="name" label="Your name" required />
          <Input name="email" type="email" label="Email" required />
          <Input name="company" label="Company (optional)" />
          <Input name="topic" label="Topic" />
          <div className="md:col-span-2">
            <Label>Message</Label>
            <textarea name="message" required placeholder="Tell me about your project…" className="mt-2 w-full h-40 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-black bg-gradient-to-r from-lime-300 via-cyan-300 to-fuchsia-300">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </motion.button>
            {status === 'sent' && <span className="text-lime-300">Message sent — thank you!</span>}
            {status === 'error' && <span className="text-red-400">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

function Label({ children }) {
  return <label className="text-sm uppercase tracking-widest text-white/60">{children}</label>
}

function Input({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input {...props} className="mt-2 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
    </div>
  )
}
