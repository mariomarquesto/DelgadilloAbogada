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

  // Loader SOLO en la primera carga (no en cada navegación)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, []) // ⬅️ sin dependencias → solo al montar

  const loadingMessages = [
    'Dra. Sandra Delgadillo',
    'Estudio Jurídico Delgadillo',
    'Justicia con vocación',
    'Abogada en Tucumán',
    '31 años de experiencia',
  ]

  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-primary relative">
      {/* LOADER - solo primera carga */}
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
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-6xl font-serif font-bold text-gold"
              >
                SD
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gold/60 text-sm font-serif tracking-widest"
              >
                Delgadillo Abogada
              </motion.p>

              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full bg-gold rounded-full"
                />
              </div>

              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-1"
              >
                <p className="text-gray-400 text-sm font-light tracking-wider">
                  {loadingMessages[messageIndex]}
                </p>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gold/40 text-xs font-light tracking-[0.2em]"
                >
                  ⚖️
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fondo decorativo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      {/* Contenido principal — SIN AnimatePresence */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <Outlet />
      </motion.main>

      <Footer />

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      >
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

        <motion.a
          href="https://wa.me/5493815544143?text=Hola%20Dra.%20Sandra%2C%20necesito%20asesor%C3%ADa%20legal"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></span>
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2">
            <FaWhatsapp size={28} />
            <span className="hidden sm:inline text-sm font-medium pr-1">
              Chatear ahora
            </span>
          </div>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default PublicLayout
