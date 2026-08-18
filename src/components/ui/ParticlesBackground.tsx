// components/ui/ParticlesBackground.tsx
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Points as PointsType } from 'three'

function ParticleSystem() {
  const ref = useRef<PointsType>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const positions = useMemo(() => {
    const positions = new Float32Array(1000 * 3) // Reducir partículas
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  // ✅ Corregido: _state en lugar de state
  useFrame((_state, delta) => {
    if (ref.current && mounted) {
      ref.current.rotation.x += delta * 0.02
      ref.current.rotation.y += delta * 0.01
    }
  })

  if (!mounted) return null

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#C9A96E"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

export default function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          alpha: true,
          antialias: false,
          powerPreference: "low-power"
        }}
        dpr={[1, 1]}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  )
}