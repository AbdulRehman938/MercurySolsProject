import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// --- Optimized Morphing Core ---

const MorphingConstruct = ({ scrollRef, isFocused }) => {
  const meshRef = useRef();
  const count = 64;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const data = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      phi: Math.acos(-1 + (2 * i) / count),
      theta: Math.sqrt(count * Math.PI) * Math.acos(-1 + (2 * i) / count),
      rand: Math.random(),
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const s = scrollRef.current;

    for (let i = 0; i < count; i++) {
      const { phi, theta, rand } = data[i];

      // Calculate 3 distinct target states

      // State A: Monolith (Tight Tower)
      const ax = Math.sin(theta) * 0.1;
      const ay = (i - count / 2) * 0.15;
      const az = Math.cos(theta) * 0.1;

      // State B: Vortex (Expanding Swarm)
      const radiusB = 3 + rand * 4;
      const speedB = t * (0.4 + rand * 0.2);
      const bx = Math.cos(theta + speedB) * radiusB;
      const by = Math.sin(phi + speedB) * (radiusB * 0.5);
      const bz = Math.sin(theta + speedB) * radiusB;

      // State C: Singularity (Convergent Sphere)
      const radiusC = 0.5;
      const speedC = t * 0.8;
      const cx = Math.sin(phi) * Math.cos(theta + speedC) * radiusC;
      const cy = Math.sin(phi) * Math.sin(theta + speedC) * radiusC;
      const cz = Math.cos(phi) * radiusC;

      // Master Blending Logic
      let x, y, z, sx, sy, sz;

      if (s < 0.5) {
        // Blend A -> B
        const p = s / 0.5;
        x = THREE.MathUtils.lerp(ax, bx, p);
        y = THREE.MathUtils.lerp(ay, by, p);
        z = THREE.MathUtils.lerp(az, bz, p);
        sx = THREE.MathUtils.lerp(1.8, 0.4, p);
        sy = THREE.MathUtils.lerp(0.04, 0.4, p);
        sz = THREE.MathUtils.lerp(1.8, 0.4, p);
      } else {
        // Blend B -> C
        const p = (s - 0.5) / 0.5;
        x = THREE.MathUtils.lerp(bx, cx, p);
        y = THREE.MathUtils.lerp(by, cy, p);
        z = THREE.MathUtils.lerp(bz, cz, p);
        sx = THREE.MathUtils.lerp(0.4, 0.1, p);
        sy = THREE.MathUtils.lerp(0.4, 0.1, p);
        sz = THREE.MathUtils.lerp(0.4, 0.1, p);
      }

      // Smooth focus shift
      const focusX = isFocused ? 3.5 : 0;
      dummy.position.set(x + focusX, y, z);
      dummy.rotation.set(theta + t * 0.1, phi + t * 0.1, t * 0.05);
      dummy.scale.set(sx, sy, sz);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#0A192F"
        emissive="#22D3EE"
        emissiveIntensity={2}
        metalness={1}
        roughness={0.1}
      />
    </instancedMesh>
  );
};

const Scene = ({ selectedProject }) => {
  const smoothScroll = useRef(0);
  const { camera } = useThree();
  const isFocused = !!selectedProject;

  useFrame(() => {
    // 60FPS DOM Sampling
    const scrollY = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const target = scrollHeight > 0 ? scrollY / scrollHeight : 0;

    // Higher responsiveness - Lenis already smooths the scroll input
    smoothScroll.current = THREE.MathUtils.lerp(
      smoothScroll.current,
      target,
      0.1,
    );
    const s = smoothScroll.current;

    // Linear, predictable camera pathing
    camera.fov = 35 + s * 30;
    camera.position.z = 15 - s * 15;
    camera.position.y = -s * 10;
    camera.updateProjectionMatrix();
  });

  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#030712"]} />
      <fog attach="fog" args={["#030712", 5, 25]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
      <spotLight
        position={[-15, 20, 15]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#ffffff"
      />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <MorphingConstruct scrollRef={smoothScroll} isFocused={isFocused} />
      </Float>

      <Sphere args={[0.2, 32, 32]}>
        <meshBasicMaterial color="#22D3EE" />
      </Sphere>

      <Environment preset="night" />

      <EffectComposer disableNormalPass>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Suspense>
  );
};

export default Scene;
