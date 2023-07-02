import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Add some objects to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Position the camera
    camera.position.z = 5;

    // Define the animation loop
    function animate() {
      // Rotate the scene around the Y-axis
      scene.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);

      // Call animate again on the next frame
      requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();

    // Clean up the scene when the component is unmounted
    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
