'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Code, Palette, Shield, Database, Globe, Users, AlertCircle } from 'lucide-react'

interface JoinUsProps {
  locale: string
}

export default function JoinUs({ locale }: JoinUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty: '',
    experience: '',
    motivation: '',
    contribution: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const content = {
    en: {
      title: "Join Our Community",
      subtitle: "Be part of something bigger. Help us create positive impact in the Web3 ecosystem.",
      form: {
        name: "Full Name",
        email: "Email Address",
        specialty: "Specialty",
        experience: "Years of Experience",
        motivation: "Why do you want to join our community?",
        contribution: "How can you contribute to our mission?",
        submit: "Submit Application",
        submitting: "Submitting...",
        submitted: "Application Submitted!"
      },
      specialties: [
        { value: "frontend", label: "Front-End Development", icon: Code },
        { value: "backend", label: "Back-End Development", icon: Database },
        { value: "sql", label: "SQL & Database", icon: Database },
        { value: "security", label: "Security", icon: Shield },
        { value: "design", label: "Design & UX", icon: Palette },
        { value: "blockchain", label: "Blockchain Development", icon: Globe },
        { value: "community", label: "Community Management", icon: Users },
        { value: "other", label: "Other", icon: Code }
      ]
    },
    bg: {
      title: "Присъедини се към нашата общност",
      subtitle: "Бъди част от нещо по-голямо. Помогни ни да създадем положително въздействие в Web3 екосистемата.",
      form: {
        name: "Пълно име",
        email: "Имейл адрес",
        specialty: "Специализация",
        experience: "Години опит",
        motivation: "Защо искате да се присъедините към нашата общност?",
        contribution: "Как можете да допринесете за нашата мисия?",
        submit: "Изпрати заявка",
        submitting: "Изпращане...",
        submitted: "Заявката е изпратена!"
      },
      specialties: [
        { value: "frontend", label: "Front-End разработка", icon: Code },
        { value: "backend", label: "Back-End разработка", icon: Database },
        { value: "sql", label: "SQL и бази данни", icon: Database },
        { value: "security", label: "Сигурност", icon: Shield },
        { value: "design", label: "Дизайн и UX", icon: Palette },
        { value: "blockchain", label: "Блокчейн разработка", icon: Globe },
        { value: "community", label: "Управление на общност", icon: Users },
        { value: "other", label: "Друго", icon: Code }
      ]
    }
  }

  const currentContent = content[locale as keyof typeof content]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Create form data for submission
      const formDataToSend = new FormData()
      formDataToSend.append('form-name', 'join-us-form')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('specialty', formData.specialty)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('motivation', formData.motivation)
      formDataToSend.append('contribution', formData.contribution)
      formDataToSend.append('submitted_at', new Date().toISOString())
      formDataToSend.append('locale', locale)

      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Also send to our API for additional processing
        await sendToCustomEndpoint()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError(locale === 'bg' ? 'Грешка при изпращане. Моля, опитайте отново.' : 'Submission error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Send to our API endpoint for additional processing
  const sendToCustomEndpoint = async () => {
    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submitted_at: new Date().toISOString(),
          locale
        })
      })
    } catch (err) {
      console.error('Custom endpoint error:', err)
      // Don't fail the form if this fails
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  if (isSubmitted) {
    return (
      <section id="join" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} className="text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-dark mb-4">
              {currentContent.form.submitted}
            </h2>
            <p className="text-gray-600 mb-8">
              {locale === 'bg' 
                ? 'Благодарим ви за заявката! Ще се свържем с вас скоро.' 
                : 'Thank you for your application! We\'ll get back to you soon.'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  specialty: '',
                  experience: '',
                  motivation: '',
                  contribution: ''
                })
                setError('')
              }}
              className="btn-primary"
            >
              {locale === 'bg' ? 'Изпрати нова заявка' : 'Submit Another Application'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            {/* Development Mode Indicator */}
            {/* Removed development mode indicator */}

            {/* Hidden form for Netlify */}
            <form name="join-us-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <select name="specialty"></select>
              <select name="experience"></select>
              <textarea name="motivation"></textarea>
              <textarea name="contribution"></textarea>
              <input type="hidden" name="submitted_at" />
              <input type="hidden" name="locale" />
            </form>

            <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="join-us-form">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={locale === 'bg' ? 'Въведете вашето име' : 'Enter your full name'}
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={locale === 'bg' ? 'Въведете вашия имейл' : 'Enter your email address'}
                  disabled={isSubmitting}
                />
              </div>

              {/* Specialty */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.specialty}
                </label>
                <select
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={(e) => handleInputChange('specialty', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  disabled={isSubmitting}
                >
                  <option value="">
                    {locale === 'bg' ? 'Изберете специализация' : 'Select your specialty'}
                  </option>
                  {currentContent.specialties.map((specialty) => (
                    <option key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.experience}
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  disabled={isSubmitting}
                >
                  <option value="">
                    {locale === 'bg' ? 'Изберете опит' : 'Select experience level'}
                  </option>
                  <option value="0-1">{locale === 'bg' ? '0-1 година' : '0-1 year'}</option>
                  <option value="1-3">{locale === 'bg' ? '1-3 години' : '1-3 years'}</option>
                  <option value="3-5">{locale === 'bg' ? '3-5 години' : '3-5 years'}</option>
                  <option value="5+">{locale === 'bg' ? '5+ години' : '5+ years'}</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.motivation}
                </label>
                <textarea
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={locale === 'bg' ? 'Разкажете ни защо искате да се присъедините...' : 'Tell us why you want to join...'}
                  disabled={isSubmitting}
                />
              </div>

              {/* Contribution */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.contribution}
                </label>
                <textarea
                  name="contribution"
                  required
                  rows={4}
                  value={formData.contribution}
                  onChange={(e) => handleInputChange('contribution', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={locale === 'bg' ? 'Обяснете как можете да допринесете...' : 'Explain how you can contribute...'}
                  disabled={isSubmitting}
                />
              </div>

              {/* Hidden fields for Netlify */}
              <input type="hidden" name="submitted_at" />
              <input type="hidden" name="locale" />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {currentContent.form.submitting}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {currentContent.form.submit}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark">
                {locale === 'bg' ? 'Защо да се присъедините?' : 'Why Join Us?'}
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: locale === 'bg' ? 'Силна общност' : 'Strong Community',
                    description: locale === 'bg' ? 'Присъединете се към страстни разработчици и ентусиасти' : 'Join passionate developers and enthusiasts'
                  },
                  {
                    icon: Globe,
                    title: locale === 'bg' ? 'Иновативни проекти' : 'Innovative Projects',
                    description: locale === 'bg' ? 'Работете по смислени проекти в Web3 пространството' : 'Work on meaningful projects in the Web3 space'
                  },
                  {
                    icon: Shield,
                    title: locale === 'bg' ? 'Личностно развитие' : 'Personal Growth',
                    description: locale === 'bg' ? 'Развивайте се заедно с експерти в индустрията' : 'Grow alongside industry experts'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialty Icons */}
            <div className="grid grid-cols-2 gap-4">
              {currentContent.specialties.slice(0, 6).map((specialty, index) => (
                <motion.div
                  key={specialty.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white rounded-lg shadow-md text-center"
                >
                  <specialty.icon size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-dark">{specialty.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
