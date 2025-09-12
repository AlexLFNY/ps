import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticleBackground from '@/components/ParticleBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Python Lessons - Apprendre Python en Seconde',
  description: 'Plateforme interactive pour apprendre la programmation Python au lycée',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="bg-animated" />
        <div className="particles" id="particles" />
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}