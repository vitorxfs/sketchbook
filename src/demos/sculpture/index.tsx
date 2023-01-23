import React, {
  Suspense,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import Sculpture from './assets/Sculpture';

import Demo from '../demos.interface';
import image from './assets/sculpturelight.png';
import { Environment } from '@react-three/drei';
import { BoxGeometry } from 'three';

const SculptureLightComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback((event: any) => {
    if (!canvasRef.current) {
      return;
    }

    setLightPosition({
      x: event.screenX - canvasRef.current.clientWidth / 2,
      y: event.screenY - canvasRef.current.clientHeight / 2,
    });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Canvas
        orthographic
        style={{
          width: '100vw',
          height: '100vh',
          // cursor: 'none',
          zIndex: 1,
        }}
        camera={{ position: [0, 0, 100], zoom: 90 }}
        ref={canvasRef}
        onMouseMoveCapture={onMouseMove}
      >
        {/* <color attach="background" args={['#333']} /> */}
        <pointLight
          position={[lightPosition.x/100, -lightPosition.y/100, 3]}
          intensity={1}
          power={5}
          castShadow
          color="#ffe7bc"
        />
        {/* <pointLight
          position={[-10, 0, 50]}
          intensity={0.01}
        /> */}
        <mesh>
          <Suspense fallback={null}>
            <Sculpture scale={0.3} position={[0, -1.2, 0]} />
          </Suspense>
        </mesh>
        <mesh position={[0, 0, -5]} scale={20}>
          <planeGeometry />
          <meshStandardMaterial roughness={1} color="gray"  />
        </mesh>
        <ambientLight intensity={0.2} color="#ffbcfc"/>
      </Canvas>
    </div>
  );
};

export const SculptureLight: Demo = {
  component: <SculptureLightComponent />,
  description: 'A study about light interaction over a 3d model',
  image,
  slug: 'sculpture-light',
  title: 'La Renommée sculpture',
};

export default SculptureLight;
