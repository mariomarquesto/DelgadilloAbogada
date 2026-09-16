// pages/public/Home.tsx
import Hero from '../../components/sections/Hero'
import RecognitionSection from '../../components/sections/RecognitionSection' // 👈 NUEVO
import TechnologySecuritySection from '../../components/sections/TechnologySecuritySection'
import AboutSection from '../../components/sections/AboutSection'
import PracticeCards from '../../components/sections/PracticeCards'
import WhyChooseUs from '../../components/sections/WhyChooseUs'
import Testimonials from '../../components/sections/Testimonials'
import FAQ from '../../components/sections/FAQ'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <RecognitionSection /> {/* 🏅 MEDALLA DE PLATA PROTAGONISTA */}
      <TechnologySecuritySection />
      <AboutSection />
      <PracticeCards />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </motion.div>
  )
}

export default Home