'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Users, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'EQUIPAMENTOS DE ALTO NÍVEL',
    description: 'Máquinas modernas, pesos livres e áreas bem montadas para força, cardio e treinos funcionais sem aperto.',
  },
  {
    icon: Users,
    title: 'TREINO COM ACOMPANHAMENTO',
    description: 'Orientação de verdade: ajustes de execução, plano progressivo e suporte para você evoluir com segurança.',
  },
  {
    icon: Heart,
    title: 'AMBIENTE QUE TE PUXA PRA CIMA',
    description: 'Uma comunidade que motiva, sem julgamento. Aqui todo mundo treina junto, cada um no seu ritmo.',
  },
  {
    icon: Clock,
    title: 'HORÁRIOS FLEXÍVEIS',
    description: 'Treine quando der: horários amplos e estrutura prática pra encaixar academia na sua rotina.',
  },
]

export function WhyChooseUs() {
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
            Por que a Power Zone
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
            <span className="text-foreground">ALIMENTE </span>
            <span className="text-foreground outline-text">SUA META</span>
            <br />
            <span className="text-foreground">ACENDA </span>
            <span className="text-foreground outline-text">SUA FORÇA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}