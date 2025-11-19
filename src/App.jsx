import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
          <span className="inline-grid h-6 w-6 place-items-center rounded-[6px] bg-white/5 border border-white/10">✦</span>
          <span className="font-semibold tracking-tight">Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex items-center justify-between text-sm text-white/60">
        <p>© {new Date().getFullYear()} — All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="#">Twitter</a>
          <a className="hover:text-white" href="#">Dribbble</a>
          <a className="hover:text-white" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default App
