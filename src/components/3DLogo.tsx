
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function House() {
  return (
    <mesh position={[0, 0, 0]}>
      {/* Main structure */}
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ffffff" />
      
      {/* Roof */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[1.5, 1.5, 4]} />
        <meshStandardMaterial color="#ff4040" />
      </mesh>
    </mesh>
  );
}

export function Logo3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <House />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
