import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useAnimations } from "@react-three/drei";
import { useGLTF} from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'


export function Model(props) {
  const group = useRef()
  // const { nodes, materials, animations } = useGLTF('/anothertest.glb')
  const { nodes, materials, animations } = useGLTF('/anothertest.glb')
  const {SphereAnimation} = props
  const { actions, mixer } = useAnimations(animations, group)
  console.log(mixer)

  return (
    <animated.group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light_002" position={[28.815, 0.444, -25.984]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Light_001" position={[14.143, -1.841, -1.005]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Light001" position={[-5.992, 5.06, -3.942]} rotation={[1.89, 0.881, -2.045]} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['default']} scale={0.969} />
      </group>
    </animated.group>
  )
}


const ModelsCircle = (props) => {

  const {test, SphereAnimation, setSphereAnimation} = props

const styles = {
    width: '100%',
    height: '100%',
}

    const config = {config: {
      mass: 1,
      friction: 120,
      tension: 100,
    }}


    const { scale, position } = useSpring({ 
      config ,
      // position: SphereAnimation ? [0,1,0] : [0,0,0],
      scale: 0.75
    }
    )

  return (
    <Canvas style={styles} >
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Model scale={scale} position={position} SphereAnimation={SphereAnimation} />
      </Suspense>
    </Canvas>
  );
};

export default ModelsCircle;