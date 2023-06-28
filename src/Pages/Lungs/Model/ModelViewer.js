import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from "three";
import {animated, useSpring} from '@react-spring/three';

export function Model(props) {
// const { nodes, materials } = useGLTF('/lungs.glb')
const { nodes, materials } = useGLTF('/lungs.glb')
const {totalValue} = props;
  let color = parseInt(totalValue.NumberOfCig) + parseInt(totalValue.SmokingPeriod) + parseInt(totalValue.Age)


  let devided = 70 - color / 2

  const [currentColor, setCurrentColor] = useState({
    h:353, 
    s:60,
    l:60
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
      geometry={nodes.Cube001.geometry} 
      material={materials.Material} 
      position={[-0.473, 1.249, 0]} 
      scale={0.207}
      ></mesh>
      
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[0.412, 1.249, 0]} scale={0.207}>
 
      </mesh>
      

      <mesh 
      // material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Circle001.geometry} material={materials['Material.002']} position={[-0.003, 1.319, -3.428]} scale={0.119} />
      <mesh material-opacity={0}
      // material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Circle.geometry} material={materials['Material.001']} position={[0, 1.497, 0]} scale={0.152} />
    </group>
  )
}



// totalValue={totalValue}
const ModelViewer = (props, { modelPath, scale = 1, position = [0, 0, 0] }) => {
  const {totalValue} = props;
  const size = 5

  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={0.3} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Model scale={[size, size, size]} totalValue={totalValue} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;


  