import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeDScene from '../../components/ui/ThreeDScene'
import Button from '../../components/ui/Button'
import { 
  FaHeart, 
  FaHandsHelping, 
  FaGavel,
  FaClock,
  FaCheckCircle,
  FaUserFriends,
  FaBalanceScale,
  FaChild,
  FaHome,
  FaFileContract
} from 'react-icons/fa'
import {  MdSecurity, MdSpeed, MdFamilyRestroom } from 'react-icons/md'

const Divorcios = () => {
  const benefits = [
    {
      icon: FaHeart,
      title: 'Acompañamiento Emocional',
      description: 'Entendemos la sensibilidad del proceso y te brindamos apoyo integral.'
    },
    {
      icon: FaHandsHelping,
      title: 'Soluciones Justas',
      description: 'Buscamos acuerdos equitativos que protejan tus intereses y los de tu familia.'
    },
    {
      icon: FaClock,
      title: 'Proceso Ágil',
      description: 'Optimizamos los tiempos para que puedas cerrar esta etapa y seguir adelante.'
    }
  ]

  const services = [
    {
      icon: FaGavel,
      title: 'Divorcio Express (Unilateral)',
      description: 'Proceso rápido y eficiente para divorcios sin necesidad de acuerdo mutuo.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: FaHandsHelping,
      title: 'Divorcio de Mutuo Acuerdo',
      description: 'Acuerdos consensuados que benefician a ambas partes y agilizan el proceso.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: FaChild,
      title: 'Régimen de Visitas',
      description: 'Protección del vínculo entre padres e hijos con acuerdos personalizados.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: FaBalanceScale,
      title: 'Acuerdos de Alimentos',
      description: 'Establecimiento justo de cuotas alimentarias para el bienestar de los hijos.',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const stats = [
    { value: '98%', label: 'Acuerdos Exitosos', icon: FaHandsHelping },
    { value: '2-3', label: 'Meses de Duración', icon: MdSpeed },
    { value: '500+', label: 'Familias Asesoradas', icon: MdFamilyRestroom },
    { value: '100%', label: 'Confidencialidad', icon: MdSecurity }
  ]

  const advantages = [
    'Asesoría personalizada en cada etapa del proceso',
    'Mediación y conciliación para acuerdos justos',
    'Protección de los derechos de los hijos',
    'Acuerdos de alimentos y visitas equitativos',
    'Divorcio express en tiempo récord',
    'Acompañamiento post-divorcio'
  ]

  const steps = [
    {
      icon: FaUserFriends,
      title: 'Primera Consulta',
      desc: 'Evaluación del caso y definición de estrategia'
    },
    {
      icon: FaFileContract,
      title: 'Acuerdos',
      desc: 'Negociación y redacción de acuerdos'
    },
    {
      icon: FaGavel,
      title: 'Trámite Legal',
      desc: 'Presentación y seguimiento del proceso'
    },
    {
      icon: FaHome,
      title: 'Nuevo Comienzo',
      desc: 'Cierre del proceso y asesoría post-divorcio'
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
              DERECHO DE FAMILIA
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Divorcios</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed font-light">
              Asesoría integral con <span className="text-gold font-semibold">sensibilidad y profesionalismo</span>
            </p>

            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Te acompañamos en todo el proceso de divorcio, protegiendo tus derechos 
              y los de tu familia con la máxima dedicación y empatía. 
              <span className="text-gold"> Un nuevo comienzo con el respaldo legal que mereces.</span>
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
                    <FaHeart className="group-hover:scale-110 transition-transform" />
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

        {/* Ventajas Competitivas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Lista de ventajas */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-serif font-bold text-white mb-6">
              <span className="text-gold">Ventajas</span> de nuestro servicio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <FaCheckCircle className="text-gold text-sm mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA de Apoyo */}
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold">
                <MdFamilyRestroom />
              </div>
              <div>
                <h4 className="text-white font-semibold">Acompañamiento Integral</h4>
                <p className="text-gray-400 text-sm">No estás solo en este proceso</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Entendemos que el divorcio es un momento delicado. Por eso, ofrecemos 
              un acompañamiento profesional con sensibilidad, asegurando que tus 
              derechos y los de tu familia estén protegidos en todo momento.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Atención personalizada
              </span>
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Confidencialidad total
              </span>
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Soluciones justas
              </span>
            </div>
          </div>
        </motion.div>

        {/* Proceso de Divorcio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-serif font-bold text-white text-center mb-8">
            <span className="text-gold">Proceso</span> de Divorcio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/20 text-gold text-2xl flex items-center justify-center mx-auto mb-3">
                  <item.icon />
                </div>
                <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mensaje de apoyo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm italic">
            "El divorcio no es el final de un camino, sino el comienzo de uno nuevo. 
            Te acompañamos para que ese nuevo camino esté lleno de paz y certeza."
          </p>
          <p className="text-gold text-xs mt-2 font-medium">- Dra. Sandra Delgadillo</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Divorcios