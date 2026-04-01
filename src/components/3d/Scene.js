import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ParticleField from "./ParticleField";
import FloatingObjects from "./FloatingObjects";
import FallingStars from "./FallingStars";

function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0005]}
      />
    </EffectComposer>
  );
}

function SceneContent({ isDark }) {
  const bgColor = isDark ? "#000000" : "#f5f5f0";
  const fogColor = isDark ? "#000000" : "#f5f5f0";
  const particleColor = isDark ? "#E3FF39" : "#5a8a00";
  const light1Color = isDark ? "#E3FF39" : "#5a8a00";
  const light2Color = isDark ? "#FF65BE" : "#c9184a";
  const light3Color = isDark ? "#05b7b9" : "#048f90";

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" args={[fogColor, 15, 50]} />
      <ambientLight intensity={isDark ? 0.15 : 0.4} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 0.5} color={light1Color} />
      <pointLight position={[-10, -5, 5]} intensity={isDark ? 0.4 : 0.3} color={light2Color} />
      <pointLight position={[0, 5, -10]} intensity={isDark ? 0.3 : 0.2} color={light3Color} />
      <Suspense fallback={null}>
        <ParticleField count={1500} color={particleColor} opacity={isDark ? 0.6 : 0.35} />
        <FloatingObjects isDark={isDark} />
        {isDark && <FallingStars count={80} />}
        <Preload all />
      </Suspense>
      {isDark && <Effects />}
    </>
  );
}

export default function Scene() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme !== "light");
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <SceneContent isDark={isDark} />
      </Canvas>
    </div>
  );
}
