'use client'

import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight">VOLT FITNESS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
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

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          Cadastre-se Agora
        </Button>
      </div>
    </nav>
  )
}