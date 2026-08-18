import { createContext, useContext, useState } from 'react'

interface NavigationContextType {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <NavigationContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}