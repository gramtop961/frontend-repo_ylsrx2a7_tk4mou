import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
