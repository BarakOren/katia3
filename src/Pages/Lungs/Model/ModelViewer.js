import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader} from '@react-three/fiber'
import * as THREE from 'three';
import { MeshBasicMaterial, meshStandardMaterial } from 'three';
import { TextureLoader } from 'three';


export function Model(props) {
// const { nodes, materials } = useGLTF('/lungs.glb')
const { nodes, materials } = useGLTF('/katia3/centeredlungs.glb')
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
  const quaternion = new THREE.Quaternion();
  let xAxis = new THREE.Vector3(1, 1, 0);
  quaternion.setFromAxisAngle(xAxis, props.angle);

  const meshRef = useRef(null)

  // useFrame(({ clock }) => {
  //   meshRef.current.rotation.y = clock.getElapsedTime()
  // })

  // const texture = new TextureLoader().load('/katia3/black.png');
  let loader = new TextureLoader(); 
  const texture = useLoader(TextureLoader, '/katia3/black.png'); 


  return (
    <group {...props} ref={meshRef} dispose={null}>
    <mesh 
  // material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
    geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.197, -0.022, 0.07]} scale={1}>
    <boxGeometry args={[10, 10, 10]} />
    <meshBasicMaterial attach="material-0" color="000000" />
    <meshBasicMaterial  map={texture} alphaMap={texture} transparent opacity={1} />
   
   </mesh>
    <group position={[-0.254, 1.702, 0]} scale={0.152}>
      <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.001']}>
      
      </mesh>
      <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.002']}>
      
      </mesh>
    </group>
    <mesh geometry={nodes.Circle002.geometry} material={materials['Material.004']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
   
    </mesh>
  </group>
  )
}

// totalValue={totalValue}
const ModelViewer = (props, { modelPath, scale = 1, position = [0, 0, 0] }) => {
  const {totalValue} = props;
  const size = 1

  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={0.8} />
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


  