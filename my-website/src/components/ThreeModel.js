import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

// The 3D model component
function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/assets/flower.glb'); // You'll need to add a 3D model file
  const { scrollYProgress } = useScroll();
  
  // Rotate based on scroll position
  useFrame((state) => {
    if (group.current) {
      const scrollValue = scrollYProgress.get();
      group.current.rotation.y = scrollValue * Math.PI * 2; // Full rotation on scroll
      group.current.rotation.x = scrollValue * Math.PI * 0.5; // Partial tilt on scroll
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* 
        This is a placeholder for your actual 3D model content.
        You'll need to replace this with the actual mesh based on your GLB/GLTF file.
        For now, I'll use a simple placeholder geometry:
      */}
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
        <meshStandardMaterial 
          color="#888888"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Fallback if model fails to load
function Fallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}

export default function ThreeModel() {
  return (
    <div className="three-container">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Suspense fallback={<Fallback />}>
            <Model position={[0, 0, 0]} scale={1.5} />
          </Suspense>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}