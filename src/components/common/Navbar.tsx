import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '../../context/NavigationContext'
import { 
  FaBars, 
  FaTimes, 
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      ]
    },
    { path: '/contacto', label: 'Contacto' },
  ]

  const isActive = (path: string) => location.pathname === path
  const isActiveSubmenu = (path: string) => location.pathname === path

  // Versión simplificada para mobile (sin submenús)
  const mobileNavLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/cobranzas', label: 'Cobranzas' },
    { path: '/derecho-laboral', label: 'Derecho Laboral' },
    { path: '/divorcios', label: 'Divorcios' },
    { path: '/familia', label: 'Familia' },
    { path: '/sucesiones', label: 'Sucesiones' },
    { path: '/contacto', label: 'Contacto' },
  ]

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
            {/* Logo - Versión mejorada */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <span className="text-2xl md:text-3xl font-serif font-bold text-gold">
                  Delgadillo
                </span>
                {/* Anillo decorativo */}
                <span className="absolute -inset-1 border border-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-white font-serif text-lg font-semibold leading-tight">
                  Delgadillo
                </span>
                <span className="block text-[10px] text-gold/70 font-medium tracking-wider uppercase">
                  Abogada
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Mejorado */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.path)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.submenu ? (
                    // Link con submenú
                    <>
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                          isActive(link.path)
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
                      
                      {/* Submenú */}
                      <AnimatePresence>
                        {activeDropdown === link.path && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-primary/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-black/30 py-2"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block px-4 py-2.5 text-sm transition-all duration-300 ${
                                  isActiveSubmenu(sub.path)
                                    ? 'text-gold bg-gold/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Link normal
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

              {/* Botón de contacto rápido */}
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

            {/* Mobile Menu Button - Mejorado */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-white text-2xl p-2 hover:bg-white/5 rounded-lg transition-colors relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
              {/* Indicador de menú abierto */}
              {isMenuOpen && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full"></span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu - Mejorado con animaciones */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-white/10">
                  {mobileNavLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
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
                  
                  {/* Contacto rápido en mobile */}
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

      {/* Espaciador para compensar el navbar fijo */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar