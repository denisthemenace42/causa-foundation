'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

interface HeroProps {
  locale: string
}

export default function Hero({ locale }: HeroProps) {
  const content = {
    en: {
      title: "Creating Positive Impact on the Solana Ecosystem",
      subtitle: "Building meaningful projects that help people grow and contribute to the community through charitable initiatives and $CAUSA token rewards.",
      cta: "Join Our Mission",
      scroll: "Scroll to explore"
    },
    bg: {
      title: "Обединяваме хора и идеи в Solana.",
      subtitle: "Изграждаме смислени проекти, които помагат на хората да растат и да допринасят за общността чрез благотворителни инициативи и награди с токен $CAUSA.",
      cta: "Присъедини се към нашата мисия",
      scroll: "Превърти за да разгледаш"
    }
  }

  const currentContent = content[locale as keyof typeof content]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Sparkles size={60} className="text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 opacity-20"
      >
        <Sparkles size={80} className="text-secondary" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Layout - Logo first, then title */}
        <div className="lg:hidden">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-4"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Image
                src={locale === 'bg' ? '/causafoundation_bg.png' : '/causafoundation.png'}
                alt="Causa Foundation Logo"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Title - Close to logo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gradient mb-4 leading-tight text-center px-2"
          >
            {currentContent.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 mb-6 leading-relaxed text-center px-4"
          >
            {currentContent.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {currentContent.cta}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              {locale === 'bg' ? 'Научи повече' : 'Learn More'}
            </motion.button>
          </motion.div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gradient mb-6 leading-tight"
            >
              {currentContent.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {currentContent.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {currentContent.cta}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {locale === 'bg' ? 'Научи повече' : 'Learn More'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Image
                src={locale === 'bg' ? '/causafoundation_bg.png' : '/causafoundation.png'}
                alt="Causa Foundation Logo"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500"
        >
          <span className="text-sm mb-2">{currentContent.scroll}</span>
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
