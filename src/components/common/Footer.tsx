import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGavel,
  FaShieldAlt,
  FaAward
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/5493815544143', label: 'WhatsApp', color: 'hover:text-green-400' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' }
  ]

  const quickLinks = [
    { path: '/cobranzas', label: 'Cobranzas' },
    { path: '/derecho-laboral', label: 'Derecho Laboral' },
    { path: '/divorcios', label: 'Divorcios' },
    { path: '/familia', label: 'Derecho de Familia' },
    { path: '/sucesiones', label: 'Sucesiones' }
  ]

  const legalLinks = [
    { path: '/terminos', label: 'Términos y Condiciones' },
    { path: '/privacidad', label: 'Política de Privacidad' },
    { path: '/cookies', label: 'Política de Cookies' }
  ]

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1 - Información y Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block">
              <h3 className="text-2xl font-serif font-bold text-gold mb-2">
                Delgadillo
                <span className="text-xs text-gray-400 font-sans font-normal block mt-1">
                  ABOGADA
                </span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Asesoría jurídica integral con más de 15 años de experiencia en 
              derecho civil, laboral y sucesiones.
            </p>
            
            {/* Badges de confianza */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center gap-1 text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full">
                <FaShieldAlt className="text-gold text-xs" />
                Matriculada
              </span>
              <span className="flex items-center gap-1 text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full">
                <FaAward className="text-gold text-xs" />
                15+ años
              </span>
              <span className="flex items-center gap-1 text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full">
                <FaGavel className="text-gold text-xs" />
                500+ casos
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 bg-white/5 p-2 rounded-lg hover:bg-white/10`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Áreas de Práctica
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-gold transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3 - Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-gray-400 hover:text-gold transition-colors group">
                <FaMapMarkerAlt className="text-gold text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Av. Perón 148, Yerba Buena, Tucumán</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 hover:text-gold transition-colors group">
                <FaPhone className="text-gold text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+5493815544143" className="hover:text-gold transition-colors">
                  +54 9 381 554-4143
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 hover:text-gold transition-colors group">
                <FaEnvelope className="text-gold text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:sandra@delgadilloabogada.com" className="hover:text-gold transition-colors">
                  sandra@delgadilloabogada.com
                </a>
              </li>
            </ul>

            {/* Botón de contacto rápido */}
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-gold/10 hover:bg-gold/20 text-gold text-sm font-medium py-2 px-4 rounded-lg border border-gold/20 transition-all duration-300"
              >
                Enviar mensaje →
              </motion.button>
            </Link>
          </motion.div>

          {/* Columna 4 - Horarios y Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full"></span>
              Horarios
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-gray-400 py-1 border-b border-white/5">
                <span>Lunes - Viernes</span>
                <span className="text-gold font-medium">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400 py-1 border-b border-white/5">
                <span>Sábados</span>
                <span className="text-gold font-medium">10:00 - 13:00</span>
              </li>
              <li className="flex justify-between text-gray-400 py-1">
                <span>Domingos</span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>

            {/* Horario de atención con estado */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/5">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-400">Ahora mismo:</span>
                <span className="text-green-400 font-medium">Abierto</span>
              </div>
            </div>

            {/* Enlaces legales */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <ul className="flex flex-wrap gap-3 text-xs">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600 ml-1">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright con diseño mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} <span className="text-gold font-medium">Delgadillo Abogada</span>. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Desarrollado con ❤️ por <span className="text-gold/70">Estudio Jurídico Delgadillo</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer