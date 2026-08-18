// components/ui/ThreeDScene.tsx
import { motion } from 'framer-motion'

const ThreeDScene = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-primary/50 to-primary/30 border border-gold/10 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-center"
      >
        <div className="text-7xl md:text-8xl font-serif font-bold text-gold/80 mb-4">
          SD
        </div>
        <div className="text-gold/40 text-xs font-light tracking-[0.3em] uppercase">
          Delgadillo Abogada
        </div>
        <div className="mt-4 text-4xl text-gold/20">
          ⚖️
        </div>
      </motion.div>
    </div>
  )
}

export default ThreeDScene