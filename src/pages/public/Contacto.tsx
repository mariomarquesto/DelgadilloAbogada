import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../../components/ui/Button'
import ThreeDScene from '../../components/ui/ThreeDScene'
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    area: 'seleccionar'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Teléfono',
      content: '+54 9 381 554-4143',
      link: 'tel:+5493815544143'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+54 9 381 554-4143',
      link: 'https://wa.me/5493815544143'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'sandra@delgadilloabogada.com',
      link: 'mailto:sandra@delgadilloabogada.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Dirección',
      content: 'Av. Perón 148, Yerba Buena, Tucumán',
      link: 'https://maps.google.com'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-primary to-primary/95"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda - Formulario */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wider"
            >
              CONTACTO
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Hablemos</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Completa el formulario y te responderemos a la brevedad. 
              <span className="text-gold block mt-2">Tu consulta es importante para nosotros.</span>
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre completo"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="381 555-1234"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Área de interés
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="seleccionar">Selecciona un área</option>
                  <option value="laboral">Derecho Laboral</option>
                  <option value="familia">Derecho de Familia</option>
                  <option value="divorcios">Divorcios</option>
                  <option value="sucesiones">Sucesiones</option>
                  <option value="cobranzas">Cobranzas</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Cuéntanos sobre tu caso..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Enviar mensaje
              </Button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center text-sm"
                >
                  <FaCheckCircle className="inline-block mr-2" />
                  ¡Mensaje enviado con éxito! Te responderemos a la brevedad.
                </motion.div>
              )}
            </form>

            {/* Confianza */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-gold" /> Datos protegidos
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-gold" /> Respuesta en 24h
              </span>
            </div>
          </motion.div>

          {/* Columna Derecha - Info y 3D */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* 3D Scene */}
            <div className="h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
              <ThreeDScene />
            </div>

            {/* Información de Contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.icon === FaWhatsapp ? '_blank' : undefined}
                  rel={info.icon === FaWhatsapp ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-gold/30 transition-all group"
                >
                  <info.icon className="text-gold text-2xl mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white text-sm font-semibold">{info.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Horarios */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaClock className="text-gold" />
                Horarios de Atención
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Lunes - Viernes</span>
                  <span className="text-gold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sábados</span>
                  <span className="text-gold">10:00 - 13:00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Domingos</span>
                  <span className="text-gray-500">Cerrado</span>
                </div>
              </div>
            </motion.div>

            {/* Botón de Whatsapp directo */}
            <motion.a
              href="https://wa.me/5493815544143"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="block bg-green-600/20 hover:bg-green-600/30 text-center p-4 rounded-xl border border-green-500/30 transition-all group"
            >
              <span className="flex items-center justify-center gap-2 text-green-400">
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold">WhatsApp Directo</span>
                <span className="text-xs text-green-400/70">Respondemos en minutos</span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacto