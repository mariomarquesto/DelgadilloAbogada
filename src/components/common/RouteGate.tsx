import { Navigate } from 'react-router-dom'

interface RouteGateProps {
  children: React.ReactNode
  redirectTo?: string
}

const RouteGate = ({ children, redirectTo = '/' }: RouteGateProps) => {
  // Aquí puedes agregar lógica de autenticación
  const isAuthenticated = true // Cambiar según tu lógica

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  return <>{children}</>
}

export default RouteGate