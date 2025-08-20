'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  locale: string
  onLocaleChange: (locale: string) => void
}

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: locale === 'bg' ? 'Начало' : 'Home' },
    { href: '#team', label: locale === 'bg' ? 'Екип' : 'Team' },
    { href: '#join', label: locale === 'bg' ? 'Присъедини се' : 'Join Us' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Image
              src={locale === 'bg' ? '/causafoundation_bg.png' : '/causafoundation.png'}
              alt="Causa Foundation"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onLocaleChange(locale === 'en' ? 'bg' : 'en')}
              className="flex items-center space-x-2 text-dark hover:text-primary transition-colors duration-200"
            >
              <Globe size={20} />
              <span className="font-medium">{locale.toUpperCase()}</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none focus:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => onLocaleChange(locale === 'en' ? 'bg' : 'en')}
              className="flex items-center space-x-2 text-dark hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              <Globe size={20} />
              <span>{locale === 'en' ? 'Български' : 'English'}</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
