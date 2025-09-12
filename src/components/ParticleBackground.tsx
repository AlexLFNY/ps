'use client'

import { useEffect } from 'react'

export default function ParticleBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      // Random horizontal position
      particle.style.left = Math.random() * 100 + 'vw'
      
      // Random animation delay
      particle.style.animationDelay = Math.random() * 6 + 's'
      
      // Random size variation
      const size = 2 + Math.random() * 4
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      
      const container = document.getElementById('particles')
      if (container) {
        container.appendChild(particle)
        
        // Remove particle after animation
        setTimeout(() => {
          if (container.contains(particle)) {
            container.removeChild(particle)
          }
        }, 6000)
      }
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 200)
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100)
    }

    return () => clearInterval(interval)
  }, [])

  return null
}