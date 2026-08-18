// components/ui/ThreeDScene.tsx (versión sin Environment)
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Suspense } from 'react'
import JusticeScale from '../3d/JusticeScale'

const ThreeDScene = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [4, 2.5, 6], fov: 40 }}
        className="w-full h-full"
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        {/* 🔥 Iluminación mejorada para que la balanza se vea bien */}
        <ambientLight intensity={0.8} color="#ffffff" />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#C9A96E" />
        <directionalLight position={[0, -3, 0]} intensity={0.3} color="#C9A96E" />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#C9A96E" />
        <pointLight position={[-3, 0, 3]} intensity={0.3} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float 
            speed={1.2} 
            rotationIntensity={0.4} 
            floatIntensity={0.6}
          >
            <JusticeScale />
          </Float>
          
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