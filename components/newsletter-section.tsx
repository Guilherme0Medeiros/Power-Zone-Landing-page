'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-primary p-12 md:p-16"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-foreground/10" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary-foreground/10" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              ENTRE PARA A POWER ZONE
            </h2>
            <p className="mb-8 text-base text-primary-foreground/90">
              Receba dicas práticas, treinos e novidades para manter o foco e evoluir de verdade.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                className="h-12 flex-1 border-primary-foreground/20 bg-background/10 text-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                Quero Participar
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}