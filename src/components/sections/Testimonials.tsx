import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María López',
      role: 'Cliente',
      text: 'La Dra. Delgadillo me acompañó en todo el proceso de divorcio. Siempre disponible y con una calidez que agradezco profundamente.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Cliente',
      text: 'Excelente asesoramiento en mi caso laboral. Obtuvimos una indemnización justa gracias a su dedicación y conocimiento.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Cliente',
      text: 'La mejor abogada en sucesiones que he conocido. Todo el proceso fue claro y transparente. Muy recomendable.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-primary/95">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2">
            Lo que dicen <span className="text-gold">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials