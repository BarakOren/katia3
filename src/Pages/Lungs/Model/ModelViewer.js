import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader} from '@react-three/fiber'
import { useTexture } from '@react-three/drei';


export function Model(props) {
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

  const meshRef = useRef();
  const sickRef = useRef();
  const healthyRef = useRef();


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0095;
    }
    
  });



  const [opacity, setOpacity] = useState(1.0); 
  
  const handleOpacityChange = (event) => {
    const newOpacity = parseFloat(event.target.value);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    setOpacity(color * (1.0 / 185))
  }, [totalValue])

  useEffect(() => {
    sickRef.current.renderOrder = 1;
    healthyRef.current.renderOrder = 0;
  }, [])

  const healthyTexture = useTexture('/katia3/IMAGE1.png');
  const sickTexture = useTexture('/katia3/IMAGE2.png');

  // console.log(color * (1.0 / 185))


return (
  <group {...props} dispose={null} ref={meshRef}>
  <mesh ref={sickRef} geometry={nodes.Circle.geometry} material={materials['Material.003']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
  <meshStandardMaterial map={sickTexture} transparent opacity={opacity}  />
  </mesh>

  <group position={[-0.254, 1.702, 0]} scale={0.152}>
    <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.001']} />
    <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.002']} />
  </group>
  <mesh ref={healthyRef} geometry={nodes.Circle002.geometry} material={materials['Material.004']} position={[-0.197, -0.022, 0.07]} scale={0.152}>
  <meshStandardMaterial map={healthyTexture} transparent opacity={1}  />
  </mesh>
</group>
)
}

const ModelViewer = (props, { modelPath, scale = 1, position = [0, 0, 0] }) => {
  const {totalValue} = props;
  const size = 1

  return (
    <Canvas style={{width: '50vw', position: "absolute", top: '4%'}}>
    <ambientLight intensity={1} />

      <Suspense fallback={null}>
       <Model scale={[size, size, size]} totalValue={totalValue} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

// <spotLight position={[10, 10, 10]} angle={1} penumbra={1} />
// <pointLight position={[10, 10, 10]} />


export default ModelViewer;


  