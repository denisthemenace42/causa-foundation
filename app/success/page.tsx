'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-green-600" />
        </motion.div>
        
        <h1 className="text-3xl font-bold text-dark mb-4">
          Application Submitted!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your application! We'll get back to you soon.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="/#join"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Form
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
