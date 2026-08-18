import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { FaWhatsapp } from 'react-icons/fa'

const PublicLayout = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Simular carga de página
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-primary relative">
      {/* LOADER GLOBAL - Personalizado */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Logo SD con animación */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl font-serif font-bold text-gold"
              >
                SD
              </motion.div>

              {/* Subtexto de marca */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gold/60 text-sm font-serif tracking-widest"
              >
                Delgadillo Abogada
              </motion.p>
              
              {/* Barra de carga */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full bg-gold rounded-full"
                />
              </div>
              
              {/* Mensaje de carga - Personalizado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-1"
              >
                <p className="text-gray-400 text-sm font-light tracking-wider">
                  Preparando tu asesoría legal
                </p>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gold/50 text-xs font-light tracking-[0.2em]"
                >
                  Justicia con vocación
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fondo con efecto de gradiente sutil */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Contenido principal con animaciones mejoradas */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button con diseño mejorado */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1.5,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      >
        {/* Tooltip flotante */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 hidden sm:block"
        >
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Disponible 24/7
          </span>
        </motion.div>

        {/* Botón WhatsApp */}
        <motion.a
          href="https://wa.me/5493815544143?text=Hola%20Dra.%20Sandra%2C%20necesito%20asesor%C3%ADa%20legal"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(37, 211, 102, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Efecto de pulso */}
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></span>
          
          {/* Botón principal */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2">
            <FaWhatsapp size={28} />
            <span className="hidden sm:inline text-sm font-medium pr-1">
              Chatear ahora
            </span>
          </div>
        </motion.a>
      </motion.div>

      {/* Barra de progreso de scroll (opcional) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          transformOrigin: '0%',
        }}
      />
    </div>
  )
}

export default PublicLayout