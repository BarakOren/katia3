import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from "three";
import {animated, useSpring} from '@react-spring/three';

export function Model(props) {
// const { nodes, materials } = useGLTF('/lungs.glb')
const { nodes, materials } = useGLTF('/teeth.glb')
const {totalValue} = props;
  let color = parseInt(totalValue.NumberOfCig) + parseInt(totalValue.SmokingPeriod) + parseInt(totalValue.Age)

  let devided = 70 - color / 2

  const [currentColor, setCurrentColor] = useState({
    h:6, 
    s:3,
    l:100
  })

  useEffect(() => {
      setCurrentColor({
        ...currentColor,
        l: currentColor.l = devided 
      })
  }, [totalValue])


  return (
    <group {...props} dispose={null}>
      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Torus002.geometry} material={materials.gums} position={[-0.825, 0.481, -1.375]} rotation={[Math.PI, -0.983, Math.PI]}>
      </mesh>

      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Cube.geometry} material={materials.teeth} position={[0.733, 0.514, -0.134]} rotation={[Math.PI, -0.983, 3.059]} scale={-0.17} />
      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Torus001.geometry} material={materials.gums} position={[-0.775, -0.596, -1.34]} rotation={[-Math.PI, -0.983, 0]} scale={0.939} />
      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.857, -0.628, -0.423]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159} />
      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Torus003.geometry} material={materials['Material.001']} position={[-0.825, 0.436, -1.375]} rotation={[Math.PI, -0.983, Math.PI]} />
    </group>
  )
}



// totalValue={totalValue}
const ModelViewer = (props, { modelPath, scale = 1, position = [0, 0, 0] }) => {
  const {totalValue} = props;
  const size = 2
  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={1.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Model scale={[size, size, size]} totalValue={totalValue} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;


  