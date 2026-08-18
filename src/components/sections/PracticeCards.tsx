import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGavel, FaBriefcase, FaHeart, FaHands, FaUsers, FaScaleBalanced } from 'react-icons/fa6'

const PracticeCards = () => {
  const practices = [
    {
      icon: FaGavel,
      title: 'Cobranzas',
      description: 'Recuperación de créditos judicial y extrajudicial.',
      link: '/cobranzas',
      color: 'from-gold/20 to-transparent'
    },
    {
      icon: FaBriefcase,
      title: 'Derecho Laboral',
      description: 'Defensa de derechos laborales e indemnizaciones.',
      link: '/derecho-laboral',
      color: 'from-blue-500/20 to-transparent'
    },
    {
      icon: FaHeart,
      title: 'Divorcios',
      description: 'Procesos de divorcio express y de mutuo acuerdo.',
      link: '/divorcios',
      color: 'from-pink-500/20 to-transparent'
    },
    {
      icon: FaUsers,
      title: 'Derecho de Familia',
      description: 'Alimentos, visitas y protección familiar.',
      link: '/familia',
      color: 'from-green-500/20 to-transparent'
    },
    {
      icon: FaScaleBalanced,
      title: 'Sucesiones',
      description: 'Herencia, testamentos y partición de bienes.',
      link: '/sucesiones',
      color: 'from-purple-500/20 to-transparent'
    },
    {
      icon: FaHands,
      title: 'Mediación',
      description: 'Resolución alternativa de conflictos.',
      link: '/contacto',
      color: 'from-orange-500/20 to-transparent'
    }
  ]

  return (
    <section className="py-20 bg-primary/90">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">
            Áreas de Práctica
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2">
            Especialidades <span className="text-gold">Legales</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4">
            Ofrecemos asesoramiento integral en diversas ramas del derecho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={practice.link}>
                <div className={`bg-gradient-to-br ${practice.color} bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 h-full`}>
                  <practice.icon className="text-gold text-4xl mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeCards