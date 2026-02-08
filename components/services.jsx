'use client';

import { Briefcase, Rocket, TrendingUp, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: 'Business Support',
      description: 'Comprehensive business advisory services to establish and grow your enterprise in the global market.'
    },
    {
      id: 2,
      icon: Rocket,
      title: 'Startup Support',
      description: 'Expert guidance for startups entering international trade. From registration to market entry, we support your journey.'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Scale your business with our proven strategies and market connections. Accelerate your growth trajectory.'
    },
    {
      id: 4,
      icon: Globe,
      title: 'Exim Support',
      description: 'End-to-end export-import support. Documentation, logistics, compliance - we handle the complexities of global trade.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  }

  const buttonVariants = {
    hover: { scale: 1.05, brightness: 1.1 },
    tap: { scale: 0.95 }
  }

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive support tailored to help your business thrive in international markets
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="p-8 bg-background rounded-lg border border-border hover:border-secondary hover:shadow-2xl transition-all relative"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  background: 'radial-gradient(circle at top right, rgba(139, 69, 19, 0.1), transparent)',
                  filter: 'blur(10px)'
                }}></div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-primary font-semibold mb-6">
            Trust is our true currency
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
