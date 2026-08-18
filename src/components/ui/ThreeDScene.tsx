// components/ui/ThreeDScene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import JusticeScale from '../3d/JusticeScale'

const ThreeDScene = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-gold/20 border-t-gold rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [4, 2.5, 6], fov: 40 }}
        className="w-full h-full"
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        // ✅ Evita que el contexto se pierda al cambiar de pestaña
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        }}
      >
        {/* ✅ Fondo transparente */}
        <color attach="background" args={['transparent']} />
        
        {/* 🔥 Iluminación mejorada */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.6} color="#C9A96E" />
        <directionalLight position={[0, -3, 0]} intensity={0.3} color="#C9A96E" />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#C9A96E" />
        
        <Suspense fallback={null}>
          <Float 
            speed={1.2} 
            rotationIntensity={0.4} 
            floatIntensity={0.6}
          >
            <JusticeScale />
          </Float>
          
          <Environment 
            preset="studio" 
            background={false}
          />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeDScene