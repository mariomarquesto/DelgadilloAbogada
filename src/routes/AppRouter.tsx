import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NavigationProvider } from '../context/NavigationContext'
import PublicLayout from '../layouts/PublicLayout'

// Páginas Públicas
import Home from '../pages/public/Home'
import Cobranzas from '../pages/public/Cobranzas'
import Contacto from '../pages/public/Contacto'
import DerechoLaboral from '../pages/public/DerechoLaboral'
import Divorcios from '../pages/public/Divorcios'
import Familia from '../pages/public/Familia'
import Sucesiones from '../pages/public/Sucesiones'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="cobranzas" element={<Cobranzas />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="derecho-laboral" element={<DerechoLaboral />} />
            <Route path="divorcios" element={<Divorcios />} />
            <Route path="familia" element={<Familia />} />
            <Route path="sucesiones" element={<Sucesiones />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  )
}

export default AppRouter