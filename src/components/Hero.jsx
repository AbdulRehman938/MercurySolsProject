import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 overflow-hidden"
    >
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[25vw] font-black tracking-tighter leading-none text-white">
          REHMAN
        </h1>
      </div>

      {/* Technical Metadata Corners */}
      <div className="absolute top-32 left-12 hidden lg:block pointer-events-none">
        <div className="text-[10px] space-y-2 font-mono text-mercury-muted opacity-60 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-mercury-accent" /> Node: Primary_Core
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-white/20" /> Location: Dubai, UAE
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-white/20" /> Lat: 25.2048° N
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-12 hidden lg:block pointer-events-none">
        <div className="text-[10px] space-y-2 font-mono text-mercury-muted opacity-60 uppercase tracking-widest text-right">
          <div>Portfolio_v2.0</div>
          <div className="text-white">Mercury Sols Studio</div>
          <div>All Rights Reserved 2026</div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl relative z-10"
      >
        <div className="flex items-center gap-6 mb-10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-mercury-accent"
          />
          <span className="text-mercury-accent font-bold tracking-[0.5em] uppercase text-[10px]">
            Senior Frontend Architect
          </span>
        </div>

        <h1 className="text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] font-black mb-12 tracking-tighter text-white">
          DIGITAL <br />
          <span className="text-gradient">FRONTIERS.</span>
        </h1>

        <p className="text-mercury-muted text-lg md:text-2xl max-w-2xl mb-16 leading-relaxed font-light font-inter">
          Abdul Rehman — Founder of Mercury Sols. Crafting high-fidelity
          interactive experiences through advanced engineering and creative
          visual systems.
        </p>

        <div className="flex flex-wrap gap-8">
          <motion.a
            whileHover={{ y: -5, gap: "20px" }}
            href="#projects"
            className="group flex items-center gap-4 bg-white text-mercury-dark px-12 py-6 rounded-sm font-black transition-all duration-500 uppercase tracking-widest text-xs"
          >
            Explore Work
            <div className="w-8 h-[1px] bg-mercury-dark transition-all duration-500 group-hover:w-12" />
          </motion.a>
          <motion.a
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.4)",
            }}
            href="#about"
            className="border border-white/10 px-12 py-6 rounded-sm font-black transition-all duration-500 uppercase tracking-widest text-xs backdrop-blur-md text-white"
          >
            Experience
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Scroll Meta */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-mercury-accent to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-mercury-muted rotate-90 origin-left mt-4">
          Downlink
        </span>
      </div>
    </section>
  );
};

export default Hero;
