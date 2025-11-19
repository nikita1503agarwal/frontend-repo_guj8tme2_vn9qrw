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
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-white/60">Send a short note and I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="name" label="Name" required />
          <Input name="email" type="email" label="Email" required />
          <Input name="company" label="Company" />
          <Input name="topic" label="Topic" />
          <div className="md:col-span-2">
            <Label>Message</Label>
            <textarea name="message" required placeholder="Tell me about your project…" className="mt-2 w-full h-36 rounded-[12px] border border-white/10 bg-white/5 px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="rounded-[10px] border border-white/10 bg-white/90 text-black px-4 py-2 text-sm font-medium hover:bg-white">
              {status === 'sending' ? 'Sending…' : 'Send'}
            </motion.button>
            {status === 'sent' && <span className="text-green-300 text-sm">Sent — thank you!</span>}
            {status === 'error' && <span className="text-red-400 text-sm">Something went wrong.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

function Label({ children }) {
  return <label className="text-xs uppercase tracking-wider text-white/50">{children}</label>
}

function Input({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input {...props} className="mt-2 w-full rounded-[12px] border border-white/10 bg-white/5 px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
    </div>
  )
}
