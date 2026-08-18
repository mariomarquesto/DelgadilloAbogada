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
          if (id.includes('node_modules/three')) return 'three'
          if (
            id.includes('node_modules/@react-three/fiber') ||
            id.includes('node_modules/@react-three/drei')
          ) {
            return 'react-three'
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router-dom') ||
            id.includes('node_modules/framer-motion')
          ) {
            return 'vendor'
          }
          if (id.includes('node_modules/react-icons')) return 'ui'
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})