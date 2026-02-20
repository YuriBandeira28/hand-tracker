"use client"

import { Canvas } from "@react-three/fiber"
import Scene from "@/three/Scene"

export default function CanvasScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}