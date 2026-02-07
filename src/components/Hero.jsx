import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1.8 }, // Wait for loader exit
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Technical Metadata Rail */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-32 opacity-20 pointer-events-none z-30">
        <div className="font-mono text-[8px] space-y-3 uppercase tracking-[1em] vertical-text">
          <div className="text-mercury-accent">System_Initialization</div>
          <div className="text-white">// SYNC: STABLE</div>
        </div>
        <div className="font-mono text-[8px] space-y-3 uppercase tracking-[1em] vertical-text">
          <div className="text-mercury-accent">Spatial_Node</div>
          <div className="text-white">// POS: [67.0011, 24.8607]</div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 container mx-auto px-6 flex flex-col items-center pointer-events-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-14 flex flex-col items-center gap-4"
        >
          <span className="text-mercury-accent font-mono text-[10px] uppercase tracking-[1.5em] block">
            Studio_Initialization // v4.2
          </span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-mercury-accent to-transparent" />
        </motion.div>

        <div className="relative">
          <motion.h1
            variants={itemVariants}
            className="text-[10vw] md:text-[14vw] font-[900] leading-[0.7] tracking-tighter text-white uppercase italic select-none mix-blend-screen"
          >
            MERCURY SOLS<span className="text-mercury-accent">.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="absolute -top-12 -right-12 md:-top-20 md:-right-20 pointer-events-none"
          >
            <span className="text-[10px] md:text-[12px] font-mono text-white/30 whitespace-nowrap uppercase tracking-[1em] italic">
              ENGINEERING // THE_VOID
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-center max-w-4xl"
        >
          <p className="text-xl md:text-3xl font-light text-slate-400 leading-relaxed tracking-wide italic">
            Architecting{" "}
            <span className="text-white font-medium">Digital Frontiers</span>{" "}
            through high-performance engineering and{" "}
            <span className="text-mercury-accent">Visual Systems</span>.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-24 flex flex-col md:flex-row gap-12 items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-16 py-7 bg-white text-mercury-dark font-black uppercase text-[10px] tracking-[0.6em] overflow-hidden transition-all duration-500 rounded-sm"
          >
            <span className="relative z-10">Initiate Protocol</span>
            <div className="absolute inset-0 bg-mercury-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
          </motion.button>

          <div className="flex items-center gap-6 text-white/30 text-[10px] font-mono tracking-[1em] uppercase">
            <div className="w-20 h-[1px] bg-white/10" />
            <span>Downlink_Scan</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
