import { Header } from './components/Header'
import { Hero } from './components/Hero'

export function App() {
  return (
    <div className="bg-gray-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  )
}
