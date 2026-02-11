'use client'

import { motion } from 'framer-motion'

const features = [
  {
    image: '/images/featuredsection/sessaomeio1.jpg',
    label: '',
    featured: false,
  },
  {
    image: '/images/featuredsection/sessaomeio2.jpg',
    label: 'CRIE SEU RITMO',
    featured: true,
  },
  {
    image: '/images/featuredsection/sessaomeio3.jpg',
    label: '',
    featured: false,
  },
]

export function FeaturedSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Em Destaque
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
            <span className="text-foreground">MUDE </span>
            <span className="text-muted-foreground outline-text">SEU CORPO</span>
            <br />
            <span className="text-foreground">REESCREVA </span>
            <span className="text-foreground outline-text">SUA HISTÓRIA!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                feature.featured ? 'md:scale-105 md:shadow-2xl' : ''
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.label || 'Treino e bem-estar'}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {feature.featured && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="rounded-full border-2 border-primary bg-primary/20 px-6 py-2 backdrop-blur-sm">
                    <span className="font-display text-lg font-bold text-primary">
                      {feature.label}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}