
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function House() {
  return (
    <group>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        {/* גג */}
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[1.5, 1, 4]} />
          <meshStandardMaterial color="#ff4040" />
        </mesh>
        
        {/* קירות */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1, 2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* דלת */}
        <mesh position={[0, 0.35, 1.01]}>
          <boxGeometry args={[0.4, 0.7, 0.05]} />
          <meshStandardMaterial color="#964B00" />
        </mesh>
        
        {/* חלונות */}
        <mesh position={[-0.5, 0.6, 1.01]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#87CEEB" />
        </mesh>
        <mesh position={[0.5, 0.6, 1.01]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#87CEEB" />
        </mesh>
      </mesh>
    </group>
  );
}

export function Logo3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        shadows
        camera={{ position: [5, 5, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <House />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
