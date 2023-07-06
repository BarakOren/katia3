/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 finalteeth2.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/finalteeth2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.077, 0.371, -0.766]} rotation={[-Math.PI, -0.983, 0]} scale={0.939}>
        <mesh geometry={nodes.Torus001_1.geometry} material={materials.gums} />
        <mesh geometry={nodes.Torus001_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.128, 0.36, -0.638]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159} />
    </group>
  )
}

useGLTF.preload('/finalteeth2.glb')