import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal top nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">Your Name</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#skills" className="hover:text-black">Skills</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-sm text-white hover:bg-gray-900"
          >
            Hire me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
