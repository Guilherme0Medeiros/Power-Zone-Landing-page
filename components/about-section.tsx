'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Video ficticio*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="group relative aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/aboutsection/imagemvideo.jpg"
                alt="Treino na academia"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                <Button
                  size="lg"
                  className="h-16 w-16 rounded-full bg-primary p-0 text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-transform"
                >
                  <Play className="h-6 w-6 fill-current" />
                </Button>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                Sobre a Power Zone
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
                <span className="text-foreground">TREINO COM </span>
                <span className="text-foreground outline-text">PROPÓSITO</span>
                <br />
                <span className="text-foreground">RESULTADO </span>
                <span className="text-foreground">DE VERDADE</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              A Power Zone nasceu pra quem cansou de “começar na segunda”. Aqui você treina com um plano claro, acompanha sua evolução e sente diferença no corpo e na mente. Nosso espaço foi pensado pra performance: equipamentos prontos pra aguentar carga, treinos que respeitam seu ritmo e uma energia que puxa você pra frente. Seja pra ganhar força, secar, melhorar condicionamento ou só voltar a se sentir bem, você encontra um caminho simples: consistência, suporte e progresso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}