import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend Architecture",
    level: "Senior",
    desc: "Building scalable, high-performance UI systems with React and Next.js.",
  },
  {
    name: "Three.js / WebGL",
    level: "Expert",
    desc: "Creating immersive 3D environments and procedural visual systems.",
  },
  {
    name: "Performance Optimization",
    level: "Expert",
    desc: "Ensuring 60FPS experiences through optimized assets and rendering pipelines.",
  },
  {
    name: "Creative Engineering",
    level: "Professional",
    desc: "Bridging the gap between avant-garde design and technical feasibility.",
  },
];

const Skills = () => {
  return (
    <section
      id="profile"
      className="relative py-32 px-6 md:px-24 bg-transparent overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Profile Header - Abdul Rehman */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-32 border-b border-white/5 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-mercury-accent font-mono text-[10px] uppercase tracking-[0.5em] block">
              Lead_Architect // Systems_Engineer
            </span>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase italic">
              Abdul <br /> Rehman<span className="text-mercury-accent">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-8"
          >
            <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light italic">
              "Dedicated to the fusion of high-performance logic and avant-garde visual aesthetics. As the founder of Mercury Sols, I architect digital experiences that challenge the boundary of the possible."
            </p>
            <div className="flex gap-12 font-mono text-[10px] text-white/40 uppercase tracking-[0.4em]">
              <div className="space-y-2">
                <span className="block text-mercury-accent">Experience</span>
                <span className="block text-white">4+ Years</span>
              </div>
              <div className="space-y-2">
                <span className="block text-mercury-accent">Focus</span>
                <span className="block text-white">High-Fidelity UI</span>
              </div>
              <div className="space-y-2">
                <span className="block text-mercury-accent">Status</span>
                <span className="block text-white">Active_Node</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Existing Capabilities Grid - Muted for Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-mercury-dark/20 p-12 hover:bg-white/[0.02] transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-mercury-accent/60 font-bold">
                  0{i + 1} // {skill.level}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-mercury-accent/30 transition-colors duration-500">
                  <div className="w-1 h-1 bg-white/20 group-hover:bg-mercury-accent transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4 tracking-tight uppercase">
                {skill.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
