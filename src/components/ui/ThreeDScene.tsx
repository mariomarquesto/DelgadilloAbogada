// components/ui/ThreeDScene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import JusticeScale from '../3d/JusticeScale'

const ThreeDScene = () => {
  const [hasError, setHasError] = useState(false)

  // Manejar errores de WebGL
  useEffect(() => {
    const handleContextLost = (e: Event) => {
      e.preventDefault()
      console.warn('WebGL context lost, intentando recuperar...')
      setHasError(true)
      
      // Intentar recuperar después de 2 segundos
      setTimeout(() => {
        setHasError(false)
        window.location.reload()
      }, 2000)
    }

    const handleContextRestored = () => {
      console.log('WebGL context restored')
      setHasError(false)
    }

    window.addEventListener('webglcontextlost', handleContextLost)
    window.addEventListener('webglcontextrestored', handleContextRestored)

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost)
      window.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [])

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gold">
        <p>Recuperando escena 3D...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [3, 2, 5], fov: 45 }}
        className="w-full h-full"
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false, // 👈 Importante
          depth: true,
          stencil: false,
          preserveDrawingBuffer: false
        }}
        dpr={[1, 1.5]} // Reducir DPR para mejor rendimiento
        onCreated={(state) => {
          // Configurar el renderer para mejor estabilidad
          state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-5, 5, 10]} intensity={0.5} color="#C9A96E" />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#C9A96E" />
        
        <Suspense fallback={null}>
          <Float 
            speed={1.5} 
            rotationIntensity={0.5} 
            floatIntensity={1}
          >
            <JusticeScale />
          </Float>
          
          <Environment 
            preset="city" 
            background={false}
          />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeDScene