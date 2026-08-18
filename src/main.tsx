// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Suprimir errores de extensiones de Chrome y WebGL
if (import.meta.env.DEV) {
  const originalError = console.error
  console.error = (...args) => {
    const message = typeof args[0] === 'string' ? args[0] : ''
    
    // Lista de errores a silenciar
    const silencedErrors = [
      'A listener indicated an asynchronous response',
      'Could not establish connection',
      'Unchecked runtime.lastError',
      'WebGL context lost',
      'Context Lost',
      'THREE.WebGLRenderer',
      'ResizeObserver loop'
    ]
    
    // Verificar si el error está en la lista de silenciados
    const shouldSilence = silencedErrors.some(error => message.includes(error))
    
    if (shouldSilence) {
      return
    }
    
    originalError.apply(console, args)
  }

  const originalWarn = console.warn
  console.warn = (...args) => {
    const message = typeof args[0] === 'string' ? args[0] : ''
    
    const silencedWarnings = [
      'WebGL context lost',
      'Context Lost',
      'THREE.WebGLRenderer',
      'THREE.Clock',
      'deprecated'
    ]
    
    const shouldSilence = silencedWarnings.some(warning => message.includes(warning))
    
    if (shouldSilence) {
      return
    }
    
    originalWarn.apply(console, args)
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)