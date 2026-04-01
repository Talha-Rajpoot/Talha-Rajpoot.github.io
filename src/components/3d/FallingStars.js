import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FallingStars({ count = 60 }) {
  const mesh = useRef();

  const { positions, velocities, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread across wide area
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 50 + 20; // start above screen
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;

      // Fall direction: down and slightly sideways
      velocities[i * 3] = (Math.random() - 0.3) * 0.02; // slight drift
      velocities[i * 3 + 1] = -(Math.random() * 0.08 + 0.04); // fall speed
      velocities[i * 3 + 2] = 0;

      sizes[i] = Math.random() * 2 + 1;
    }

    return { positions, velocities, sizes };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];

      // Reset star when it falls below screen
      if (pos[i * 3 + 1] < -30) {
        pos[i * 3] = (Math.random() - 0.5) * 80;
        pos[i * 3 + 1] = Math.random() * 20 + 25;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
