// components/3d/JusticeScale.tsx
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

const JusticeScale = () => {
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  // Memoizar materiales para mejor rendimiento
  const goldMaterial = useMemo(() => ({
    color: "#C9A96E",
    metalness: 0.7,
    roughness: 0.3
  }), [])

  const goldMaterialDark = useMemo(() => ({
    color: "#C9A96E",
    metalness: 0.8,
    roughness: 0.2
  }), [])

  const goldMaterialLight = useMemo(() => ({
    color: "#C9A96E",
    metalness: 0.6,
    roughness: 0.4
  }), [])

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.6, 0.2, 16]} />
        <meshStandardMaterial {...goldMaterial} />
      </mesh>

      {/* Columna central */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.1, 1.8, 8]} />
        <meshStandardMaterial {...goldMaterialDark} />
      </mesh>

      {/* Brazo horizontal */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.02]}>
        <boxGeometry args={[2.0, 0.04, 0.04]} />
        <meshStandardMaterial {...goldMaterial} />
      </mesh>

      {/* Pivote central */}
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial {...goldMaterialDark} />
      </mesh>

      {/* Plato izquierdo */}
      <group position={[-0.9, 0.4, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.6, 6]} />
          <meshStandardMaterial {...goldMaterialDark} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.04, 16]} />
          <meshStandardMaterial {...goldMaterialLight} />
        </mesh>
      </group>

      {/* Plato derecho */}
      <group position={[0.9, 0.4, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.6, 6]} />
          <meshStandardMaterial {...goldMaterialDark} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.04, 16]} />
          <meshStandardMaterial {...goldMaterialLight} />
        </mesh>
      </group>

      {/* Detalles decorativos */}
      <mesh position={[0, -0.9, 0]}>
        <torusGeometry args={[0.15, 0.02, 6, 12]} />
        <meshStandardMaterial {...goldMaterialLight} />
      </mesh>
    </group>
  )
}

export default JusticeScale