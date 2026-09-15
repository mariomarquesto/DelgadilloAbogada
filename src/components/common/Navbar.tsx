import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '../../context/NavigationContext'
import { FaBars, FaTimes, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll() // ejecutar al montar
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar dropdown y menú móvil al cambiar de ruta
  useEffect(() => {
    setActiveDropdown(null)
    closeMenu()
  }, [location.pathname, closeMenu])

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Cerrar menú móvil si se pasa a desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) closeMenu() }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [closeMenu])

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setActiveDropdown(null); closeMenu() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMenu])

  // Manejo del dropdown con delay para evitar cierres bruscos
  const handleMouseEnter = (path: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(path)
  }
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const navLinks = [
    { path: '/', label: 'Inicio' },
    {
      path: '/servicios',
      label: 'Servicios',
      submenu: [
        { path: '/cobranzas', label: 'Cobranzas' },
        { path: '/derecho-laboral', label: 'Derecho Laboral' },
        { path: '/divorcios', label: 'Divorcios' },
        { path: '/familia', label: 'Derecho de Familia' },
        { path: '/sucesiones', label: 'Sucesiones' },
      ],
    },
    { path: '/contacto', label: 'Contacto' },
  ]

  const mobileNavLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/cobranzas', label: 'Cobranzas' },
    { path: '/derecho-laboral', label: 'Derecho Laboral' },
    { path: '/divorcios', label: 'Divorcios' },
    { path: '/familia', label: 'Familia' },
    { path: '/sucesiones', label: 'Sucesiones' },
    { path: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path: string) => location.pathname === path
  const isServicesActive = () =>
    navLinks[1].submenu?.some((s) => s.path === location.pathname)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10'
            : 'bg-primary/80 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
              aria-label="Ir al inicio"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl md:text-3xl font-serif font-bold text-gold"
              >
                Delgadillo
              </motion.span>
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="text-white font-serif text-base font-semibold">
                  Estudio Jurídico
                </span>
                <span className="text-[10px] text-gold/70 font-medium tracking-wider uppercase">
                  Abogada
                </span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.submenu ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === link.path}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                          isActive(link.path) || isServicesActive()
                            ? 'text-gold bg-gold/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 ${
                            activeDropdown === link.path ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.path && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 pt-2 w-56"
                          >
                            {/* El padding-top actúa como "puente" para que no se cierre */}
                            <div className="bg-primary/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-black/30 py-2 overflow-hidden">
                              {link.submenu.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                                    isActive(sub.path)
                                      ? 'text-gold bg-gold/10'
                                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-gold bg-gold/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <motion.a
                href="https://wa.me/5493815544143"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 flex items-center gap-2 bg-gold text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
              >
                <FaWhatsapp size={16} />
                <span className="hidden xl:inline">Consultar</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-white text-2xl p-2 hover:bg-white/5 rounded-lg transition-colors relative"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
              {isMenuOpen && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-white/10">
                  {mobileNavLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive(link.path)
                            ? 'text-gold bg-gold/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-2 px-4">
                      <a
                        href="https://wa.me/5493815544143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500/20 text-green-400 py-2 rounded-lg text-sm font-medium hover:bg-green-500/30 transition-colors"
                      >
                        <FaWhatsapp size={16} />
                        WhatsApp
                      </a>
                      <Link
                        to="/contacto"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 bg-gold/10 text-gold py-2 rounded-lg text-sm font-medium hover:bg-gold/20 transition-colors"
                      >
                        <FaEnvelope size={14} />
                        Contacto
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Espaciador: usar la misma altura del navbar */}
      <div className="h-20" aria-hidden="true" />
    </>
  )
}

export default Navbar