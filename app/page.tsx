'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Team from '../components/Team'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

export default function Home() {
  const [locale, setLocale] = useState('en')

  return (
    <main className="min-h-screen">
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <Team locale={locale} />
      <JoinUs locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
