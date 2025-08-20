'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, MessageCircle, Youtube, Heart } from 'lucide-react'
import Image from 'next/image'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const content = {
    en: {
      description: "Creating positive impact on the Solana ecosystem and Web3 in general through meaningful projects and community contributions.",
      madeWith: "Made with",
      by: "by",
      rights: "All rights reserved."
    },
    bg: {
      description: "Създаваме положително въздействие в екосистемата на Solana и Web3 като цяло чрез смислени проекти и приноси към общността.",
      madeWith: "Направено с",
      by: "от",
      rights: "Всички права запазени."
    }
  }

  const currentContent = content[locale as keyof typeof content]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/denismehmed", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/denismehmed", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/denismehmed", label: "GitHub" },
    { icon: MessageCircle, href: "https://t.me/denismehmed", label: "Telegram" },
    { icon: Youtube, href: "https://youtube.com/@denismehmed", label: "YouTube" },
  ]

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Image
              src={locale === 'bg' ? '/causafoundation_bg.png' : '/causafoundation.png'}
              alt="Causa Foundation"
              width={200}
              height={50}
              className="h-12 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentContent.description}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'bg' ? 'Следвайте ни' : 'Follow Us'}
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <span className="text-gray-300 text-sm">{currentContent.madeWith}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
              <span className="text-gray-300 text-sm">{currentContent.by}</span>
              <span className="text-primary font-semibold">Denis Mehmed</span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2024 Causa Foundation. {currentContent.rights}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
