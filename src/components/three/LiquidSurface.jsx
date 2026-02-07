import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const LiquidSurface = ({ scrollRef }) => {
  const meshRef = useRef();
  const { viewport, size, camera } = useThree();

  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 },
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec2 mouse = uMouse * 0.5 + 0.5;
        
        // PHYSICAL POND DYNAMICS
        vec2 dir = uv - mouse;
        float dist = length(dir);
        
        // Multi-layered ripple interference
        float ripple = sin(dist * 35.0 - uTime * 4.0);
        float ripple2 = sin(dist * 50.0 - uTime * 6.0);
        float finalRipple = (ripple + ripple2 * 0.5) * smoothstep(0.4, 0.0, dist);
        
        // Ambient organic waves
        float wave = sin(uv.y * 12.0 + uTime * 0.5) * 0.05;
        wave += cos(uv.x * 10.0 + uTime * 0.3) * 0.05;

        float h = finalRipple + wave;
        
        // Mercury Cyan / Deep Water Colors
        vec3 cyanGlow = vec3(0.13, 0.83, 0.93);
        
        // Specular highlights on peaks
        float spec = pow(max(0.0, h), 4.0) * 0.5;
        
        // DIM IN HERO: Hide liquid when uScroll is low
        float visibility = smoothstep(0.1, 0.3, uScroll);
        
        vec3 finalColor = cyanGlow + (spec * 0.8);
        float alpha = ((h * 0.12) + (spec * 0.4)) * visibility;

        gl_FragColor = vec4(finalColor, max(0.0, alpha));
      }
    `,
    }),
    [],
  );

  useFrame((state) => {
    // Dynamic Z: Stay 2.5 units in front of camera
    if (meshRef.current) {
      meshRef.current.position.z = camera.position.z - 2.5;
      shader.uniforms.uTime.value = state.clock.getElapsedTime();
      shader.uniforms.uMouse.value.lerp(state.mouse, 0.06);
      shader.uniforms.uScroll.value = scrollRef ? scrollRef.current : 0;
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width * 3, viewport.height * 3, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        {...shader}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export default LiquidSurface;
