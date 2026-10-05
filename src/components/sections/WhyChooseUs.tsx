// components/sections/WhyChooseUs.tsx
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaClock, FaHandshake, FaMedal } from 'react-icons/fa'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaAward,
      title: '31+ Años de Experiencia',
      description: 'Trayectoria comprobada en derecho civil, laboral y sucesiones.'
    },
    {
      icon: FaMedal,
      isSilver: true, // 👈 Identificador para que solo esta tarjeta use plata
      title: 'Medalla Bodas de Plata',
      description: 'Reconocimiento del Colegio de Abogados de Tucumán en 2020 por 25 años de ejercicio.'
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
          <p className="text-gray-300 text-lg mt-4">
            Más de tres décadas de compromiso con la justicia y el servicio a la comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div 
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform bg-gradient-to-br ${
                  reason.isSilver 
                    ? 'from-slate-300/20 to-slate-500/5 border border-slate-300/30' 
                    : 'from-gold/10 to-transparent'
                }`}
              >
                <reason.icon 
                  className={`text-3xl ${reason.isSilver ? 'text-slate-300' : 'text-gold'}`} 
                />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 🏅 Badge de Medalla de Plata destacado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-300/10 to-slate-400/5 px-6 py-3 rounded-full border border-slate-300/30">
            <FaMedal className="text-slate-300 text-xl" />
            <span className="text-slate-200 text-sm font-medium">
              Medalla Bodas de Plata 2020 · +31 años de trayectoria
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs