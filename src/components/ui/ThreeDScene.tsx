// components/ui/ThreeDScene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Suspense } from 'react'
import JusticeScale from '../3d/JusticeScale'

const ThreeDScene = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [3, 2, 5], fov: 45 }}
        className="w-full h-full"
        gl={{ 
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 1]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-5, 5, 10]} intensity={0.5} color="#C9A96E" />
        
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
            <JusticeScale />
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeDScene