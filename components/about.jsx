'use client'

import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.3 }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              About Manisha International Solution
            </h2>

            <motion.div
              className="space-y-4 text-foreground/80"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                className="text-lg leading-relaxed"
                variants={textVariants}
              >
                Founded by <span className="font-semibold text-primary">Mr. Chaitanya Rajendra Papade</span>, Manisha International Solution is a premier global trade specialist dedicated to bridging the gap between local farms and factories with international markets.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed"
                variants={textVariants}
              >
                Based in <span className="font-semibold text-primary">Junnar, Pune</span>, we specialize in Agro and Engineering commodities, connecting quality producers with discerning buyers across the globe. Our expertise spans premium spices, dryfruit products, and industrial engineering goods.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed"
                variants={textVariants}
              >
                We understand the complexities of international trade and are committed to simplifying the export-import process for our partners. From startup support to scaling established businesses, we provide comprehensive advisory services that ensure sustainable growth.
              </motion.p>

              <motion.div
                className="pt-4 border-t border-border"
                variants={textVariants}
              >
                <p className="text-xl font-semibold text-secondary italic">
                  "Trust is our true currency"
                </p>
                <p className="text-sm text-foreground/60 mt-2">
                  This motto guides every decision we make and every relationship we build.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="px-6 py-4 bg-card border border-border rounded-lg" variants={textVariants}>
                <p className="text-sm text-foreground/60">Founded</p>
                <p className="text-2xl font-bold text-primary">2025</p>
              </motion.div>
              <motion.div className="px-6 py-4 bg-card border border-border rounded-lg" variants={textVariants}>
                <p className="text-sm text-foreground/60">Headquarters</p>
                <p className="text-lg font-bold text-primary">Junnar, Pune</p>
              </motion.div>
              <motion.div className="px-6 py-4 bg-card border border-border rounded-lg" variants={textVariants}>
                <p className="text-sm text-foreground/60">Specialty</p>
                <p className="text-lg font-bold text-primary">Global Trade</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/global-trade.jpg"
                alt="Global trade and international commerce"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
