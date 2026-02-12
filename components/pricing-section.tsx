'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Plano Diário',
    price: 'R$ 15',
    featured: false,
    features: [
      'Acesso liberado no dia',
      'Treine em qualquer horário disponível',
      'Ambiente completo para força e cardio',
    ],
  },
  {
    name: 'Plano Mensal',
    price: 'R$ 150',
    featured: true,
    features: [
      'Acesso ilimitado durante o mês',
      'Avaliação inicial e ajuste de treino',
      'Aulas coletivas incluídas',
    ],
  },
  {
    name: 'Plano Anual',
    price: 'R$ 1200',
    featured: false,
    features: [
      'Melhor custo-benefício do ano',
      'Benefícios e condições especiais',
      'Suporte para manter consistência',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
            Planos e Valores
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
            <span className="text-foreground">ESCOLHA </span>
            <span className="text-muted-foreground outline-text">O PLANO </span>
            <span className="text-foreground outline-text">CERTO</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg border ${
                plan.featured
                  ? 'border-primary bg-card scale-105 shadow-2xl'
                  : 'border-border bg-card'
              } p-8`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-transparent border-border hover:bg-secondary'
                  }`}
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}