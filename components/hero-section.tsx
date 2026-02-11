'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2">
        {/* conteudo da esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Disciplina Hoje, Vitória Amanhã
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tighter lg:text-7xl">
              <span className="text-foreground">CONSTRUA</span>
              <br />
              <span className="text-foreground">SEU MELHOR</span>
              <br />
              <span className="text-foreground outline-text">CORPO</span>
              <br />
              <span className="text-foreground outline-text">HOJE</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Na Power Zone, cada treino é um passo rumo à sua melhor versão.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent">
              <Play className="h-4 w-4" />
              Como Funciona
            </Button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-foreground">1000</p>
              <p className="text-sm text-muted-foreground">Alunos Ativos</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground">Treinadores</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </motion.div>

        {/* Conteudo da direita imagem */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="/images/herosection/garotafitness.jpg"
              alt="Modelo fitness"
              className="h-full w-full object-cover"
            />
            {/* aneis verdes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                className="absolute h-[80%] w-[80%] rounded-full border-2 border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                className="absolute h-[60%] w-[60%] rounded-full border-2 border-primary/40"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}