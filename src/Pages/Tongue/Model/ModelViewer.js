import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import { useFrame, useLoader} from '@react-three/fiber'

export function Model(props) {
const { nodes, materials } = useGLTF('/katia3/tongue.glb')

const {totalValue} = props;
  let color = parseInt(totalValue.NumberOfCig) + parseInt(totalValue.SmokingPeriod) + parseInt(totalValue.Age)
  const meshRef = useRef();

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.0055;
  //   }
  // });

  let devided = 70 - color / 4

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

  const texture = useTexture('/katia3/togue-texture.png');

  // return (
  //   <group {...props} dispose={null}>
  //     <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[0.894, 1.226, -4.031]} rotation={[0.128, 0, 0]} />
  //   </group>
  // )

  return (
      <group {...props} dispose={null} ref={meshRef} position={[-0.3, -1, 0]}>
      <mesh 
      material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}
      geometry={nodes.Cube.geometry} material={materials['Material.002']} rotation={[0.128, 0, 0]}>
      <meshStandardMaterial map={texture}  />
      </mesh>
   
    </group>
  )
}


const ModelViewer = (props, { modelPath, scale = 1, position = [0, 0, 0] }) => {
  const {totalValue} = props;
  const size = 0.9
  return (
    <Canvas style={{width: '59vw', position: "absolute", top: '4%'}}>
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


  