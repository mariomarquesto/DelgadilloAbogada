import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeDScene from '../../components/ui/ThreeDScene'
import Button from '../../components/ui/Button'
import { 
  FaMoneyBillWave, 
  FaHandshake, 
  FaGavel, 
  FaShieldAlt,
  
  FaChartLine,
  FaCheckCircle,
  
  FaFileInvoice,
  FaBalanceScale,

  FaRocket
} from 'react-icons/fa'
import { MdVerified, MdSecurity, MdSpeed, MdAnalytics } from 'react-icons/md'

const Cobranzas = () => {
  const benefits = [
    {
      icon: FaRocket,
      title: 'Recuperación Rápida',
      description: 'Procesos ágiles y eficientes para recuperar tu dinero en el menor tiempo posible.'
    },
    {
      icon: FaShieldAlt,
      title: 'Seguridad Jurídica',
      description: 'Protección legal integral con estrategias probadas y efectivas.'
    },
    {
      icon: FaChartLine,
      title: 'Resultados Comprobados',
      description: 'Alto porcentaje de éxito en la recuperación de créditos y cobranzas.'
    }
  ]

  const services = [
    {
      icon: FaGavel,
      title: 'Cobranza Judicial',
      description: 'Iniciamos y gestionamos procesos judiciales para la recuperación efectiva de tus créditos.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: FaHandshake,
      title: 'Cobranza Extrajudicial',
      description: 'Negociación estratégica con deudores para lograr acuerdos sin necesidad de litigio.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: FaFileInvoice,
      title: 'Ejecución de Títulos',
      description: 'Ejecución de pagarés, cheques, facturas y todo tipo de títulos ejecutivos.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: FaBalanceScale,
      title: 'Juicios Ejecutivos',
      description: 'Representación en juicios ejecutivos y monitorios con altas tasas de éxito.',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const stats = [
    { value: '95%', label: 'Tasa de Recuperación', icon: MdAnalytics },
    { value: '48h', label: 'Respuesta Inicial', icon: MdSpeed },
    { value: '1000+', label: 'Casos Exitosos', icon: FaMoneyBillWave },
    { value: '98%', label: 'Clientes Satisfechos', icon: MdVerified }
  ]

  const advantages = [
    'Estrategias personalizadas para cada caso',
    'Seguimiento continuo y reportes detallados',
    'Negociación proactiva con deudores',
    'Protección de tus intereses comerciales',
    'Gestión integral del proceso de cobranza',
    'Honorarios basados en resultados'
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
              RECUPERACIÓN DE CRÉDITOS
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Cobranzas</span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-300 font-light">
                Recuperación de Créditos
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed font-light">
              Gestión eficiente de <span className="text-gold font-semibold">cobranzas judiciales y extrajudiciales</span>
            </p>

            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Protegemos tus intereses y recuperamos lo que te corresponde con la 
              máxima celeridad y profesionalismo. <span className="text-gold">Tu dinero en movimiento.</span>
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
                    <FaMoneyBillWave className="group-hover:scale-110 transition-transform" />
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
              <span className="text-gold">Ventajas</span> Competitivas
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

          {/* CTA de Confianza */}
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold">
                <MdSecurity />
              </div>
              <div>
                <h4 className="text-white font-semibold">Confianza Garantizada</h4>
                <p className="text-gray-400 text-sm">Protección legal en todo el proceso</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Nuestro equipo de expertos en cobranzas trabaja con la máxima 
              diligencia para asegurar la recuperación efectiva de tus créditos, 
              manteniéndote informado en cada etapa del proceso.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Estrategias personalizadas
              </span>
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Seguimiento continuo
              </span>
              <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                ✅ Resultados comprobados
              </span>
            </div>
          </div>
        </motion.div>

        {/* Proceso de Cobranza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-serif font-bold text-white text-center mb-8">
            <span className="text-gold">Proceso</span> de Cobranza
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Análisis', desc: 'Evaluación del caso y estrategia inicial' },
              { step: '2', title: 'Gestión', desc: 'Negociación y comunicación con el deudor' },
              { step: '3', title: 'Acción', desc: 'Inicio de acciones judiciales si es necesario' },
              { step: '4', title: 'Recuperación', desc: 'Cobro efectivo y cierre del caso' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 text-gold text-xl font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Cobranzas