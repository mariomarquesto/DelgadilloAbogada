// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Aumentamos el límite de warning (opcional)
    chunkSizeWarningLimit: 1000, // 1000 kB
    
    // Configuración de code splitting con Rolldown
    rollupOptions: {
      output: {
        // Code splitting manual para chunks grandes
        manualChunks(id) {
          // react-icons debe evaluarse ANTES que el prefijo genérico 'react'
          if (id.includes('node_modules/react-icons')) return 'ui'
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router-dom') ||
            id.includes('node_modules/framer-motion')
          ) {
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})