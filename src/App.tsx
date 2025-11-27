import './App.css'
import Background from "./components/Background.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

function App() {

  return (
    <>
        <div className="min-h-screen text-gray-200 selection:bg-cyan-500 selection:text-black font-sans">
            <Background />
            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <footer className="relative z-10 py-6 text-center text-xs font-mono text-gray-600 border-t border-gray-900 bg-black/80">
                <p>© 2025 NUON_VAKHIM SYSTEMS. ALL RIGHTS RESERVED.</p>
                <p className="mt-1">POWERED BY REACT & GEMINI API</p>
            </footer>
        </div>
    </>
  )
}

export default App
