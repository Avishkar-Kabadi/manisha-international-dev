'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <h1 className="text-2xl font-bold text-white">
              <a href="/"> MIS</a>
            </h1>
            <p className="text-xs text-secondary -mt-1">Global Trade</p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-white hover:text-secondary transition-colors font-medium"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={navVariants}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            Get Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 border-t border-primary-foreground/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-white hover:text-secondary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
