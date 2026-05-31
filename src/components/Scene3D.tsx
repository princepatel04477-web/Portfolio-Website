import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ count = 1400, color = "#d97757" }: { count?: number; color?: string }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 0.02 + 0.005;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <Points ref={mesh} positions={positions} sizes={sizes}>
      <PointMaterial
        transparent
        color={color}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
        toneMapped={false}
      />
    </Points>
  );
}

function EmberField({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i);
      y += 0.008 + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.003;
      if (y > 3) y = -3;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={mesh} positions={positions}>
      <PointMaterial
        transparent
        color="#a03b2d"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        toneMapped={false}
      />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.5], fov: 60 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#d97757" />
      <pointLight position={[-5, -3, 2]} intensity={1} color="#a03b2d" />
      <fog attach="fog" args={["#050505", 4, 10]} />
      <ParticleField count={1800} />
      <EmberField count={180} />
    </Canvas>
  );
}
