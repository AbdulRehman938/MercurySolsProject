import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const BackgroundCanvas = ({ selectedProject }) => {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, stencil: false, depth: true }}
        dpr={[1, 2]}
      >
        <Scene selectedProject={selectedProject} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
