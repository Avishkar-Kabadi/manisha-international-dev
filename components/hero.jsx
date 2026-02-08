'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    }
  }

  const buttonsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      <img
        src="/hero-port.jpg"
        alt="Global trade and logistics port"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60"></div>

      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Start Your Business with Business Setup Advisory in India
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-yellow-100 mb-8 text-balance max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Quality Commodities. Global Trade. From Farms & Factories to Global Markets.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
          >
            <motion.button
              className="px-8 py-3 bg-secondary hover:bg-yellow-500 text-primary font-semibold rounded-lg transition-colors"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <a href="/#products" className="text-white hover:text-secondary transition-colors">              Explore Products</a>
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <a href="/#contact" className="text-white hover:text-secondary transition-colors"> Get in Touch</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
