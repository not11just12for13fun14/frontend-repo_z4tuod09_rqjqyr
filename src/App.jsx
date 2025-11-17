import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <Dashboard />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
