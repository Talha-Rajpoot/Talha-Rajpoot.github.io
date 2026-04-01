import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingShape({ position, geometry, color, speed = 1, distort = 0.3, scale = 1 }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003 * speed;
    ref.current.rotation.y += 0.005 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[1, 0.4, 16, 32]} />}
        {geometry === "torusKnot" && <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />}
        {geometry === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.18}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects({ isDark = true }) {
  const c1 = isDark ? "#E3FF39" : "#5a8a00";
  const c2 = isDark ? "#FF65BE" : "#c9184a";
  const c3 = isDark ? "#05b7b9" : "#048f90";
  const op = isDark ? 0.15 : 0.12;

  return (
    <group>
      {/* Spread across full viewport */}
      {/* Top left */}
      <FloatingShape position={[-12, 6, -10]} geometry="icosahedron" color={c1} speed={0.8} scale={2} />
      {/* Top right */}
      <FloatingShape position={[13, 5, -12]} geometry="octahedron" color={c2} speed={1.2} scale={1.5} />
      {/* Center left */}
      <FloatingShape position={[-14, -1, -14]} geometry="torus" color={c3} speed={0.6} scale={1.8} />
      {/* Center right */}
      <FloatingShape position={[15, 0, -15]} geometry="torusKnot" color={c1} speed={1} scale={1.2} distort={0.4} />
      {/* Bottom left */}
      <FloatingShape position={[-10, -7, -11]} geometry="dodecahedron" color={c2} speed={0.5} scale={2} distort={0.2} />
      {/* Bottom right */}
      <FloatingShape position={[11, -6, -13]} geometry="icosahedron" color={c3} speed={0.9} scale={1.5} />
      {/* Far top center */}
      <FloatingShape position={[0, 8, -18]} geometry="torus" color={c1} speed={0.7} scale={1.3} />
      {/* Far bottom center */}
      <FloatingShape position={[-3, -9, -16]} geometry="octahedron" color={c2} speed={0.4} scale={2.2} distort={0.3} />
      {/* Far left */}
      <FloatingShape position={[-18, 2, -20]} geometry="dodecahedron" color={c3} speed={0.6} scale={1.8} />
      {/* Far right */}
      <FloatingShape position={[18, -3, -19]} geometry="torusKnot" color={c1} speed={0.8} scale={1.4} distort={0.35} />
      {/* Extra corners */}
      <FloatingShape position={[-16, 8, -22]} geometry="icosahedron" color={c2} speed={0.5} scale={1} />
      <FloatingShape position={[16, 7, -24]} geometry="torus" color={c3} speed={0.3} scale={2.5} distort={0.15} />
      <FloatingShape position={[-8, -10, -17]} geometry="octahedron" color={c1} speed={0.9} scale={1.2} />
      <FloatingShape position={[8, -8, -21]} geometry="dodecahedron" color={c2} speed={0.7} scale={1.6} />
    </group>
  );
}
