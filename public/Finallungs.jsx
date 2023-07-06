/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 finallungs.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/finallungs.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle001.geometry} material={materials.Material} position={[0.032, 2.483, -3.442]} rotation={[0, 0.032, 0]} scale={0.152} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.002']} position={[0.032, 2.483, -3.442]} rotation={[0, 0.032, 0]} scale={0.152} />
    </group>
  )
}

useGLTF.preload('/finallungs.glb')
