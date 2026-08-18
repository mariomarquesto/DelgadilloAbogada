import { motion } from 'framer-motion'
import { 
  FaShieldAlt, 
  FaHandsHelping, 
  FaBalanceScale,
  FaAward,
  FaUsers,
  FaClock,
  FaGavel,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa'
import { MdVerified, MdSecurity, MdFamilyRestroom } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const AboutSection = () => {
  const stats = [
    { value: '15+', label: 'Años de Experiencia', icon: FaAward },
    { value: '500+', label: 'Casos Exitosos', icon: FaGavel },
    { value: '98%', label: 'Clientes Satisfechos', icon: FaStar },
    { value: '24/7', label: 'Disponibilidad', icon: FaClock }
  ]

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la transparencia y el compromiso con tus intereses.'
    },
    {
      icon: FaHandsHelping,
      title: 'Atención Personalizada',
      description: 'Cada caso es único y merece un abordaje particular con total dedicación.'
    },
    {
      icon: FaBalanceScale,
      title: 'Experiencia',
      description: 'Más de 15 años de trayectoria en derecho civil, laboral y sucesiones.'
    }
  ]

  const specialties = [
    {
      icon: MdVerified,
      title: 'Matriculada en Tucumán',
      description: 'Abogada con matrícula profesional en la provincia de Tucumán.'
    },
    {
      icon: MdSecurity,
      title: 'Compromiso Total',
      description: 'Defendemos tus intereses con pasión y profesionalismo.'
    },
    {
      icon: MdFamilyRestroom,
      title: 'Enfoque Familiar',
      description: 'Protegemos el núcleo familiar con sensibilidad y dedicación.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider mb-4">
            CONÓCEME
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-4">
            <span className="text-gold">Sandra Delgadillo</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Abogada con más de 15 años de experiencia, comprometida con brindar 
            un servicio legal de excelencia en Tucumán y la región.
          </p>
          
          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="flex items-center gap-2 text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10">
              <MdVerified className="text-gold" /> Matriculada
            </span>
            <span className="flex items-center gap-2 text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10">
              <FaGavel className="text-gold" /> 15+ años
            </span>
            <span className="flex items-center gap-2 text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10">
              <FaUsers className="text-gold" /> 500+ casos
            </span>
          </div>
        </motion.div>

        {/* Grid de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 text-center hover:transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="text-gold text-3xl group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Especialidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {specialties.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
              <item.icon className="text-gold text-2xl flex-shrink-0" />
              <div>
                <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-2xl border border-gold/20 text-center group hover:border-gold/50 transition-all"
            >
              <stat.icon className="text-gold text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA y Frase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gold/10 to-transparent p-8 rounded-2xl border border-gold/20"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="max-w-2xl">
              <FaQuoteLeft className="text-gold/30 text-2xl mb-2 mx-auto" />
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "Mi compromiso es brindar un servicio legal de excelencia, 
                con honestidad, dedicación y el más alto profesionalismo. 
                Cada caso es una oportunidad para hacer justicia."
              </p>
              <FaQuoteRight className="text-gold/30 text-2xl mt-2 mx-auto" />
              <p className="text-gold text-xs mt-4 font-medium">- Dra. Sandra Delgadillo</p>
            </div>
            
            <Link to="/contacto">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center gap-2">
                  Solicitar asesoría
                  <FaHandsHelping className="group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection