'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Twitter, Linkedin, Github, MessageCircle, Youtube, Heart, Users, Target } from 'lucide-react'

interface TeamProps {
  locale: string
}

export default function Team({ locale }: TeamProps) {
  const content = {
    en: {
      title: "Join Our Team",
      subtitle: "Passionate about creating positive change in the Web3 ecosystem",
      about: "About Causa Foundation",
      aboutText: "We are dedicated to creating meaningful projects that help people grow and contribute to the community. Through our charitable initiatives and $CAUSA token rewards, we're building a sustainable ecosystem that benefits everyone involved.",
      mission: "Our Mission",
      missionText: "To have a positive impact on the Solana ecosystem and Web3 in general by creating and working on projects with good meaning, helping people grow, and contributing to the community through charities and rewarding holders with Solana.",
      name: "Denis Mehmed",
      role: "Founder & CEO",
      bio: "Passionate blockchain and Solana enthusiast - community builder dedicated to creating positive impact in the Web3 ecosystem.",
      connect: "Connect with me"
    },
    bg: {
      title: "Присъедини се към нас",
      subtitle: "Нека създадем положителни промени в Web3 екосистемата.",
      about: "За Causa Foundation",
      aboutText: "Създаваме проекти със смисъл, които вдъхновяват хората да се развиват и да споделят с общността. Чрез нашите благотворителни каузи и награди с токена $CAUSA изграждаме устойчива и подкрепяща екосистема, от която печелят всички.",
      mission: "Нашата мисия",
      missionText: "Да имаме положително въздействие върху екосистемата на Solana и Web3 като цяло, като създаваме и работим по проекти със смисъл, помагаме на хората да растат и допринасяме за общността чрез благотворителност и награждаване на притежателите със Solana.",
      name: "Денис Мехмед",
      role: "Основател",
      bio: "Страстен ентусиаст на Solana,блокчейн технологиите и строител на общности, посветен на създаването на положително въздействие в Web3 екосистемата.",
      connect: "Свържи се с мен"
    }
  }

  const currentContent = content[locale as keyof typeof content]

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/themenace_X", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/denis-mehmed-546332249/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/denisthemenace42", label: "GitHub" },
    { icon: MessageCircle, href: "https://t.me/themenace_X", label: "Telegram" },
    { icon: Youtube, href: "https://youtube.com/@belqta__", label: "YouTube" },
  ]

  const features = [
    {
      icon: Heart,
      title: locale === 'bg' ? 'Благотворителност' : 'Charity',
      description: locale === 'bg' ? 'Подкрепяме благотворителни инициативи' : 'Supporting charitable initiatives'
    },
    {
      icon: Users,
      title: locale === 'bg' ? 'Общност' : 'Community',
      description: locale === 'bg' ? 'Изграждаме силна общност' : 'Building a strong community'
    },
    {
      icon: Target,
      title: locale === 'bg' ? 'Положително въздействие' : 'Positive Impact',
      description: locale === 'bg' ? 'Създаваме смислени проекти' : 'Creating meaningful projects'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Main Team Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Profile Section - Centered */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
                  <Image
                    src="/myprofile.png"
                    alt="Denis Mehmed"
                    fill
                    className="rounded-full object-cover shadow-2xl border-4 border-white"
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-dark mb-2"
              >
                {currentContent.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-primary font-semibold mb-4"
              >
                {currentContent.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                {currentContent.bio}
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mb-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-3"
              >
                {currentContent.connect}
              </motion.button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>

            {/* About & Mission Section */}
            <div className="space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-light/50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full mr-3"></div>
                  {currentContent.about}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {currentContent.aboutText}
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white to-light/50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full mr-3"></div>
                  {currentContent.mission}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {currentContent.missionText}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={36} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-dark mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
