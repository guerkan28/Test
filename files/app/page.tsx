'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}