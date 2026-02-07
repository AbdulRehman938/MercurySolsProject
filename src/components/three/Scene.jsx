import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import LiquidSurface from "./LiquidSurface";

const MorphingConstruct = ({ scrollRef, isFocused }) => {
  // ... existing MorphingConstruct ...
  const meshRef = useRef();
  const count = 128; // Increased for vast scale
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const introProgress = useRef(0);

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

    // Intro fly-in logic
    if (introProgress.current < 1) {
      introProgress.current += 0.008;
    }
    const ip = introProgress.current;

    for (let i = 0; i < count; i++) {
      const { phi, theta, rand } = data[i];

      // THREE PILLAR ARCHITECTURE
      const pillarIdx = i % 3;
      const ax = (pillarIdx - 1) * 12 + Math.sin(theta + t * 0.05) * 0.1;
      const ay = (Math.floor(i / 3) - count / 3 / 2) * 1.5; // Optimized height for 3 pillars
      const az = Math.cos(theta + t * 0.05) * 0.1;

      const radiusB = 3 + rand * 8;
      const speedB = t * (0.3 + rand * 0.2);
      const bx = Math.cos(theta + speedB) * radiusB;
      const by = Math.sin(phi + speedB) * (radiusB * 0.6);
      const bz = Math.sin(theta + speedB) * radiusB;

      const radiusC = 0.4 + Math.sin(t * 2 + i) * 0.05;
      const cx = Math.sin(phi) * Math.cos(theta + t) * radiusC;
      const cy = Math.sin(phi) * Math.sin(theta + t) * radiusC;
      const cz = Math.cos(phi) * radiusC;

      let tx, ty, tz, tsx, tsy, tsz;
      if (s < 0.5) {
        const p = s / 0.5;
        const easeP = p * p * (3 - 2 * p);
        tx = THREE.MathUtils.lerp(ax, bx, easeP);
        ty = THREE.MathUtils.lerp(ay, by, easeP);
        tz = THREE.MathUtils.lerp(az, bz, easeP);
        tsx = THREE.MathUtils.lerp(2.5, 0.3, easeP);
        tsy = THREE.MathUtils.lerp(0.02, 0.3, easeP);
        tsz = THREE.MathUtils.lerp(2.5, 0.3, easeP);
      } else {
        const p = (s - 0.5) / 0.5;
        const easeP = p * p * (3 - 2 * p);
        tx = THREE.MathUtils.lerp(bx, cx, easeP);
        ty = THREE.MathUtils.lerp(by, cy, easeP);
        tz = THREE.MathUtils.lerp(bz, cz, easeP);
        tsx = THREE.MathUtils.lerp(0.3, 0.05, easeP);
        tsy = THREE.MathUtils.lerp(0.3, 0.05, easeP);
        tsz = THREE.MathUtils.lerp(0.3, 0.05, easeP);
      }

      // Fly-in Transition
      const flyFactor = 1 - ip;

      // MODEL PARALLAX: Model sways with mouse
      const modelParallaxX = state.mouse.x * 1.5;
      const modelParallaxY = state.mouse.y * 1.5;

      const x =
        tx + Math.cos(phi) * Math.sin(theta) * 30 * flyFactor + modelParallaxX;
      const y =
        ty + Math.sin(phi) * Math.sin(theta) * 30 * flyFactor + modelParallaxY;
      const z = tz + Math.cos(theta) * 30 * flyFactor;

      // Interleaved Visibility: Every other shard appears only on scroll for even distribution
      const visibilityFactor =
        i % 2 === 1 ? THREE.MathUtils.smoothstep(s, 0.05, 0.3) : 1.0;

      const focusX = isFocused ? 5 : 0;
      const focusZ = isFocused ? -3 : 0;
      dummy.position.set(x + focusX, y, z + focusZ);
      dummy.rotation.set(theta + t * 0.1, phi + t * 0.1, t * 0.05);
      dummy.scale.set(
        tsx * ip * visibilityFactor,
        tsy * ip * visibilityFactor,
        tsz * ip * visibilityFactor,
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#030712"
        emissive="#22D3EE"
        emissiveIntensity={1.5}
        metalness={1}
        roughness={0.2}
      />
    </instancedMesh>
  );
};

const StarField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      p[i * 3] = (Math.random() - 0.5) * 60;
      p[i * 3 + 1] = (Math.random() - 0.5) * 60;
      p[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return p;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#22D3EE"
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = ({ selectedProject }) => {
  const smoothScroll = useRef(0);
  const { camera } = useThree();
  const isFocused = !!selectedProject;

  useFrame((state) => {
    const scrollY = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const target = scrollHeight > 0 ? scrollY / scrollHeight : 0;

    smoothScroll.current = THREE.MathUtils.lerp(
      smoothScroll.current,
      target,
      0.06,
    );
    const s = smoothScroll.current;

    // Dramatic Vaster Camera Path with Parallax
    const parallaxX = state.mouse.x * 2;
    const parallaxY = state.mouse.y * 2;

    camera.fov = 40 + s * 40;
    camera.position.z = 24 - s * 22;
    camera.position.y = -s * 12 + parallaxY;
    camera.position.x = Math.sin(s * Math.PI) * 3 + parallaxX;
    camera.lookAt(0, -s * 5, 0);
    camera.updateProjectionMatrix();
  });

  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 50]} />
      <StarField />

      <ambientLight intensity={isFocused ? 0.3 : 1} />
      <pointLight
        position={[10, 10, 10]}
        intensity={isFocused ? 0.8 : 1.5}
        color="#22D3EE"
      />
      <spotLight
        position={[-15, 20, 15]}
        angle={0.3}
        penumbra={1}
        intensity={isFocused ? 1.5 : 4}
        color="#ffffff"
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <MorphingConstruct scrollRef={smoothScroll} isFocused={isFocused} />
      </Float>

      <LiquidSurface scrollRef={smoothScroll} />

      <Environment preset="night" />

      <EffectComposer disableNormalPass>
        <Bloom
          intensity={isFocused ? 0.6 : 1.2}
          luminanceThreshold={0.1}
          luminanceSmoothing={1}
          mipmapBlur
        />
      </EffectComposer>
    </Suspense>
  );
};

export default Scene;
