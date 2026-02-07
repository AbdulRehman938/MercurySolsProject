import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    if (progress === 100) {
      setTimeout(() => setIsFinished(true), 1500);
    }
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{
            clipPath: "inset(50% 0 50% 0)",
            opacity: 0,
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Mouse Glow */}
          <motion.div
            animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
            transition={{ type: "spring", damping: 50, stiffness: 200 }}
            className="absolute w-[800px] h-[800px] bg-mercury-accent/5 rounded-full blur-[150px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-12">
            <div className="flex flex-col gap-2 mb-12 w-full max-w-md">
              <div className="flex justify-between items-end mb-2">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[8px] font-mono text-mercury-accent tracking-[1em]"
                >
                  INITIALIZING_CORE
                </motion.span>
                <div className="text-3xl font-black italic tabular-nums text-white">
                  {Math.round(progress)}
                  <span className="text-mercury-accent text-xs ml-1">%</span>
                </div>
              </div>
              <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute inset-0 bg-mercury-accent shadow-[0_0_15px_#22D3EE]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 w-full border-t border-white/5 pt-8">
              {[
                "DATA_VORTEX",
                "GEOMETRIC_SEED",
                "SPATIAL_SYNC",
                "NEURAL_LINK",
              ].map((label, i) => (
                <div
                  key={label}
                  className="space-y-3 opacity-40 hover:opacity-100 transition-opacity"
                >
                  <div className="flex justify-between items-center text-[7px] font-mono text-white tracking-widest uppercase">
                    <span>{label}</span>
                    <span
                      className={
                        progress > (i + 1) * 20
                          ? "text-mercury-accent"
                          : "text-white/20"
                      }
                    >
                      {progress > (i + 1) * 20 ? "[DONE]" : "[....]"}
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-white/5 relative">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress / 100 }}
                      className="absolute inset-0 bg-white/20 origin-left"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-12 right-12 text-[8px] font-mono text-white/10 text-right leading-relaxed">
            MERCURY_LABS // ALPHA_V4.0
            <br />
            COORD_X: {mousePos.x} | COORD_Y: {mousePos.y}
            <br />
            STATUS:{" "}
            {progress < 100 ? "COLLECTING_FRAGMENTS" : "READY_FOR_DEPLOY"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
