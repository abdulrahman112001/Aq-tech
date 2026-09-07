"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

// Generated once at module load (not during render) so the particle field
// stays stable across re-renders without violating component purity rules.
function generateParticlePositions(count: number) {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const radius = 6 + Math.random() * 4
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    arr[i * 3 + 2] = radius * Math.cos(phi)
  }
  return arr
}

const PARTICLE_POSITIONS = generateParticlePositions(900)

function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <Points ref={ref} positions={PARTICLE_POSITIONS} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00c2ff"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function CoreShape() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <Icosahedron args={[2.1, 1]}>
        <meshBasicMaterial color="#2f6bff" wireframe transparent opacity={0.55} />
      </Icosahedron>
      <Icosahedron args={[1.4, 0]}>
        <meshBasicMaterial color="#8b7cff" wireframe transparent opacity={0.4} />
      </Icosahedron>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <CoreShape />
      </Float>
      <ParticleField />
    </Canvas>
  )
}
