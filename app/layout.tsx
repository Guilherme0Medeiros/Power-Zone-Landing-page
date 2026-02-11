import React from "react"
import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata: Metadata = {
  title: 'Power Zone - Transforme Sua Jornada Fitness',
  description: 'Step into a community dedicated to transforming bodies and lives. Join our gym for personalized training programs, expert guidance, and state-of-the-art facilities.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
