// components/sections/RecognitionSection.tsx
import { motion } from 'framer-motion'
import { FaMedal, FaTrophy, FaStar, FaAward, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const RecognitionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary via-primary/98 to-primary relative overflow-hidden">
      {/* Fondo decorativo original en dorado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge superior */}
          <div className="text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-gold/20 to-yellow-500/10 text-gold px-6 py-2 rounded-full text-sm font-medium uppercase tracking-[0.2em] border border-gold/30">
              ✦ RECONOCIMIENTO PROFESIONAL ✦
            </span>
          </div>

          {/* Medalla gigante en plateado ultra fashion y brillante */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 5, -5, 0],
                boxShadow: [
                  '0 0 35px rgba(241,245,249,0.3)',
                  '0 0 70px rgba(241,245,249,0.6)',
                  '0 0 35px rgba(241,245,249,0.3)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-400 border-[6px] border-white/90 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              {/* Reflejo interno de brillo */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
              
              <FaMedal className="text-slate-900 text-6xl md:text-7xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] z-10" />
              
              {/* Anillos decorativos plateados brillantes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border-2 border-dashed border-slate-200/50 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-slate-200/25 rounded-full"
              />
            </motion.div>
          </div>

          {/* Título principal con la palabra "Plata" en plateado fashion */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-white mb-6"
          >
            <span className="text-gold">Medalla Bodas de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
              Plata
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 text-center mb-4 font-light"
          >
            Otorgada por el <span className="text-gold font-semibold">Colegio de Abogados de Tucumán</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed mb-12"
          >
            En el año <span className="text-gold font-medium">2020</span>, al cumplir 
            <span className="text-gold font-medium"> 25 años de ejercicio profesional</span> con 
            dedicación, ética y compromiso con la justicia. Un honor que refleja una vida 
            dedicada al derecho y al servicio de la comunidad.
          </motion.p>

          {/* Tarjetas de logros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-transparent p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all text-center"
            >
              <FaTrophy className="text-gold text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-gold mb-1">31+</p>
              <p className="text-white text-sm font-semibold">Años de Ejercicio</p>
              <p className="text-gray-400 text-xs mt-1">Trayectoria ininterrumpida</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-transparent p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all text-center"
            >
              <FaStar className="text-gold text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-gold mb-1">2020</p>
              <p className="text-white text-sm font-semibold">Medalla de Plata</p>
              <p className="text-gray-400 text-xs mt-1">Bodas de Plata</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-transparent p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all text-center"
            >
              <FaAward className="text-gold text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-gold mb-1">25</p>
              <p className="text-white text-sm font-semibold">Años al Recibirla</p>
              <p className="text-gray-400 text-xs mt-1">Bodas de Plata</p>
            </motion.div>
          </div>

          {/* Frase inspiradora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-gold/10 via-gold/5 to-transparent p-8 rounded-2xl border border-gold/20 max-w-3xl mx-auto"
          >
            <FaQuoteLeft className="text-gold/30 text-2xl mb-3 mx-auto" />
            <p className="text-gray-300 text-lg italic leading-relaxed">
              "Más de tres décadas dedicadas al derecho y al servicio de la comunidad. 
              Este reconocimiento es un honor que me compromete a seguir trabajando 
              con la misma pasión y dedicación."
            </p>
            <FaQuoteRight className="text-gold/30 text-2xl mt-3 mx-auto" />
            <p className="text-gold text-sm mt-4 font-medium">- Dra. Sandra Delgadillo</p>
          </motion.div>

          {/* Badges de certificación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              'Matriculada en Tucumán',
              'Colegio de Abogados de Tucumán',
              'Medalla Bodas de Plata 2020',
              '31+ años de trayectoria'
            ].map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs text-gray-300 border border-white/10"
              >
                <MdVerified className="text-gold" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecognitionSection