import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader} from '@react-three/fiber'
import { useTexture } from '@react-three/drei';


export function Model(props) {
const { nodes, materials } = useGLTF('/katia3/teeth.glb')
// const { nodes, materials } = useGLTF('/katia3/finalteeth.glb')

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

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0095;
    }
  });

  // material-color={`hsl(${currentColor.h}, ${currentColor.s}%, ${currentColor.l}%)`}

  const [opacity, setOpacity] = useState(1.0); 

  const meshRef = useRef();
  const sickRef = useRef();
  const healthyRef = useRef();

  const sickTexture = useTexture('/katia3/teethSickTexture2.png');
  
  useEffect(() => {
    setOpacity(color * (0.8 / 185))
  }, [totalValue])

  // return (
  //   <group ref={meshRef} {...props} dispose={null}>
  //     <group position={[0.077, 0.371, -0.766]} rotation={[-Math.PI, -0.983, 0]} scale={0.939}>
  //       <mesh geometry={nodes.Torus001_1.geometry} material={materials.gums} />
  //       <mesh geometry={nodes.Torus001_2.geometry} material={materials['Material.001']} />
  //     </group>
  //     <mesh geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.128, 0.36, -0.638]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159}>
  //         <meshStandardMaterial map={sickTexture} transparent opacity={opacity} />
  //     </mesh>
  //     <mesh geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.128, 0.36, -0.638]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159} />

  //   </group>
  // )

  return (
    <group ref={meshRef} {...props} dispose={null} position={[0.5, 0, 1]}>
      <mesh 
      geometry={nodes.Torus002.geometry} material={materials.gums} position={[-0.825, 0.481, -1.375]} rotation={[Math.PI, -0.983, Math.PI]}>
      </mesh>

      <mesh geometry={nodes.Cube.geometry} material={materials.teeth} position={[0.733, 0.514, -0.134]} rotation={[Math.PI, -0.983, 3.059]} scale={-0.17}>
      <meshStandardMaterial map={sickTexture} transparent opacity={opacity} />
      </mesh>

      <mesh geometry={nodes.Cube.geometry} material={materials.teeth} position={[0.733, 0.514, -0.134]} rotation={[Math.PI, -0.983, 3.059]} scale={-0.17}>
      </mesh>

      <mesh 
      geometry={nodes.Torus001.geometry} material={materials.gums} position={[-0.775, -0.596, -1.34]} rotation={[-Math.PI, -0.983, 0]} scale={0.939} />
     
      <mesh 
      geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.857, -0.628, -0.423]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159}>
      <meshStandardMaterial map={sickTexture} transparent opacity={opacity} />
      </mesh>
      <mesh 
      geometry={nodes.Cube001.geometry} material={materials.teeth} position={[0.857, -0.628, -0.423]} rotation={[Math.PI, -0.983, -0.083]} scale={-0.159}>
      </mesh>
      
      <mesh 
      geometry={nodes.Torus003.geometry} material={materials['Material.001']} position={[-0.825, 0.436, -1.375]} rotation={[Math.PI, -0.983, Math.PI]} />
    </group>
  )
}



// totalValue={totalValue}
const ModelViewer = (props) => {
  const {totalValue} = props;
  const size = 1.5
  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={0.2} />
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


  