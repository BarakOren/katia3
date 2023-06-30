import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from "three";
import {animated, useSpring} from '@react-spring/three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Model(props) {
// const { nodes, materials } = useGLTF('/lungs.glb')
const { nodes, materials } = useGLTF('katia3/lungs.glb')
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
        l: currentColor.l = devided ,
        s: currentColor.s = devided
      })
  }, [totalValue])


return (
  <group {...props} dispose={null}>
  <mesh 
  material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l + 10}%)`}
  geometry={nodes.Circle001.geometry} material={materials['Material.001']} position={[0, 1.497, 0]} scale={0.152} />
  <mesh 
  material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
  geometry={nodes.Circle002.geometry} material={materials.Material} position={[0, 1.497, 0]} scale={0.152} />
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
    <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      <Model scale={[size, size, size]} totalValue={totalValue} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;


  