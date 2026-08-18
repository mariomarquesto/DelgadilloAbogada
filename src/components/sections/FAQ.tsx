import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Qué servicios legales ofrecen?',
      answer: 'Ofrecemos asesoramiento y representación en derecho civil, laboral, sucesiones, divorcios, cobranzas y derecho de familia. Cada caso recibe un enfoque personalizado.'
    },
    {
      question: '¿Cómo puedo solicitar una consulta?',
      answer: 'Puedes contactarnos a través del formulario en nuestra página de contacto, llamarnos al +54 9 381 554-4143 o visitarnos en Av. Perón 148, Yerba Buena, Tucumán.'
    },
    {
      question: '¿Cuáles son los honorarios?',
      answer: 'Los honorarios se determinan según la complejidad de cada caso. Ofrecemos una primera consulta gratuita para evaluar tu situación y brindarte un presupuesto claro.'
    },
    {
      question: '¿Atienden solo en Tucumán?',
      answer: 'Si bien tenemos nuestra sede en Tucumán, atendemos casos en toda la región, incluyendo Salta, Jujuy y Santiago del Estero, con la misma calidad y compromiso.'
    },
    {
      question: '¿Cuánto tiempo dura un proceso de divorcio?',
      answer: 'El tiempo varía según el tipo de divorcio. El divorcio express puede resolverse en 60-90 días, mientras que un divorcio de mutuo acuerdo puede ser más rápido. Te asesoramos sobre el mejor camino según tu caso.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2">
            <span className="text-gold">FAQ</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="text-gold flex-shrink-0 ml-4">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ