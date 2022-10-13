import { About } from '../components/About'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'

export default function App() {
  return (
    <div
      className="bg-gray-900 text-white overflow-x-hidden h-screen snap-y snap-mandatory
     overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80"
    >
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
