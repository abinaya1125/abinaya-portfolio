import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D Cube Component
function FloatingCube({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Sphere Component
function FloatingSphere({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.6) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Torus Component
function FloatingTorus({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.6, 0.25, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Tetrahedron Component
function FloatingTetrahedron({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.4;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.9) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.TetrahedronGeometry(0.8, 0);
    return geo;
  }, []);

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Octahedron Component
function FloatingOctahedron({ position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(0.7, 0);
    return geo;
  }, []);

  return (
    <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.85} 
          roughness={0.15}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Main 3D Background Component
function ThreeDBackground() {
  return (
    <>
      {/* Primary Floating Objects - Larger and more prominent */}
      <FloatingCube position={[-4, 2, -2]} color="#667eea" speed={0.8} scale={1.2} />
      <FloatingSphere position={[3, 3, -1]} color="#f472b6" speed={1.2} scale={1.1} />
      <FloatingTorus position={[-2, -2, -3]} color="#764ba2" speed={0.6} scale={1.3} />
      <FloatingTetrahedron position={[4, -1, -2]} color="#f472b6" speed={1} scale={1.0} />
      <FloatingOctahedron position={[-3, 1, -4]} color="#667eea" speed={0.9} scale={1.1} />
      
      {/* Secondary Floating Objects - Smaller decorative elements */}
      <FloatingCube position={[0, 4, -3]} color="#f472b6" speed={0.7} scale={0.8} />
      <FloatingSphere position={[-5, -1, -2]} color="#764ba2" speed={1.3} scale={0.9} />
      <FloatingTorus position={[5, 2, -4]} color="#667eea" speed={0.5} scale={0.7} />
      <FloatingTetrahedron position={[2, -3, -1]} color="#764ba2" speed={1.1} scale={0.8} />
      <FloatingOctahedron position={[-1, 0, -5]} color="#f472b6" speed={0.9} scale={0.6} />
      
      {/* Tertiary Floating Objects - Very small accents */}
      <FloatingCube position={[6, -2, -3]} color="#667eea" speed={1.4} scale={0.5} />
      <FloatingSphere position={[-6, 3, -1]} color="#f472b6" speed={0.8} scale={0.4} />
      <FloatingTorus position={[1, -4, -2]} color="#764ba2" speed={1.6} scale={0.5} />
      <FloatingTetrahedron position={[-4, -3, -4]} color="#667eea" speed={1.2} scale={0.6} />
      <FloatingOctahedron position={[3, 1, -5]} color="#764ba2" speed={0.7} scale={0.5} />
      
      {/* Stars Background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </>
  );
}

// Main Component
const ThreeDScene = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#667eea" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#f472b6" />
        <pointLight position={[0, 10, -10]} intensity={0.8} color="#764ba2" />
        <pointLight position={[10, -10, 0]} intensity={0.6} color="#667eea" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />
        
        {/* 3D Background Elements */}
        <ThreeDBackground />
        
        {/* Subtle camera controls for interactive experience */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
