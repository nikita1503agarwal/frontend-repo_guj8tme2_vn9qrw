import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-black tracking-tight text-white text-lg">art-future</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/test" className="text-white/50 hover:text-white">API test</a>
        </nav>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative bg-[#0a0b10] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <p className="text-white/50">© {new Date().getFullYear()} — Built for the future.</p>
        <div className="flex gap-4 text-white/60">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default App
