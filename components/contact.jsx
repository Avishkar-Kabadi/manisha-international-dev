'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const inputVariants = {
    focus: { borderColor: '#FFD700', boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.1)' }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9175431969',
      link: 'tel:+919175431969'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'connect.mis99@gmail.com',
      link: 'mailto:connect.mis99@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Padali Post Manikdoh, Tal-Junnar, Pune, Maharashtra 410502',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a question or ready to discuss your export-import needs? We're here to help.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground/70 hover:text-secondary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* GST Registration */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-background rounded-lg border border-border"
            >
              <p className="text-sm text-foreground/60 mb-2">GST Registration</p>
              <p className="text-lg font-semibold text-primary font-mono">27DHRPP673C1ZQ</p>
            </motion.div>

            {/* Brand Motto */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-secondary/30"
            >
              <p className="text-lg font-semibold text-primary italic">
                "Trust is our true currency"
              </p>
              <p className="text-sm text-foreground/70 mt-2">
                This principle guides every interaction and partnership we build.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                  Subject
                </label>
                <motion.select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <option value="">Select a subject</option>
                  <option value="Startup Support">Startup Support</option>
                  <option value="Business Support">Business Support</option>
                  <option value="Exim Support">Exim Support</option>
                  <option value="Growth Support">Growth Support</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Other">Other</option>
                </motion.select>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your business needs..."
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  whileHover={!submitted ? { scale: 1.02 } : {}}
                  whileTap={!submitted ? { scale: 0.98 } : {}}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
