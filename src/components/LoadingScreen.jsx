import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setIsFinished(true), 1000);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[200] bg-mercury-dark flex flex-col items-center justify-center"
        >
          <div className="relative w-72 h-[1px] bg-white/10 mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute inset-0 bg-mercury-accent"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-mono text-mercury-muted uppercase tracking-[0.5em]"
            >
              System_Initialization
            </motion.span>
            <span className="text-2xl font-black text-white tracking-widest">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Technical Metadata Decoration */}
          <div className="absolute bottom-12 left-12 opacity-20">
            <div className="text-[8px] font-mono text-mercury-muted space-y-1">
              <div>// CORE_ENGINE_ACTIVE</div>
              <div>// SYNC_PHASE_LOCKED</div>
            </div>
          </div>

          <div className="absolute top-12 right-12 opacity-20">
            <div className="text-[8px] font-mono text-mercury-muted text-right">
              <div>V4.0.2</div>
              <div>2026_MERCURY_LABS</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
