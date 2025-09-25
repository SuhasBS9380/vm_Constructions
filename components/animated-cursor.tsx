"use client"

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let particleId = 0

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

      // Create new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: Math.random() * 0.5 + 0.5
      }

      setParticles(prev => [...prev.slice(-8), newParticle]) // Keep only last 8 particles
    }

    const mouseEnterButton = () => setIsHovering(true)
    const mouseLeaveButton = () => setIsHovering(false)

    window.addEventListener('mousemove', mouseMove)

    // Add event listeners for interactive elements
    const buttons = document.querySelectorAll('button, .cursor-pointer, a, input, textarea')
    buttons.forEach(button => {
      button.addEventListener('mouseenter', mouseEnterButton)
      button.addEventListener('mouseleave', mouseLeaveButton)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', mouseEnterButton)
        button.removeEventListener('mouseleave', mouseLeaveButton)
      })
    }
  }, [])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.1,
          scale: particle.scale * 0.95
        })).filter(particle => particle.opacity > 0)
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Animated particles trail */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: particle.x - 3,
            top: particle.y - 3,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
        </div>
      ))}

      {/* Main cursor follower - keeps default cursor visible */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-orange-500/40 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Outer glow effect */}
      <div
        className="fixed top-0 left-0 w-8 h-8 bg-orange-500/10 rounded-full pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 2 : 1})`,
        }}
      />

      {/* Ripple effect on hover */}
      {isHovering && (
        <div
          className="fixed top-0 left-0 w-12 h-12 border border-orange-500/20 rounded-full pointer-events-none z-30 animate-ping"
          style={{
            transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)`,
          }}
        />
      )}

      {/* Keep default cursor visible */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .animated-cursor-effects {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
