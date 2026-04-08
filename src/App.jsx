import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { Contact } from './components/sections/Contact'
import { Features } from './components/sections/Features'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { WhatIs } from './components/sections/WhatIs'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <Features />
        <Benefits />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
