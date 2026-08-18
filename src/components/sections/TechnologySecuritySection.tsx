// components/sections/TechnologySecuritySection.tsx
import { motion } from 'framer-motion'
import { 
  FaShieldAlt, 
  FaMicrochip, 
  FaUserSecret, 
  FaDatabase,
  FaLock,
  FaServer,
  FaUserGraduate,
  FaCertificate
} from 'react-icons/fa'
import { MdSecurity, MdAnalytics, MdVerified } from 'react-icons/md'

const TechnologySecuritySection = () => {
  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Seguridad Cibernética Avanzada',
      description: 'Protección de datos y evidencias digitales con encriptación militar y protocolos de seguridad de última generación.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: FaUserSecret,
      title: 'Investigación Digital Forense',
      description: 'Análisis profundo de dispositivos, recuperación de datos y preservación de evidencia digital con cadena de custodia certificada.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: FaMicrochip,
      title: 'Infraestructura Tecnológica',
      description: 'Laboratorio forense con servidores dedicados, sistemas de redundancia y herramientas de análisis de última generación.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: FaDatabase,
      title: 'Análisis de Datos Masivos',
      description: 'Procesamiento y análisis de grandes volúmenes de datos con inteligencia artificial y machine learning para casos complejos.',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const expertTeam = [
    {
      icon: FaUserGraduate,
      title: 'Peritos Matriculados',
      description: 'Equipo de peritos oficiales matriculados en la justicia, especializados en informática forense y ciberdelitos.',
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      icon: FaCertificate,
      title: 'Certificaciones Internacionales',
      description: 'Expertos certificados en estándares internacionales de seguridad y peritaje digital.',
      color: 'from-amber-500/20 to-yellow-500/20'
    },
    {
      icon: MdSecurity,
      title: 'Protección Judicial',
      description: 'Aseguramiento de la cadena de custodia digital desde el primer momento del proceso judicial.',
      color: 'from-rose-500/20 to-pink-500/20'
    },
    {
      icon: MdAnalytics,
      title: 'Inteligencia Digital',
      description: 'Análisis predictivo y detección temprana de patrones delictivos en entornos digitales.',
      color: 'from-teal-500/20 to-cyan-500/20'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
      {/* ✅ Fondo con efecto de grid tecnológico - SIN animate-pulse */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#C9A96E_50%,transparent_75%)] bg-[length:20px_20px]"></div>
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
          <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wider">
            TECNOLOGÍA Y SEGURIDAD
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 mb-4">
            <span className="text-gold">Infraestructura</span> de Alta Tecnología
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Equipo especializado en ciberdelitos con peritos matriculados y tecnología 
            de vanguardia para garantizar la máxima seguridad en tu caso desde el primer momento.
          </p>
          
          {/* Badge de confianza */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10">
              <FaLock className="text-gold" /> Encriptación Militar
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10">
              <MdVerified className="text-gold" /> Peritos Matriculados
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10">
              <FaServer className="text-gold" /> Servidores Dedicados
            </span>
          </div>
        </motion.div>

        {/* Grid de Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${feature.color} bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-gold via-transparent to-transparent"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-2xl group-hover:scale-110 transition-transform">
                    <feature.icon />
                  </div>
                  <h3 className="text-white text-lg font-semibold group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-16">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipo de Peritos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-3xl text-gold">
              <FaUserGraduate />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">
                <span className="text-gold">Equipo</span> de Expertos
              </h3>
              <p className="text-gray-400 text-sm">
                Peritos matriculados con certificaciones internacionales
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertTeam.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl bg-gradient-to-br ${expert.color} border border-white/5 hover:border-gold/30 transition-all duration-300 text-center`}
              >
                <div className="text-4xl text-gold mb-3 flex justify-center">
                  <expert.icon />
                </div>
                <h4 className="text-white font-semibold mb-2">{expert.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {expert.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Certificaciones internacionales:
              </span>
              <div className="flex flex-wrap gap-3">
                {['ISO 27001', 'CCSP', 'CISSP', 'CEH', 'CHFI'].map((cert, i) => (
                  <span key={i} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full border border-gold/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20 max-w-3xl">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              <span className="text-gold font-semibold">🔒 Protegemos tu caso</span> con la más alta tecnología 
              y el respaldo de peritos matriculados desde el primer momento.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">✅ Cadena de custodia certificada</span>
              <span className="flex items-center gap-1">✅ Encriptación avanzada</span>
              <span className="flex items-center gap-1">✅ Peritajes oficiales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySecuritySection