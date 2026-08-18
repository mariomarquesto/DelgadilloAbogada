// components/sections/Hero.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import ThreeDScene from '../ui/ThreeDScene'
import ParticlesBackground from '../ui/ParticlesBackground'
import { 
  FaArrowRight, 
  FaGavel, 
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaAward,
  FaUsers
} from 'react-icons/fa'
import { MdVerified, MdSecurity } from 'react-icons/md'
import { useState, useEffect } from 'react'

const Hero = () => {
  // Texto para efecto de escritura
  const textLines = [
    'Sandra Delgadillo',
    'Abogada con vocación',
    '15 años de experiencia'
  ]
  const [displayText, setDisplayText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Efecto de escritura
  useEffect(() => {
    const currentText = textLines[lineIndex]
    
    if (!isDeleting && charIndex <= currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
      return () => clearTimeout(timer)
    } else if (isDeleting && charIndex >= 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 40)
      return () => clearTimeout(timer)
    } else if (!isDeleting && charIndex > currentText.length) {
      setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setLineIndex((prev) => (prev + 1) % textLines.length)
    }
  }, [charIndex, isDeleting, lineIndex])

  // Estadísticas de confianza
  const stats = [
    { value: '15+', label: 'Años de Experiencia', icon: FaAward, delay: 1.2 },
    { value: '98%', label: 'Casos Exitosos', icon: FaStar, delay: 1.3 },
    { value: '500+', label: 'Clientes Atendidos', icon: FaUsers, delay: 1.4 },
    { value: '24/7', label: 'Disponibilidad', icon: FaClock, delay: 1.5 }
  ]

  // Badges de confianza con colores aleatorios
  const trustBadges = [
    { icon: MdVerified, text: 'Matriculada en Tucumán', color: 'from-blue-500/20 to-cyan-500/20' },
    { icon: MdSecurity, text: 'Confidencialidad Garantizada', color: 'from-green-500/20 to-emerald-500/20' },
    { icon: FaCheckCircle, text: 'Atención Personalizada', color: 'from-purple-500/20 to-pink-500/20' }
  ]

  // Palabras clave con animación de flotación
  const keywords = ['Confianza', 'Experiencia', 'Compromiso', 'Resultados']

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background con overlay mejorado */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/30 via-transparent to-transparent"></div>
      </div>

      {/* Partículas 3D */}
      {typeof window !== 'undefined' && <ParticlesBackground />}

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-gold/10 text-7xl font-serif"
        >
          ⚖️
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-20 text-gold/10 text-6xl font-serif"
        >
          📜
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-10 text-gold/10 text-5xl"
        >
          ✨
        </motion.div>
      </div>

      <div className="relative container-custom py-16 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda - Contenido DINÁMICO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge Superior CON ANIMACIÓN */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 px-4 py-2 rounded-full"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              <span className="text-gold text-xs font-medium uppercase tracking-wider">
                Abogados en Tucumán
              </span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-gold text-xs"
              >
                ◆
              </motion.span>
            </motion.div>

            {/* Título Principal CON ESCRITURA ANIMADA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1]">
                <span className="block text-gold relative">
                  <motion.span
                    animate={{ 
                      textShadow: [
                        '0 0 20px rgba(201,169,110,0.1)',
                        '0 0 40px rgba(201,169,110,0.3)',
                        '0 0 20px rgba(201,169,110,0.1)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Dra. Sandra Delgadillo
                  </motion.span>
                  <motion.span
                    className="absolute -top-1 -right-6 text-2xl"
                    animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚖️
                  </motion.span>
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-200 font-light mt-2">
                  <motion.span
                    className="inline-block text-gold font-semibold"
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ❝
                  </motion.span>
                  <span className="text-gold font-semibold">Derecho con vocación</span>
                  <motion.span
                    className="inline-block text-gold font-semibold"
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    ❞
                  </motion.span>
                </span>
              </h1>

              {/* Subtítulo con efecto de escritura */}
              <motion.div 
                className="h-12 md:h-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light flex items-center gap-2">
                  <span className="text-gold text-2xl">✦</span>
                  <span className="min-w-[200px]">
                    <span className="border-r-2 border-gold animate-pulse pr-2">
                      {displayText}
                    </span>
                  </span>
                  <span className="text-gold/50 text-sm hidden md:inline">|</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Palabras clave flotantes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {keywords.map((word, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Descripción Detallada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                <span className="text-gold font-semibold">📍</span> Estudio jurídico en Tucumán. Especialistas en brindar soluciones 
                legales efectivas con un enfoque humano y estratégico.
              </p>
              
              {/* Dirección destacada CON ANIMACIÓN */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 hover:border-gold/30 transition-colors"
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaMapMarkerAlt className="text-gold" />
                <span className="text-gray-300 text-sm font-medium">
                  Av. Perón 148, Yerba Buena, Tucumán
                </span>
              </motion.div>
            </motion.div>

            {/* Trust Badges CON ANIMACIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-1.5 bg-gradient-to-r ${badge.color} bg-white/5 px-3 py-1.5 rounded-full border border-white/10`}
                >
                  <badge.icon className="text-gold text-xs" />
                  <span className="text-gray-400 text-xs">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* 🔥 Botones CTA - CON MÁS MOVIMIENTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link to="/contacto">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto group relative overflow-hidden shadow-xl shadow-gold/20"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-base font-semibold">
                      <motion.span
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaWhatsapp className="text-xl" />
                      </motion.span>
                      Solicitar asesoría ahora
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link to="/cobranzas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group"
                  >
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <FaGavel />
                      </motion.span>
                      Ver áreas de práctica
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Contacto rápido CON MOVIMIENTO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10"
            >
              {[
                { icon: FaPhone, text: '+54 9 381 554-4143', delay: 0 },
                { icon: FaClock, text: 'Lun a Vie 9-18hs', delay: 0.1 },
                { icon: FaGavel, text: 'Civil · Laboral · Sucesiones', delay: 0.2 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-400 group cursor-pointer hover:text-gold transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <item.icon className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha - 3D Scene con estadísticas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Contenedor 3D */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
              {typeof window !== 'undefined' && <ThreeDScene />}
            </div>

            {/* Estadísticas flotantes CON ANIMACIÓN INDIVIDUAL */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: stat.delay,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(201,169,110,0.2)"
                  }}
                  className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-center hover:border-gold/30 transition-all group"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="text-gold text-lg mx-auto mb-1"
                  >
                    <stat.icon />
                  </motion.div>
                  <motion.div 
                    className="text-lg md:text-xl font-bold text-gold"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator CON MOVIMIENTO */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          repeat: Infinity,
          duration: 2
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs uppercase tracking-widest"
          >
            Desplázate
          </motion.span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-2.5 bg-gold rounded-full mt-1"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero