import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, useGLTF } from "@react-three/drei";

function RingModel() {
  const { scene } = useGLTF("/models/ringModel.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.008;
    }
  });

  return (
    <Center>
      <group position={[0.35, 0, 0]}>
        <primitive ref={ref} object={scene} scale={0.5} />
      </group>
    </Center>
  );
}

function ViewCanvas() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [-0.55, 0.15, 4.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      onCreated={({ gl, scene }) => {
        scene.background = null;
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.85} />
      <hemisphereLight
        skyColor="#ffffff"
        groundColor="#444060"
        intensity={1.1}
      />
      <directionalLight position={[6, 8, 5]} intensity={2.2} />
      <directionalLight position={[-5, 4, -4]} intensity={1.1} color="#ffe8dc" />
      <directionalLight position={[0, -3, 2]} intensity={0.55} color="#b8c8ff" />
      <pointLight position={[3, 2, 4]} intensity={1.4} distance={20} />
      <pointLight position={[-2, 1, 3]} intensity={0.9} color="#fff5f0" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.45}
        penumbra={0.75}
        intensity={1.2}
        color="#ffffff"
      />
      <Environment preset="studio" environmentIntensity={1.35} />
      <Suspense fallback={null}>
        <RingModel />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/3.glb");

export default ViewCanvas;
