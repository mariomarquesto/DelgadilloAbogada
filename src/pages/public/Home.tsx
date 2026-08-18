// pages/public/Home.tsx
import Hero from '../../components/sections/Hero'
import AboutSection from '../../components/sections/AboutSection'
import PracticeCards from '../../components/sections/PracticeCards'
import WhyChooseUs from '../../components/sections/WhyChooseUs'
import Testimonials from '../../components/sections/Testimonials'
import FAQ from '../../components/sections/FAQ'
import TechnologySecuritySection from '../../components/sections/TechnologySecuritySection'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TechnologySecuritySection /> {/* 👈 Nueva sección */}
      <AboutSection />
      <PracticeCards />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </motion.div>
  )
}

export default Home