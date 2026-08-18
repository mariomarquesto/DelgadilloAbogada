// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Silenciar TODOS los errores de WebGL y extensiones
if (import.meta.env.DEV) {
  // Silenciar console.error
  const originalError = console.error
  console.error = (...args) => {
    const message = args[0]?.toString?.() || ''
    
    const silencedPatterns = [
      'THREE.WebGLRenderer',
      'WebGL context lost',
      'Context Lost',
      'A listener indicated an asynchronous response',
      'Could not establish connection',
      'Unchecked runtime.lastError',
      'ResizeObserver loop',
      'THREE.Clock',
      'deprecated'
    ]
    
    const shouldSilence = silencedPatterns.some(pattern => message.includes(pattern))
    
    if (shouldSilence) {
      return
    }
    
    originalError.apply(console, args)
  }

  // Silenciar console.warn
  const originalWarn = console.warn
  console.warn = (...args) => {
    const message = args[0]?.toString?.() || ''
    
    const silencedWarnings = [
      'THREE.WebGLRenderer',
      'WebGL context lost',
      'Context Lost',
      'THREE.Clock',
      'deprecated'
    ]
    
    const shouldSilence = silencedWarnings.some(pattern => message.includes(pattern))
    
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