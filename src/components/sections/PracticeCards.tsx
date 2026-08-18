// components/ui/ParticlesBackground.tsx - VERSIÓN SIMPLE (sin Three.js)
import { motion } from 'framer-motion'

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Puntos decorativos simples */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticlesBackground