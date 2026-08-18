// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ✅ Suprimir errores de extensiones de Chrome
if (import.meta.env.DEV) {
  const originalError = console.error
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('A listener indicated an asynchronous response') ||
       args[0].includes('Could not establish connection') ||
       args[0].includes('Unchecked runtime.lastError'))
    ) {
      return
    }
    originalError.apply(console, args)
  }

  const originalWarn = console.warn
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('WebGL context lost') ||
       args[0].includes('Context Lost'))
    ) {
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