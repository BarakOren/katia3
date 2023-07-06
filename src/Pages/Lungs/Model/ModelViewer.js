import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Model(props) {
const { nodes, materials } = useGLTF('/katia3/centeredlungs.glb')

const {totalValue} = props;
let color = parseInt(totalValue.NumberOfCig) + parseInt(totalValue.SmokingPeriod) + parseInt(totalValue.Age)

  const meshRef = useRef();
  const sickRef = useRef();
  // const healthyRef = useRef();

  useEffect(() => {
    if(meshRef.current)
    meshRef.current.rotation.y = 3.1;
  }, [])

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.0095;
  //   }
  // });

  const [opacity, setOpacity] = useState(1.0); 
  
  useEffect(() => {
    setOpacity(color * (0.9 / 185))
  }, [totalValue])

  const healthyTexture = useTexture('/katia3/lungsHealthyTexture.png');
  const sickTexture = useTexture('/katia3/sicklungstexture2.png');
  const aoMap = useTexture('/katia3/lungsSickTexture.png');
  const metalnessMap  = useTexture('/katia3/lungsSickTexture.png');
  const roughnessMap  = useTexture('/katia3/lungsSickTexture.png');
  const threesixtytexture = useTexture("/katia3/2.png")

return ( <group {...props} dispose={null} ref={meshRef} position={[-0, -0.2, 1]} >
    <mesh 
    renderOrder={1} ref={sickRef} geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
    <meshStandardMaterial map={sickTexture} transparent opacity={opacity} />
  </mesh>
  <mesh renderOrder={0} geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
  <meshStandardMaterial map={healthyTexture} transparent opacity={0.3} />
  </mesh>

  <mesh geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
  </mesh>

  <group position={[-0.254, 1.702, 0]} scale={0.152}>
    <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.001']}>
    </mesh>
    <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.002']}>
    </mesh>
  </group>
</group>
)
}


const ModelViewer = (props) => {
  const {totalValue} = props;
  const size = 0.9

  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={1} />
    
    <spotLight position={[10, 10, 10]} angle={1} penumbra={1} />
    <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
       <Model scale={[size, size, size]} totalValue={totalValue} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};



export default ModelViewer;


// let devided = 70 - color / 2

// const [currentColor, setCurrentColor] = useState({
//   h:353, 
//   s:60,
//   l:60
// })

// useEffect(() => {
//     setCurrentColor({
//       ...currentColor,
//       l: currentColor.l = devided ,
//       s: currentColor.s = devided
//     })
// }, [totalValue])

  