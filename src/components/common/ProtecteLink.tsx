import { Link } from 'react-router-dom'

interface ProtectedLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

const ProtectedLink = ({ to, children, className = '' }: ProtectedLinkProps) => {
  // Aquí puedes agregar lógica de autenticación
  const isAuthenticated = true // Cambiar según tu lógica

  if (!isAuthenticated) {
    return <span className={className}>{children}</span>
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default ProtectedLink