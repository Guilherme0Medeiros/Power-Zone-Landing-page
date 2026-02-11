'use client'

import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-primary md:h-6 md:w-6" />
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">Power Zone</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="#coaches" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Treinadores
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre nós
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </Link>
          <Link href="#store" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Loja
          </Link>
          <Link href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm md:text-base px-3 py-2 md:px-4 md:py-2">
          <span className="hidden sm:inline">Cadastre-se Agora</span>
          <span className="sm:hidden">Cadastre-se</span>
        </Button>
      </div>
    </nav>
  )
}
