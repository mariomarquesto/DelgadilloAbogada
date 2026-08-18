import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeDScene from '../../components/ui/ThreeDScene'
import Button from '../../components/ui/Button'
import { 
  FaShieldAlt, 
  FaBriefcase, 
  FaHandshake, 
  FaGavel,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaAward,
  FaFileInvoice,
  FaUserTie,
  FaBalanceScale
} from 'react-icons/fa'
import { MdVerified, MdSecurity, MdSpeed } from 'react-icons/md'

const DerechoLaboral = () => {
  const benefits = [
    {
      icon: FaShieldAlt,
      title: 'Protección Integral',
      description: 'Defendemos tus derechos laborales con la máxima dedicación y expertise legal.'
    },
    {
      icon: FaClock,
      title: 'Respuesta Rápida',
      description: 'Actuamos con celeridad para proteger tus intereses en todo momento.'
    },
    {
      icon: FaHandshake,
      title: 'Negociación Efectiva',
      description: 'Logramos acuerdos justos y beneficiosos para nuestros clientes.'
    }
  ]

  const services = [
    {
      icon: FaFileInvoice,
      title: 'Despidos e Indemnizaciones',
      description: 'Reclamo de indemnizaciones por despido injustificado, discriminación o violación de derechos laborales.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: FaUserTie,
      title: 'Accidentes Laborales',
      description: 'Reclamos por accidentes de trabajo, enfermedades profesionales y riesgos laborales.',
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      icon: FaBalanceScale,
      title: 'Juicios Laborales',
      description: 'Representación en todas las instancias judiciales laborales con altos índices de éxito.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: FaUsers,
      title: 'Derechos Colectivos',
      description: 'Defensa de derechos de trabajadores en conflictos colectivos y sindicales.',
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ]

  const stats = [
    { value: '15+', label: 'Años de Experiencia', icon: FaAward },
    { value: '98%', label: 'Tasa de Éxito', icon: MdVerified },
    { value: '500+', label: 'Casos Resueltos', icon: FaBriefcase },
    { value: '24/7', label: 'Disponibilidad', icon: MdSpeed }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-primary to-primary/95"
    >
      <div className="container-custom">
        {/* Hero de la página */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna Izquierda - Contenido */}
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
              ESPECIALIDAD LEGAL
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Derecho</span>
              <br />
              <span className="text-gold">Laboral</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed font-light">
              Defensa integral de <span className="text-gold font-semibold">tus derechos laborales</span>
            </p>

            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Asesoramiento y representación en conflictos laborales, despidos, 
              indemnizaciones y todo tipo de reclamos relacionados con el ámbito 
              del trabajo. <span className="text-gold">Protegemos tu futuro profesional.</span>
            </p>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-gold/30 transition-all text-center"
                >
                  <benefit.icon className="text-gold text-2xl mx-auto mb-2" />
                  <h4 className="text-white text-sm font-semibold">{benefit.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Lista de servicios */}
            <div className="space-y-3 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`p-4 rounded-xl bg-gradient-to-r ${service.color} bg-white/5 border border-white/5 hover:border-gold/30 transition-all group`}
                >
                  <div className="flex items-start gap-3">
                    <service.icon className="text-gold text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  <span className="flex items-center gap-2">
                    Consultar ahora
                    <FaHandshake className="group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <FaGavel />
                    Ver más áreas
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Columna Derecha - 3D Scene */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            <ThreeDScene />
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:border-gold/30 transition-all group"
            >
              <stat.icon className="text-gold text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gold/5 to-transparent p-8 rounded-2xl border border-gold/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold">
                <MdSecurity />
              </div>
              <div>
                <h4 className="text-white font-semibold">Confianza y Respaldo</h4>
                <p className="text-gray-400 text-sm">Más de 15 años defendiendo los derechos de los trabajadores</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                <FaCheckCircle className="text-gold" /> Asesoría personalizada
              </span>
              <span className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                <FaCheckCircle className="text-gold" /> Honorarios justos
              </span>
              <span className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                <FaCheckCircle className="text-gold" /> Resultados comprobados
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DerechoLaboral