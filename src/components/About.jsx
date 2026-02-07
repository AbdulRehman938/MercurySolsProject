import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-60 px-6 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
        {/* Left Column: Manifesto Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-20 bg-mercury-accent" />
            <span className="text-mercury-accent font-bold tracking-[0.6em] uppercase text-xs">
              001 / Manifesto
            </span>
          </div>
          <h2 className="text-7xl md:text-[180px] font-black leading-[0.85] tracking-tighter mb-24">
            AESTHETIC <br />
            IS <span className="text-gradient">ENGINEERING.</span>
          </h2>
        </motion.div>

        {/* Second Row: Split Content */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-40 aspect-[3/4] rounded-sm overflow-hidden bg-white/5 border border-white/5 group">
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <span className="text-white/10 font-mono text-sm leading-loose tracking-widest uppercase">
                Architecture // Visuals // Performance // Scale // Depth //
                Motion // Code // Precision // Future // Mercury
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-mercury-dark to-transparent opacity-60" />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <h3 className="text-4xl font-light text-white leading-tight">
              Mercury Sols is a laboratory of digital exploration founded by
              Abdul Rehman. We don't build websites; we engineer experiences
              that exist at the edge of the possible.
            </h3>
            <div className="h-[1px] w-full bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-mercury-muted leading-relaxed font-light text-xl italic">
            <p>
              Every interaction is a calculation. Every pixel is a decision. We
              specialize in the bridge between pure art and rigorous technical
              execution, leveraging WebGL and React to create interfaces that
              feel alive.
            </p>
            <p>
              Our studio is committed to the philosophy of "Essential
              Complexity"—where the underlying engine is sophisticated, but the
              end-user experience is intuitively powerful and visually
              undeniable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-24">
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-mercury-accent">
                Standard
              </span>
              <p className="text-2xl font-black text-white">OPTIMIZED</p>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-mercury-accent">
                Core
              </span>
              <p className="text-2xl font-black text-white">REACTIVE</p>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-mercury-accent">
                Visuals
              </span>
              <p className="text-2xl font-black text-white">CINEMATIC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
