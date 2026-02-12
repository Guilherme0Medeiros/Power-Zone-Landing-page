'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    rating: 5,
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it's a good channel for us.",
    author: 'Leslie Alexander',
    role: 'Founder',
    avatar: '/placeholder-user.jpg',
  },
  {
    rating: 5,
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it's a good channel for us.",
    author: 'Leslie Alexander',
    role: 'Founder',
    avatar: '/placeholder-user.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Our Blog
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
            <span className="text-foreground">EXPLORE </span>
            <span className="text-foreground outline-text">OUR ARTICLES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
