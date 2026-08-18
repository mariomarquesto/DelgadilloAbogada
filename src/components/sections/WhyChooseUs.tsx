import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaClock, FaHandshake } from 'react-icons/fa'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaAward,
      title: '15+ Años de Experiencia',
      description: 'Trayectoria comprobada en derecho civil, laboral y sucesiones.'
    },
    {
      icon: FaUsers,
      title: 'Atención Personalizada',
      description: 'Cada caso recibe la dedicación y el tiempo que merece.'
    },
    {
      icon: FaClock,
      title: 'Respuesta Rápida',
      description: 'Te atendemos con celeridad sin descuidar la calidad.'
    },
    {
      icon: FaHandshake,
      title: 'Compromiso Total',
      description: 'Defendemos tus intereses con pasión y profesionalismo.'
    }
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2">
            Nuestros <span className="text-gold">Valores</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gold/10 to-transparent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="text-gold text-3xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs