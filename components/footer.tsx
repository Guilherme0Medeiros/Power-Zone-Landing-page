import Link from 'next/link'
import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold tracking-tight">Power Zone</span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Treino com propósito, ambiente forte e evolução real. Sua melhor versão começa aqui.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:border-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:border-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:border-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#coaches" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Treinadores
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Conteúdos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">
              Política
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider">
              Loja
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#store" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Produtos Power Zone
                </Link>
              </li>
              <li>
                <Link href="#store" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Acessórios e Roupas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Power Zone. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}