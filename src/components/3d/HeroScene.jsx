'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometries() {
  const groupRef = useRef();

  // Create an array of random positions, scales, and colors
  const items = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15 - 5
      ],
      scale: Math.random() * 0.8 + 0.2,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      color: i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#888888' : '#ff4500', // White, Gray, Pop Orange
      type: i % 2 === 0 ? 'box' : 'icosahedron'
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <Float 
          key={index} 
          speed={Math.random() * 2 + 1} 
          rotationIntensity={Math.random() * 2 + 0.5} 
          floatIntensity={Math.random() * 2 + 0.5}
          position={item.position}
        >
          <mesh scale={item.scale} rotation={item.rotation}>
            {item.type === 'box' ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <icosahedronGeometry args={[1, 1]} />
            )}
            <meshStandardMaterial 
              color={item.color} 
              wireframe={true} 
              emissive={item.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function MainSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[2.5, 0.8, 128, 32]} />
        <meshPhysicalMaterial 
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
          wireframe={true}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff4500" />
        
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <FloatingGeometries />
        <MainSphere />
        
        {/* Adds realistic ground reflections/shadows below the center */}
        <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2} far={10} />
      </Canvas>
    </div>
  );
}