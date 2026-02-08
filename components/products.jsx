'use client'

import { motion } from 'framer-motion'

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Premium Spices',
      description: 'Sourced directly from local farms to international industry networks. Premium quality spices for global markets.',
      image: '/spices.jpg',
      highlights: ['Local Sourcing', 'Global Standards', 'Quality Assured']
    },
    {
      id: 2,
      title: 'Dryfruit Laddoos',
      description: 'Premium health-focused export commodity. Traditional recipes with modern quality standards for discerning markets.',
      image: '/dryfruits.jpg',
      highlights: ['Health Focused', 'Premium Quality', 'Export Grade']
    },
    {
      id: 3,
      title: 'Engineering Goods',
      description: 'Specialized in Agro & Engineering trade. Industrial-grade products for international commerce and business.',
      image: '/engineering.jpg',
      highlights: ['Industrial Grade', 'Global Certified', 'Reliable Supply']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: { y: -10, transition: { duration: 0.3 } }
  }

  const buttonVariants = {
    hover: { scale: 1.05, brightness: 1.1 },
    tap: { scale: 0.95 }
  }

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Product Catalog
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover our range of premium export commodities connecting global markets
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" style={{
                background: 'radial-gradient(circle at top right, rgba(139, 69, 19, 0.15), transparent)',
                filter: 'blur(15px)'
              }}></div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-secondary/20 text-secondary px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                {/* <motion.button
                  className="w-full mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  Learn More
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
